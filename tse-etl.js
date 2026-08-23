/**
 * tse-etl.js — Colinha 2026
 *
 * Baixa o dataset oficial de candidaturas do TSE e gera um JSON por UF
 * em public/data/. Roda no GitHub Actions, sem PC.
 *
 * Módulo ES (o package.json do projeto usa "type": "module").
 * Usa o fetch nativo do Node — sem undici, que muda de API a cada versão.
 */

import fs from "node:fs";
import path from "node:path";
import AdmZip from "adm-zip";
import { parse } from "csv-parse/sync";

const ANO = 2026;
const RAIZ = process.cwd();
const SAIDA = path.join(RAIZ, "public", "data");
const URL = `https://cdn.tse.jus.br/estatistica/sead/odsele/consulta_cand/consulta_cand_${ANO}.zip`;

const CARGOS = { 1:"presidente", 3:"governador", 5:"senador", 6:"depFederal", 7:"depEstadual", 8:"depDistrital" };
/* Em agosto quase nada foi julgado ainda: a maioria fica "AGUARDANDO JULGAMENTO".
   Por isso recusamos só quem está claramente fora, em vez de exigir uma lista de aptos. */
const FORA = /INDEFERID|INAPT|RENUNCI|RENÚNCI|CASSAD|FALECID|CANCELAD|IMPUGNAD|NAO CONHECIMENTO|NÃO CONHECIMENTO/i;

/* melhor número: mais zeros à direita > dígitos repetidos > sufixo menor */
function score(numero, numeroPartido) {
  const n = String(numero || "");
  const sufixo = n.slice(String(numeroPartido || "").length);
  if (!sufixo) return 1e9;
  const zeros = (sufixo.match(/0+$/) || [""])[0].length;
  const iguais = new Set(sufixo).size === 1 ? 1 : 0;
  return zeros * 1e6 + iguais * 1e4 + (9999 - (parseInt(sufixo, 10) || 9999));
}

const col = (row, ...nomes) => {
  for (const n of nomes) if (row[n] !== undefined) return row[n];
  return "";
};

/* O TSE roda um WAF que rejeita cliente que não parece navegador.
   Tentamos perfis de cabeçalho em sequência e relatamos qual passou. */
const PERFIS = [
  { nome: "Chrome/Windows + referer do portal", headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "referer": "https://dadosabertos.tse.jus.br/dataset/candidatos-2026",
      "upgrade-insecure-requests": "1",
      "sec-fetch-dest": "document", "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-site", "sec-fetch-user": "?1",
    } },
  { nome: "Firefox/Linux, sem referer", headers: {
      "user-agent": "Mozilla/5.0 (X11; Linux x86_64; rv:133.0) Gecko/20100101 Firefox/133.0",
      "accept": "*/*",
      "accept-language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
    } },
  { nome: "Safari/macOS", headers: {
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Safari/605.1.15",
      "accept": "application/zip,application/octet-stream,*/*",
      "referer": "https://dadosabertos.tse.jus.br/",
    } },
];

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

/* O CDN do TSE fica atrás de WAF e recusa requisição que não pareça navegador.
   Tentamos perfis de cabeçalho em ordem e usamos o primeiro que passar. */
const TENTATIVAS = [
  { nome: "navegador completo", headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "accept-language": "pt-BR,pt;q=0.9,en;q=0.8",
      "referer": "https://dadosabertos.tse.jus.br/",
      "sec-fetch-dest": "document", "sec-fetch-mode": "navigate", "sec-fetch-site": "same-site",
      "upgrade-insecure-requests": "1",
  }},
  { nome: "navegador simples", headers: {
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
      "accept": "*/*",
  }},
  { nome: "curl", headers: { "user-agent": "curl/8.5.0", "accept": "*/*" } },
  { nome: "sem cabeçalho", headers: {} },
];

async function baixar() {
  console.log("→ baixando", URL);
  const falhas = [];

  for (const t of TENTATIVAS) {
    let r;
    try {
      r = await fetch(URL, { headers: t.headers, redirect: "follow" });
    } catch (e) {
      console.log(`  [${t.nome}] erro de rede: ${e.message}`);
      falhas.push(`${t.nome}: ${e.message}`);
      continue;
    }
    console.log(`  [${t.nome}] HTTP ${r.status} ${r.statusText}`);
    if (!r.ok) { falhas.push(`${t.nome}: HTTP ${r.status}`); continue; }

    const buf = Buffer.from(await r.arrayBuffer());
    console.log(`  ✓ passou com "${t.nome}" — ${(buf.length / 1024 / 1024).toFixed(1)} MB`);
    if (buf.length < 100000) throw new Error("arquivo pequeno demais — deve ser página de erro, não o ZIP");
    return buf;
  }

  throw new Error(
    `todos os perfis foram recusados pelo TSE:\n    ${falhas.join("\n    ")}\n\n` +
    `O endereço está correto (confirmado no Portal de Dados Abertos). O bloqueio é do WAF\n` +
    `contra o IP do GitHub Actions. Alternativa: baixar o ZIP manualmente e rodar o script\n` +
    `num computador, ou commitar public/data à mão uma vez.`);
}

function lerCsvs(buf) {
  const zip = new AdmZip(buf);
  const dentro = zip.getEntries().map((e) => e.entryName);
  const csvs = zip.getEntries().filter((e) => /\.csv$/i.test(e.entryName));
  if (!csvs.length) throw new Error("nenhum CSV no ZIP. Conteúdo: " + dentro.slice(0, 10).join(", "));
  console.log(`→ ${csvs.length} CSVs no pacote`);

  const linhas = [];
  let logou = false;
  for (const e of csvs) {
    const rows = parse(e.getData().toString("latin1"), {
      delimiter: ";", quote: '"', columns: true,
      skip_empty_lines: true, relax_column_count: true, relax_quotes: true,
    });
    if (!logou && rows[0]) {
      console.log("→ colunas:", Object.keys(rows[0]).join(", "));
      logou = true;
    }
    linhas.push(...rows);
  }
  return linhas;
}

/* diagnóstico: quantas linhas por situação, para nunca mais filtrar no escuro */
function situacoes(rows) {
  const c = {};
  for (const r of rows) {
    const v = col(r, "DS_SITUACAO_CANDIDATURA") || "(vazio)";
    c[v] = (c[v] || 0) + 1;
  }
  return Object.entries(c).sort((a, b) => b[1] - a[1]);
}

function normalizar(row) {
  /* vice e suplente têm código de cargo próprio (2, 4, 10, 11) e já ficam de fora daqui */
  const cargo = CARGOS[Number(col(row, "CD_CARGO"))];
  if (!cargo) return null;

  if (FORA.test(col(row, "DS_SITUACAO_CANDIDATURA"))) return null;

  const fed = col(row, "NM_FEDERACAO");
  return {
    uf: col(row, "SG_UF"),
    cargo,
    numero: col(row, "NR_CANDIDATO"),
    numeroPartido: col(row, "NR_PARTIDO"),
    nome: col(row, "NM_URNA_CANDIDATO") || col(row, "NM_CANDIDATO"),
    partido: col(row, "SG_PARTIDO"),
    federacao: fed && fed !== "#NULO#" ? fed : null,
    foto: `https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/${col(row, "CD_ELEICAO")}/${col(row, "SQ_CANDIDATO")}`,
  };
}

/* Senado elege DUAS vagas em 2026: guarda os dois melhores números por sigla. */
function representantes(cands) {
  const pilhas = new Map();
  for (const c of cands) {
    const k = `${c.uf}|${c.cargo}|${c.partido}`;
    if (!pilhas.has(k)) pilhas.set(k, []);
    pilhas.get(k).push(c);
  }
  const out = [];
  for (const [k, lista] of pilhas) {
    lista.sort((a, b) => score(b.numero, b.numeroPartido) - score(a.numero, a.numeroPartido));
    const quantos = k.includes("|senador|") ? 2 : 1;
    lista.slice(0, quantos).forEach((c, i) => {
      out.push({ ...c, cargo: c.cargo === "senador" ? `senador${i + 1}` : c.cargo });
    });
  }
  return out;
}

function indexar(reps) {
  const out = {};
  const nacional = {};
  for (const c of reps) {
    const alvo = c.cargo === "presidente" ? nacional : (out[c.uf] ??= {});
    (alvo[c.partido] ??= {})[c.cargo] = {
      numero: c.numero, nome: c.nome, partido: c.partido,
      federacao: c.federacao, foto: c.foto,
    };
  }
  for (const uf of Object.keys(out))
    for (const [sigla, cargos] of Object.entries(nacional))
      if (cargos.presidente) (out[uf][sigla] ??= {}).presidente = cargos.presidente;
  return out;
}

try {
  const brutos = lerCsvs(await baixar());
  console.log(`→ ${brutos.length} linhas lidas`);

  console.log("→ situações encontradas:");
  for (const [v, n] of situacoes(brutos)) console.log(`     ${n.toString().padStart(6)}  ${v}`);

  const cands = brutos.map(normalizar).filter(Boolean);
  if (!cands.length) throw new Error("nenhuma candidatura passou — veja as situações listadas acima e ajuste a regex FORA");
  console.log(`→ ${cands.length} candidaturas válidas`);

  const indice = indexar(representantes(cands));
  fs.mkdirSync(SAIDA, { recursive: true });
  for (const [uf, dados] of Object.entries(indice))
    fs.writeFileSync(path.join(SAIDA, `${uf}.json`), JSON.stringify(dados));

  fs.writeFileSync(path.join(SAIDA, "_meta.json"), JSON.stringify({
    atualizadoEm: new Date().toISOString(), fonte: URL,
    ufs: Object.keys(indice).sort(), candidaturas: cands.length,
  }, null, 2));

  const ex = indice.SP || Object.values(indice)[0];
  console.log(`\n✓ ${Object.keys(indice).length} UFs gravadas em public/data`);
  console.log("  amostra:", JSON.stringify(Object.values(ex)[0]).slice(0, 220));
} catch (e) {
  console.error("\n✗ FALHOU:", e.message);
  console.error(e.stack);
  process.exit(1);
}
