/**
 * prerender.js — Colinha 2026
 *
 * Roda depois do `vite build`. Para cada uma das 36 ideologias, cria
 * dist/tipo/<slug>/index.html com o texto já dentro do HTML.
 *
 * Por que isso importa: o Google e o revisor da Amazon abrem a página e
 * veem conteúdo de verdade, sem depender de JavaScript. Quando o JS
 * carrega, o React assume e vira o app normal.
 *
 * Também gera sitemap.xml e robots.txt.
 */

import fs from "node:fs";
import path from "node:path";
import { IDEOLOGIAS } from "./ideologias.js";

const DIST = path.join(process.cwd(), "dist");
const SITE = "https://colinha2026.app.br";

const esc = (s) => s
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

const base = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

/* o Vite gera caminhos relativos ao root; dentro de /tipo/x/ eles quebram */
const absolutizar = (html) =>
  html.replace(/(src|href)="\/?(assets\/[^"]+)"/g, '$1="/$2"');

function pagina(i) {
  const titulo = `${i.nome} — o que é, de onde vem e as críticas | Colinha 2026`;
  const desc = i.chamada;
  const eixoL = i.l <= 3 ? "identitário" : "universalista";
  const eixoC = i.c <= 3 ? "esquerda" : "direita";

  const corpo = `
<article class="tipo-seo">
  <nav><a href="/">Colinha 2026</a> › <a href="/tipos">Os 36 tipos</a> › ${esc(i.nome)}</nav>
  <h1>${esc(i.nome)}</h1>
  <p class="chamada">${esc(i.chamada)}</p>
  <p class="coord">Posição na matriz: linha ${i.l}, coluna ${i.c} · eixo econômico à ${eixoC} · eixo social ${eixoL}</p>
  ${i.p.map((par) => `<p>${esc(par)}</p>`).join("\n  ")}
  <p class="cta"><a href="/">Descubra em 5 cliques se este é o seu perfil e monte sua colinha para as eleições de 2026 →</a></p>
</article>`.trim();

  const dados = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${i.nome}: o que é, de onde vem e as críticas`,
    description: desc,
    about: { "@type": "Thing", name: i.nome },
    inLanguage: "pt-BR",
    isPartOf: { "@type": "WebSite", name: "Colinha 2026", url: SITE },
    author: { "@type": "Person", name: "Luigi Nunes Labigalini" },
  };

  return absolutizar(base)
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(titulo)}</title>`)
    .replace("</head>",
      `  <meta name="description" content="${esc(desc)}" />\n` +
      `  <link rel="canonical" href="${SITE}/tipo/${i.slug}" />\n` +
      `  <meta property="og:title" content="${esc(i.nome)} — Colinha 2026" />\n` +
      `  <meta property="og:description" content="${esc(desc)}" />\n` +
      `  <meta property="og:url" content="${SITE}/tipo/${i.slug}" />\n` +
      `  <script type="application/ld+json">${JSON.stringify(dados)}</script>\n` +
      `  <style>.tipo-seo{max-width:640px;margin:0 auto;padding:28px 20px;font:16px/1.65 system-ui,sans-serif;color:#14161A}\n` +
      `  .tipo-seo h1{font-size:34px;line-height:1.1;margin:14px 0 8px}\n` +
      `  .tipo-seo nav{font-size:13px;color:#6E6A61}.tipo-seo nav a{color:#1B7A45}\n` +
      `  .tipo-seo .chamada{font-size:19px;color:#1B7A45;margin-bottom:6px}\n` +
      `  .tipo-seo .coord{font-size:13px;color:#6E6A61;margin-bottom:18px}\n` +
      `  .tipo-seo p{margin-bottom:14px}.tipo-seo .cta a{color:#1B7A45;font-weight:600}</style>\n` +
      `</head>`)
    .replace('<div id="root"></div>', `<div id="root">${corpo}</div>`);
}

/* ── índice /tipos ── */
function indice() {
  const itens = IDEOLOGIAS.map((i) =>
    `<li><a href="/tipo/${i.slug}"><strong>${esc(i.nome)}</strong><br><span>${esc(i.chamada)}</span></a></li>`).join("\n    ");

  const corpo = `
<article class="tipo-seo">
  <nav><a href="/">Colinha 2026</a> › Os 36 tipos</nav>
  <h1>Os 36 tipos políticos</h1>
  <p class="chamada">Cada casa da matriz tem um nome, uma história e um autor de referência.</p>
  <ul class="lista">
    ${itens}
  </ul>
  <p class="cta"><a href="/">Faça o teste e descubra o seu →</a></p>
</article>`.trim();

  return absolutizar(base)
    .replace(/<title>[^<]*<\/title>/, "<title>Os 36 tipos políticos — Colinha 2026</title>")
    .replace("</head>",
      `  <meta name="description" content="As 36 posições da matriz política, do comunismo ao anarcocapitalismo: o que cada uma defende, de onde veio e quais são as críticas." />\n` +
      `  <link rel="canonical" href="${SITE}/tipos" />\n` +
      `  <style>.tipo-seo{max-width:640px;margin:0 auto;padding:28px 20px;font:16px/1.65 system-ui,sans-serif;color:#14161A}\n` +
      `  .tipo-seo h1{font-size:34px;line-height:1.1;margin:14px 0 8px}\n` +
      `  .tipo-seo nav{font-size:13px;color:#6E6A61}.tipo-seo nav a{color:#1B7A45}\n` +
      `  .tipo-seo .chamada{font-size:19px;color:#1B7A45;margin-bottom:18px}\n` +
      `  .lista{list-style:none;padding:0}.lista li{margin-bottom:14px}\n` +
      `  .lista a{color:#14161A;text-decoration:none}.lista span{font-size:14px;color:#6E6A61}\n` +
      `  .tipo-seo .cta a{color:#1B7A45;font-weight:600}</style>\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${corpo}</div>`);
}

/* ── escrita ── */
let n = 0;
for (const i of IDEOLOGIAS) {
  const dir = path.join(DIST, "tipo", i.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), pagina(i));
  n++;
}

fs.mkdirSync(path.join(DIST, "tipos"), { recursive: true });
fs.writeFileSync(path.join(DIST, "tipos", "index.html"), indice());

const hoje = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: SITE + "/", pri: "1.0" },
  { loc: SITE + "/tipos", pri: "0.8" },
  ...IDEOLOGIAS.map((i) => ({ loc: `${SITE}/tipo/${i.slug}`, pri: "0.6" })),
];
fs.writeFileSync(path.join(DIST, "sitemap.xml"),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${hoje}</lastmod><priority>${u.pri}</priority></url>`).join("\n")}
</urlset>`);

fs.writeFileSync(path.join(DIST, "robots.txt"),
`User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`✓ ${n} páginas de tipo + índice + sitemap + robots gerados em dist/`);
