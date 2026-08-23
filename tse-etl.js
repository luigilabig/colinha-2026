/**
 * tse-etl.js — Colinha 2026
 *
 * Baixa o dataset oficial de candidaturas do TSE e gera um JSON por UF
 * em public/data/. Roda no GitHub Actions, sem PC.
 *
 * Escrito em módulo ES porque o package.json do projeto usa "type": "module".
 */

import fs from "node:fs";
import path from "node:path";
import { request } from "undici";
import AdmZip from "adm-zip";
import { parse } from "csv-parse/sync";

const ANO = 2026;
const RAIZ = process.cwd();
const SAIDA = path.join(RAIZ, "public", "data");
const URL = `https://cdn.tse.jus.br/estatistica/sead/odsele/consulta_cand/consulta_cand_${ANO}.zip`;

const CARGOS = { 1:"presidente", 3:"governador", 5:"senador", 6:"depFederal", 7:"depEstadual", 8:"depDistrital" };
const APTOS = ["APTO", "DEFERIDO", "DEFERIDO COM RECURSO"];

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

async function baixar() {
  console.log("→ baixando", URL);
  const r = await request(URL, {
    maxRedirections: 5,
    headers: { "user-agent": "colinha2026/1.0 (+https://github.com)" },
  });
  console.log("  HTTP", r.statusCode);
  if (r.statusCode !== 200) {
    throw new Error(
      `TSE respondeu ${r.statusCode}. Abra ${URL} no navegador para conferir se o arquivo existe. ` +
      `Se o TSE mudou o endereço, ajuste a constante URL no topo deste arquivo.`);
  }
  const buf = Buffer.from(await r.body.arrayBuffer());
  console.log(`  ${(buf.length / 1024 / 1024).toFixed(0)} MB baixados`);
  if (buf.length < 100000) throw new Error("arquivo pequeno demais — provavelmente é uma página de erro, não o ZIP");
  return buf;
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

function normalizar(row) {
  const cargo = CARGOS[Number(col(row, "CD_CARGO"))];
  if (!cargo) return null;

  const sit = String(col(row, "DS_SITUACAO_CANDIDATURA", "DS_SIT_TOT_TURNO")).toUpperCase();
  if (!APTOS.includes(sit)) return null;
  if (/INDEFERID|RENÚNCIA|RENUNCIA|CASSA|FALECID/i.test(col(row, "DS_DETALHE_SITUACAO_CAND"))) return null;
  if (Number(col(row, "CD_SITUACAO_CANDIDATO_SUPERIOR")) === -1) return null;   // vice / suplente

  const fed = col(row, "NM_FEDERACAO");
  return {
    uf: col(row, "SG_UF"),
    cargo,
    numero: col(row, "NR_CANDIDATO"),
    numeroPartido: col(row, "NR_PARTIDO"),
    nome: col(row, "NM_URNA_CANDIDATO") || col(row, "NM_CANDIDATO"),
    partido: col(row, "SG_PARTIDO"),
    federacao: fed && fed !== "#NULO#" ? fed : null,
    foto: `https://divulgacandcontas.tse.jus.br/divulga/rest/arquivo/img/${col(row, "SQ_ELEICAO")}/${col(row, "SQ_CANDIDATO")}`,
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

  const cands = brutos.map(normalizar).filter(Boolean);
  if (!cands.length) throw new Error("nenhuma candidatura apta — confira a lista de colunas acima");
  console.log(`→ ${cands.length} candidaturas aptas`);

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
