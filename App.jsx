import React, { useState, useMemo, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════
   COLINHA 2026 — v12 — ligado ao TSE
   Avatares: CORPO INTEIRO, pose heroica, família de cor por
   quadrante. Mesmo SVG serve de miniatura via recorte de viewBox.
   ═══════════════════════════════════════════════════════════ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Azeret+Mono:wght@600;800&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Instrument+Serif:ital@0;1&display=swap');
/* trocar por 'Fraunces' para a versão serifada dos títulos */
.ap{--display:'Bricolage Grotesque',system-ui,sans-serif;
 --papel:#FBFAF7;--tinta:#14161A;--grafite:#6E6A61;--linha:#E4E1D9;
 --urna:#1B7A45;--urna-luz:#25A25C;--urna-fraca:#EAF4EE;--marca:#F5A524;--alerta:#C2410C;
 font-family:'Archivo',system-ui,sans-serif;background:var(--papel);color:var(--tinta);
 min-height:100vh;display:flex;justify-content:center;-webkit-font-smoothing:antialiased}
.ap *{box-sizing:border-box;margin:0;padding:0}
.shell{width:100%;max-width:440px;min-height:100vh;background:var(--papel);
 border-inline:1px solid var(--linha);display:flex;flex-direction:column;position:relative}
.ap button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit}
.ap button:focus-visible{outline:3px solid var(--marca);outline-offset:2px}
.eyebrow{font-family:'Azeret Mono',monospace;font-size:9.5px;font-weight:800;
 letter-spacing:.18em;text-transform:uppercase;color:var(--grafite)}
.topbar{padding:14px 18px 12px;display:flex;align-items:center;gap:10px;
 border-bottom:1px solid var(--linha);position:sticky;top:0;z-index:30;background:var(--papel)}
.mark{font-family:var(--display);font-weight:800;font-size:14px}
.mark em{font-style:normal;box-shadow:inset 0 -6px 0 var(--marca)}
.burger{margin-left:auto;width:34px;height:34px;display:grid;place-items:center;
 border:1.5px solid var(--linha);border-radius:9px;background:#fff}
.burger span{display:block;width:16px;height:2px;background:var(--tinta);border-radius:2px;margin:2px 0}
.menu{position:absolute;top:56px;right:14px;z-index:60;background:#fff;border:1.5px solid var(--tinta);
 border-radius:13px;overflow:hidden;min-width:214px;box-shadow:0 18px 40px -14px rgba(20,22,26,.4);
 animation:pop .17s cubic-bezier(.2,.8,.3,1)}
@keyframes pop{from{opacity:0;transform:translateY(-7px) scale(.97)}to{opacity:1;transform:none}}
.menu button{display:flex;align-items:center;gap:10px;width:100%;text-align:left;padding:13px 15px;
 font-size:14px;font-weight:600;border-bottom:1px solid var(--linha)}
.menu button:hover{background:var(--papel)}
.menu button.cafe{background:var(--urna);color:#fff;border-bottom:none;font-family:var(--display);font-weight:800}
.scrim{position:absolute;inset:0;z-index:50}
.bar{height:3px;background:var(--linha);position:sticky;top:47px;z-index:20}
.bar i{display:block;height:100%;background:var(--urna);transition:width .35s cubic-bezier(.4,0,.2,1)}
.screen{padding:24px 20px 40px;flex:1;animation:rise .3s cubic-bezier(.2,.7,.3,1)}
@keyframes rise{from{opacity:0;transform:translateY(9px)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){.ap *{animation:none!important;transition:none!important}}
.kicker{display:inline-block;background:var(--tinta);color:var(--papel);border-radius:20px;
 padding:5px 12px;font-family:'Azeret Mono',monospace;font-size:9.5px;font-weight:800;letter-spacing:.14em}
h1.lede{font-family:var(--display);font-weight:700;font-size:34px;line-height:1.08;
 letter-spacing:-.02em;margin:14px 0 6px;font-optical-sizing:auto}
h1.lede em{font-style:normal;display:inline-block;padding-bottom:.09em;
 background-image:linear-gradient(var(--marca),var(--marca));background-repeat:no-repeat;
 background-size:100% .17em;background-position:0 100%}
.cliques{font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-size:25px;
 line-height:1.1;color:var(--urna);margin-bottom:14px}
p.sub{font-size:15.5px;line-height:1.5;color:var(--grafite)}
p.sub b{color:var(--tinta);font-weight:600}
.rule{border:none;border-top:1px solid var(--linha);margin:22px 0 18px}
.chamada{font-family:var(--display);font-weight:800;font-size:25px;line-height:1.05;
 letter-spacing:-.02em;text-align:center;margin-bottom:4px}
.chamada span{display:block;font-size:30px;color:var(--urna);line-height:1;
 margin-top:6px;animation:seta 1.5s ease-in-out infinite}
@keyframes seta{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}
.uf-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin-top:12px}
.uf{border:1.5px solid var(--linha);border-radius:9px;padding:10px 0;
 font-family:'Azeret Mono',monospace;font-weight:800;font-size:13px;background:#fff;transition:.14s}
.uf:hover{border-color:var(--tinta);transform:translateY(-2px)}
.link{font-size:12.5px;color:var(--grafite);text-decoration:underline;text-underline-offset:3px;
 margin-top:20px;display:block;text-align:center;width:100%}
.qtag{display:flex;align-items:center;gap:9px;margin-bottom:13px}
.qtag hr{flex:1;border:none;border-top:1px solid var(--linha)}
h2.q{font-family:var(--display);font-weight:800;font-size:25px;line-height:1.14;letter-spacing:-.025em;margin-bottom:20px}
.opts{display:flex;flex-direction:column;gap:11px}
.opt{display:flex;gap:13px;align-items:flex-start;text-align:left;width:100%;
 border:1.5px solid var(--linha);border-radius:12px;background:#fff;
 padding:15px 15px 15px 13px;font-size:14.8px;line-height:1.4;transition:.15s}
.opt:hover{border-color:var(--tinta);transform:translateX(2px)}
.opt kbd{font-family:'Azeret Mono',monospace;font-weight:800;font-size:12px;
 background:var(--urna-fraca);color:var(--urna);border:1.5px solid var(--urna);
 border-radius:6px;width:25px;height:25px;display:grid;place-items:center;flex:0 0 25px}
.back{margin-top:20px;font-size:13px;color:var(--grafite)}
.veil{position:absolute;inset:0;background:rgba(20,22,26,.6);z-index:70;display:flex;align-items:flex-end;animation:fade .22s}
@keyframes fade{from{opacity:0}to{opacity:1}}
.sheet{background:var(--papel);width:100%;border-radius:22px 22px 0 0;padding:26px 20px 24px;
 animation:up .32s cubic-bezier(.2,.8,.3,1)}
@keyframes up{from{transform:translateY(100%)}to{transform:none}}
.pix{width:100%;border-radius:14px;padding:20px;font-family:var(--display);font-weight:800;font-size:18px;
 color:#fff;display:flex;align-items:center;justify-content:center;gap:10px;
 background:linear-gradient(140deg,var(--urna-luz),var(--urna));animation:beat 1.7s infinite}
@keyframes beat{0%{box-shadow:0 0 0 0 rgba(37,162,92,.6);transform:scale(1)}
 55%{box-shadow:0 0 0 16px rgba(37,162,92,0);transform:scale(1.022)}
 100%{box-shadow:0 0 0 0 rgba(37,162,92,0);transform:scale(1)}}
.tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px}
.tier{border:1.5px solid var(--urna);border-radius:10px;padding:11px 0;background:#fff;
 font-family:'Azeret Mono',monospace;font-weight:800;font-size:14px;color:var(--urna)}
.tier[data-on="1"]{background:var(--urna);color:#fff}
.ghost{width:100%;margin-top:13px;color:var(--grafite);font-size:13.5px;padding:12px;
 text-decoration:underline;text-underline-offset:3px}
.pixbox{margin-top:15px;background:#fff;border:1.5px dashed var(--urna);border-radius:11px;padding:13px}
.pixbox code{font-family:'Azeret Mono',monospace;font-size:10px;line-height:1.6;word-break:break-all;
 display:block;color:var(--grafite);margin-top:7px}
.recap{border:1.5px solid var(--linha);border-radius:13px;background:#fff;overflow:hidden;margin-top:9px}
.rrow{display:flex;gap:11px;padding:11px 13px;border-bottom:1px solid var(--linha)}
.rrow:last-child{border-bottom:none}
.rrow i{font-family:'Azeret Mono',monospace;font-style:normal;font-weight:800;font-size:10px;color:var(--grafite);padding-top:3px}
.rrow div{flex:1;min-width:0}
.rrow p{font-size:11.5px;color:var(--grafite);line-height:1.3}
.rrow strong{display:block;font-size:13px;font-weight:600;line-height:1.32;margin-top:2px}
.chg{font-family:'Azeret Mono',monospace;font-size:9.5px;font-weight:800;color:var(--urna);
 border:1.5px solid var(--urna);border-radius:6px;padding:5px 7px;height:fit-content}
.chg:hover{background:var(--urna);color:#fff}
.verdict{margin-top:30px;text-align:center}
.palco{background:linear-gradient(180deg,#FFF 0%,var(--papel) 100%);border:1px solid var(--linha);
 border-radius:16px;padding:14px 0 6px;margin-top:8px}
.verdict h3{font-family:var(--display);font-weight:800;font-size:31px;line-height:1.04;letter-spacing:-.03em;margin:14px 0 8px}
.coord{font-family:'Azeret Mono',monospace;font-size:10.5px;font-weight:800;color:var(--grafite);letter-spacing:.08em}
.eixo3{display:inline-block;margin-top:10px;border:1.5px solid var(--tinta);border-radius:20px;
 padding:5px 13px;font-family:'Azeret Mono',monospace;font-size:9.5px;font-weight:800;letter-spacing:.12em}
.claims{margin-top:22px;display:flex;flex-direction:column;gap:8px}
.claim{display:flex;gap:10px;align-items:flex-start;background:#fff;border:1px solid var(--linha);
 border-left:3px solid var(--marca);border-radius:8px;padding:11px 13px;font-size:13.2px;line-height:1.42}
.autor{background:#fff;border:1.5px solid var(--linha);border-radius:12px;padding:14px;margin-top:10px}
.autor .tag{font-family:'Azeret Mono',monospace;font-size:9px;font-weight:800;letter-spacing:.14em;
 text-transform:uppercase;padding:3px 8px;border-radius:5px;display:inline-block}
.autor h6{font-family:var(--display);font-weight:800;font-size:18px;margin:9px 0 2px;letter-spacing:-.02em}
.autor p{font-size:12.8px;line-height:1.42;color:var(--grafite)}
.autor a{display:flex;align-items:center;justify-content:space-between;margin-top:11px;
 border:1.5px solid var(--tinta);border-radius:9px;padding:10px 13px;font-size:13px;
 font-weight:700;text-decoration:none;color:var(--tinta)}
.autor a:hover{background:var(--tinta);color:var(--papel)}
.afiliado{font-size:10px;color:#9A958C;line-height:1.5;margin-top:9px}
.colinha{background:#fff;border:1px solid var(--linha);border-radius:14px;padding:18px 17px 12px;
 box-shadow:0 14px 32px -22px rgba(20,22,26,.4)}
.chead{border-bottom:2px solid var(--tinta);padding-bottom:10px;margin-bottom:14px}
.chead h4{font-family:var(--display);font-weight:800;font-size:25px;letter-spacing:-.03em;margin-top:4px}
.chead h4 em{font-style:normal;box-shadow:inset 0 -7px 0 var(--marca)}
.crow{margin-bottom:11px}
.crow>span{display:block;margin-bottom:4px}
.cline{display:flex;align-items:center;gap:9px}
.digits{display:flex;gap:3px}
.digits b{font-family:'Azeret Mono',monospace;font-weight:800;font-size:15px;border:2px solid var(--urna);
 border-radius:4px;width:21px;height:27px;display:grid;place-items:center;background:#fff;animation:key .25s backwards}
@keyframes key{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:none}}
.cnome{flex:1;min-width:0}
.cnome strong{display:block;font-size:13px;font-weight:700;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cnome span{font-family:'Azeret Mono',monospace;font-size:9px;font-weight:800;color:var(--grafite);letter-spacing:.07em}
.foto{flex:0 0 36px;height:36px;border-radius:8px;overflow:hidden;display:grid;place-items:center}
.cfoot{border-top:1px solid var(--linha);padding-top:8px;font-family:'Azeret Mono',monospace;
 font-size:8px;color:#9A958C;letter-spacing:.04em;line-height:1.75}
.acts{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:16px}
.act{border:1.5px solid var(--tinta);border-radius:10px;padding:13px;font-size:13px;font-weight:600;
 display:flex;align-items:center;justify-content:center;gap:7px;background:#fff}
.act.wide{grid-column:1/-1;background:var(--tinta);color:var(--papel)}
.note{margin-top:12px;font-size:11.5px;line-height:1.55;color:var(--grafite)}
.callout{padding:13px;border-radius:10px;margin-top:12px;font-size:12.5px;line-height:1.5}
.flag{display:inline-block;background:var(--alerta);color:#fff;border-radius:4px;padding:3px 7px;
 font-family:'Azeret Mono',monospace;font-size:8.5px;font-weight:800;letter-spacing:.1em;margin-bottom:9px}
.grupo{background:#F1EFEA;border-radius:8px;padding:7px 0;text-align:center;margin-top:26px}
.grupo b{font-family:var(--display);font-weight:800;font-size:12px;letter-spacing:.16em}
.gal{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:12px}
.gcell{background:#fff;border:1px solid var(--linha);border-radius:10px;padding:6px 4px 8px;text-align:center}
.gcell p{font-size:8.5px;line-height:1.2;margin-top:2px;font-weight:700}
.gcell i{font-family:'Azeret Mono',monospace;font-style:normal;font-size:7.5px;color:var(--grafite)}
.met h5{font-family:var(--display);font-weight:800;font-size:15px;margin:22px 0 7px;letter-spacing:-.01em}
.met p,.met li{font-size:13.2px;line-height:1.55;color:var(--grafite)}
.met li{margin-left:16px;margin-top:4px}
.met table{width:100%;border-collapse:collapse;margin-top:8px;font-size:11.5px}
.met td,.met th{border:1px solid var(--linha);padding:5px 7px;text-align:left}
.met th{background:#fff;font-family:'Azeret Mono',monospace;font-size:9px;letter-spacing:.08em;text-transform:uppercase}
.resp{margin-top:26px;padding-top:12px;border-top:1px solid var(--linha);font-size:10.5px;line-height:1.5;color:#8A857C}
`;

/* ═══════ MATRIZ ═══════ */
const GRID = [
  ["Comunismo","Fascismo","Teocracia","Conservadorismo tradicionalista","Nacionalismo autoritário","Neocameralismo"],
  ["Socialismo revolucionário","Progressismo identitarista","Democracia cristã","Comunitarismo conservador","Nacionalismo conservador","Autoritarismo de mercado"],
  ["Socialismo democrático","Escola de Frankfurt","Social-democracia clássica","Centrismo institucional","Neoconservadorismo","Paleolibertarianismo"],
  ["Anarco-sindicalismo","Sindicalismo","Keynesianismo","Liberalismo clássico","Escola Austríaca","Objetivismo"],
  ["Anarquismo social","Socialismo autogestionário","Ordoliberalismo","Neoliberalismo","Minarquismo","Libertarianismo de direito natural"],
  ["Anarco-comunismo","Comunalismo libertário","Mutualismo","Liberalismo individualista","Voluntarismo","Anarcocapitalismo"],
];
const AUTORES = [
  [["Lênin","O Estado e a Revolução"],["Robert Paxton","A Anatomia do Fascismo"],["Santo Agostinho","A Cidade de Deus"],["Edmund Burke","Reflexões sobre a Revolução em França"],["Carl Schmitt","O Conceito do Político"],["Balaji Srinivasan","The Network State"]],
  [["Leon Trótski","A Revolução Traída"],["Judith Butler","Problemas de Gênero"],["Jacques Maritain","Humanismo Integral"],["Michael Sandel","Justiça: O que é fazer a coisa certa?"],["Yoram Hazony","As Virtudes do Nacionalismo"],["Sebastián Edwards","The Chile Project"]],
  [["Rosa Luxemburgo","Reforma ou Revolução?"],["Adorno e Horkheimer","Dialética do Esclarecimento"],["Eduard Bernstein","Socialismo Evolucionário"],["Francis Fukuyama","Ordem e Decadência Política"],["Irving Kristol","Neoconservadorismo"],["Hans-Hermann Hoppe","Democracia: O Deus que Falhou"]],
  [["Rudolf Rocker","Anarcossindicalismo"],["Georges Sorel","Reflexões sobre a Violência"],["John Maynard Keynes","Teoria Geral do Emprego, do Juro e da Moeda"],["John Locke","Segundo Tratado sobre o Governo Civil"],["Ludwig von Mises","Ação Humana"],["Ayn Rand","A Revolta de Atlas"]],
  [["Mikhail Bakunin","Estatismo e Anarquia"],["Paul Singer","Introdução à Economia Solidária"],["Wilhelm Röpke","A Humane Economy"],["Milton Friedman","Capitalismo e Liberdade"],["Frédéric Bastiat","A Lei"],["Robert Nozick","Anarquia, Estado e Utopia"]],
  [["Piotr Kropotkin","A Conquista do Pão"],["Murray Bookchin","Ecologia Social e Outros Ensaios"],["Pierre-Joseph Proudhon","O que é a Propriedade?"],["John Stuart Mill","Sobre a Liberdade"],["Samuel Konkin III","Novo Manifesto Libertário"],["Murray Rothbard","Por uma Nova Liberdade"]],
];
/* ── troque o índice para testar outro gancho ───────────────── */
const TITULOS = [
  ["Presidente você já sabe.", "Descubra seus outros 5 votos."],  // 0
  ["Você já sabe seu voto pra presidente.", "E os outros cinco?"],
  ["Presidente é o voto fácil.", "Faltam cinco."],
  ["Não escolha seu deputado", "na fila da escola."],
  ["Ninguém decora o número", "do deputado estadual."],
];
const TITULO = { pre:"Descubra quem mais", grifo:"te representa", sub:"com apenas 5 cliques." };
const GRUPOS = ["COLETIVISTAS","ORDEIROS","SOLIDÁRIOS","SOBERANOS"];
const TAG_AFILIADO = "colinha2026-20";
const amazon = (a, o) => `https://www.amazon.com.br/s?k=${encodeURIComponent(o + " " + a)}&tag=${TAG_AFILIADO}`;
const quad = (c, r) => (c <= 3 ? (r <= 3 ? 0 : 2) : (r <= 3 ? 1 : 3));

/* ═══════════════════════════════════════════════════════════
   AVATAR — CORPO INTEIRO
   viewBox 0 0 100 160 · recorte "32 3 36 40" vira miniatura
   família de cor por quadrante · faceta escura à direita
   ═══════════════════════════════════════════════════════════ */
const PELE = "#F2CFA6", PELE_S = "#D9B084";
const FAM = [
  { b:"#C0392B", e:"#8C2A1F", c:"#E0806F" },  // 0 esq+aut · vermelho
  { b:"#2E6DA4", e:"#1E4B72", c:"#6EA5D2" },  // 1 dir+aut · azul
  { b:"#3D9E5A", e:"#2A6D3E", c:"#7DC994" },  // 2 esq+lib · verde
  { b:"#D3A02A", e:"#9E751A", c:"#EDC75F" },  // 3 dir+lib · dourado
];

function Cabeca({ row, f }) {
  const olho = (x) => <ellipse key={x} cx={x} cy="26" rx="1.5" ry="2" fill="#232A33"/>;
  const boca = row <= 2
    ? <path d="M46 34 h8" fill="none" stroke="#232A33" strokeWidth="1.6" strokeLinecap="round"/>
    : <path d="M46 33 Q50 36.5 54 33" fill="none" stroke="#232A33" strokeWidth="1.6" strokeLinecap="round"/>;
  return (<g>
    <path d="M45 34 h10 v11 h-10 Z" fill={PELE_S}/>
    <ellipse cx="50" cy="26" rx="13.5" ry="14" fill={PELE}/>
    <path d="M50 12 A13.5 14 0 0 1 50 40 Z" fill={PELE_S} opacity=".5"/>
    <circle cx="36.6" cy="27" r="2.4" fill={PELE_S}/><circle cx="63.4" cy="27" r="2.4" fill={PELE_S}/>
    {row === 1 && <>
      <path d="M37 21 Q50 17 63 21 L63 24 H37 Z" fill="#2A3327"/>
      <path d="M38.5 19.5 L40.5 10.5 Q50 5.5 59.5 10.5 L61.5 19.5 Z" fill="#455239"/>
      <path d="M50 5.5 Q59.5 7 61.5 19.5 L50 19.5 Z" fill="#333D2A"/>
      <rect x="33.5" y="19" width="33" height="5" rx="2.5" fill="#1F2620"/>
      <path d="M50 8.6 l1.7 3.6 3.9.4-2.9 2.6.9 3.9-3.6-2.1-3.6 2.1.9-3.9-2.9-2.6 3.9-.4Z" fill="#F2C94C"/>
      <path d="M42 23.6 L46.6 24.8 M58 23.6 L53.4 24.8" stroke="#232A33" strokeWidth="1.8" strokeLinecap="round"/>
      {[45,55].map(olho)}
      <rect x="45.4" y="30.4" width="9.2" height="2.8" rx="1" fill="#3A2E22"/>{boca}</>}
    {row === 2 && <>
      <path d="M36.5 25 Q36 13 50 13 Q64 13 63.5 25 Q59 19 50 19.6 Q41 20.2 36.5 25 Z" fill="#4A3628"/>
      <path d="M35 19.6 Q39 8.6 52 10 Q64 11.4 64.6 19.6 Q50 24.4 35 19.6 Z" fill={f.b}/>
      <path d="M50 10.2 Q64 11.4 64.6 19.6 Q57 22.1 50 22.6 Z" fill={f.e}/>
      <circle cx="63.4" cy="11.4" r="2.4" fill="#F2C94C"/>
      {[45,55].map(olho)}
      <path d="M41.4 31.4 Q45.8 28.4 50 31 Q54.2 28.4 58.6 31.4 Q54.2 35 50 33.2 Q45.8 35 41.4 31.4 Z" fill="#4A3628"/></>}
    {row === 3 && <>
      <path d="M36 24 Q35 11.5 50 11.5 Q65 11.5 64 24 Q60 17 50 18.6 Q40 20.2 36 24 Z" fill="#A9AEB4"/>
      <path d="M50 11.5 Q65 11.5 64 24 Q60 17 50 18.6 Z" fill="#8D939A"/>
      {[45,55].map(olho)}
      <circle cx="45" cy="26" r="5.4" fill="#9FD8F2" fillOpacity=".28" stroke="#232A33" strokeWidth="1.4"/>
      <circle cx="55" cy="26" r="5.4" fill="#9FD8F2" fillOpacity=".28" stroke="#232A33" strokeWidth="1.4"/>
      <path d="M50.4 25.4 h-.8 M39.8 24.6 l-3-1.4 M60.2 24.6 l3-1.4" stroke="#232A33" strokeWidth="1.4" strokeLinecap="round"/>
      {boca}</>}
    {row === 4 && <>
      <path d="M36 25 Q34.5 10.5 50 10.5 Q65.5 10.5 64 25 Q62 17.4 50 17.4 Q38 17.4 36 25 Z" fill="#6B4F3A"/>
      <path d="M50 10.5 Q65.5 10.5 64 25 Q62 17.4 50 17.4 Z" fill="#553D2C"/>
      {[45,55].map(olho)}
      <path d="M41.6 23 L46.4 24.2 M58.4 23 L53.6 24.2" stroke="#232A33" strokeWidth="1.7" strokeLinecap="round"/>
      {boca}</>}
    {row === 5 && <>
      <path d="M36 24 Q31.5 11 42 11 Q44 3 52.5 8.5 Q63 2 66 12 Q69.5 18 64 25.5 Q60 15.5 48 18.6 Q40 19.8 36 24 Z" fill="#3B2F27"/>
      <rect x="37.4" y="21.4" width="12.2" height="9.2" rx="2.6" fill="#9FD8F2" fillOpacity=".28" stroke="#232A33" strokeWidth="1.4"/>
      <rect x="50.4" y="21.4" width="12.2" height="9.2" rx="2.6" fill="#9FD8F2" fillOpacity=".28" stroke="#232A33" strokeWidth="1.4"/>
      <path d="M49.6 25.4 h1.6" stroke="#232A33" strokeWidth="1.4"/>
      {[43.5,56.5].map(olho)}
      <path d="M46 37.6 Q50 42.6 54 37.6 Q50 39.4 46 37.6 Z" fill="#3B2F27"/>{boca}</>}
    {row === 6 && <>
      <path d="M37 27 Q34.5 45 50 48.4 Q65.5 45 63 27 Q58 35.4 50 34.6 Q42 35.4 37 27 Z" fill="#EFEBE2"/>
      <path d="M50 34.6 Q58 35.4 63 27 Q65.5 45 50 48.4 Z" fill="#DCD7CB"/>
      <path d="M36 23 Q35 11 50 11 Q65 11 64 23 Q60 16.4 50 17.4 Q40 18.4 36 23 Z" fill="#EFEBE2"/>
      <path d="M34.4 20.6 Q50 11.6 65.6 20.6 L65.6 25.4 Q50 16.4 34.4 25.4 Z" fill={f.b}/>
      <path d="M50 16.2 Q58 18.6 65.6 20.6 L65.6 25.4 Q58 21.4 50 20.6 Z" fill={f.e}/>
      <path d="M64.8 19.6 l7.6-3.2 -2 6.2 Z" fill={f.c}/>
      {[45,55].map(olho)}{boca}</>}
  </g>);
}

/* objeto empunhado — desenhado a partir do punho, apontando para cima */
function Objeto({ col, f }) {
  return {
    1:<g><rect x="-1.8" y="-30" width="3.6" height="46" rx="1.8" fill="#8B5E34"/>
       <path d="M-1.8-30 Q19-33 17.6-11 Q11-21 -1.8-20 Z" fill="#D3D8DE"/>
       <path d="M-1.8-25.4 Q11-25 15.6-14.6 Q11-21 -1.8-20 Z" fill="#A9B0B8"/></g>,
    2:<g><rect x="-3.2" y="6" width="6.4" height="12" rx="3" fill="#3F4855"/>
       <path d="M-9-4 L6-16 V10 L-9 4 Z" fill="#E04B3C"/><path d="M-1-10 L6-16 V10 L-1 6 Z" fill="#B33A2D"/>
       <circle cx="-2" cy="0" r="3.4" fill="#F7DAD4"/></g>,
    3:<g><path d="M-13-11 H0 v20 h-13 Z" fill="#F5ECDC"/><path d="M0-11 H13 v20 H0 Z" fill="#E4D8C2"/>
       <rect x="-1.4" y="-11" width="2.8" height="20" fill="#8B5E34"/>
       <path d="M-10-5 h6 M-10-1 h6 M4-5 h6 M4-1 h6" stroke="#B9AC94" strokeWidth="1.4" strokeLinecap="round"/></g>,
    4:<g><rect x="-12" y="-6" width="24" height="17" rx="2.6" fill="#7A5230"/>
       <path d="M0-6 h12 v17 H0 Z" fill="#5E3E23"/>
       <path d="M-5-6 V-12 h10 V-6" fill="none" stroke="#4A3220" strokeWidth="2.6"/>
       <rect x="-2.6" y="-.6" width="5.2" height="5" rx="1" fill="#F2C94C"/></g>,
    5:<g><rect x="-6.4" y="-17" width="12.8" height="34" rx="6.2" fill="#F7F3E8"/>
       <path d="M0-17 h.2 a6.2 6.2 0 0 1 6.2 6.2 v21.6 a6.2 6.2 0 0 1 -6.2 6.2 Z" fill="#E2DCCB"/>
       <path d="M-4-9 h5 M-4-3 h5 M-4 3 h5" stroke="#B4AC98" strokeWidth="1.5" strokeLinecap="round"/></g>,
    6:<g><path d="M-11-3 Q-14 14 0 14 Q14 14 11-3 Z" fill="#E8B84B"/>
       <path d="M0-3 Q14 14 0 14 Z" fill="#C2942F"/>
       <path d="M-8-3 Q0-10 8-3" fill="none" stroke="#8B5E34" strokeWidth="2.6"/>
       <path d="M0 2 v6 M-3 4 h6" stroke="#8B5E34" strokeWidth="2.2" strokeLinecap="round"/></g>,
  }[col];
}

/* ── camada de imagem: usa o render de IA quando existir, senão o SVG ──
   arquivos esperados: /avatares/{col}{lin}.webp e /avatares/{col}{lin}-busto.webp
   ver avatares-prompts.md                                              */
const BASE_AVATAR = "/avatares";
function Avatar({ c, r, size = 120, crop = false }) {
  const [falhou, setFalhou] = useState(false);
  const src = `${BASE_AVATAR}/${c}${r}${crop ? "-busto" : ""}.webp`;
  if (!falhou) return (
    <img src={src} alt={`Avatar de ${GRID[r-1][c-1]}`} onError={() => setFalhou(true)}
      width={size} height={crop ? size : Math.round(size * 1.5)}
      style={{ objectFit:"contain", display:"block", borderRadius: crop ? 8 : 0 }} />
  );
  return <AvatarSVG c={c} r={r} size={size} crop={crop} />;
}

function AvatarSVG({ c, r, size = 120, crop = false }) {
  const f = FAM[quad(c, r)];
  return (
    <svg viewBox={crop ? "32 4 36 40" : "0 0 100 160"}
      width={size} height={crop ? size : size * 1.6}
      role="img" aria-label={`Avatar de ${GRID[r-1][c-1]}`}>
      {!crop && <ellipse cx="50" cy="151" rx="27" ry="4.6" fill="#1B2130" opacity=".13"/>}
      {/* pernas */}
      <path d="M41 92 L36.5 143 h11.5 L50 92 Z" fill={f.e}/>
      <path d="M51.5 92 L54 143 h11.5 L60 92 Z" fill={f.b}/>
      <path d="M57 92 L60 92 L65.5 143 H59 Z" fill={f.e} opacity=".55"/>
      <path d="M33.5 143 h14.5 v6 H31 q-1-3.4 2.5-6 Z" fill="#2A313B"/>
      <path d="M52 143 h14.5 q3.5 2.6 2.5 6 H52 Z" fill="#2A313B"/>
      {/* braço esquerdo, mão no quadril */}
      <path d="M35.5 54 L26 78 L31.5 95 L37.5 92.5 L33 78 L41.5 58 Z" fill={f.e}/>
      <circle cx="34.5" cy="93" r="5.4" fill={PELE}/>
      {/* torso */}
      <path d="M32.5 54 Q32.5 45 42 42.5 H58 Q67.5 45 67.5 54 L64.5 94 H35.5 Z" fill={f.b}/>
      <path d="M50 42.5 H58 Q67.5 45 67.5 54 L64.5 94 H50 Z" fill={f.e} opacity=".6"/>
      <path d="M42 42.5 L50 55 L58 42.5 Z" fill={PELE_S} opacity=".85"/>
      {r === 1 && <><rect x="34" y="52" width="10" height="4" rx="1.5" fill="#F2C94C"/>
        <rect x="56" y="52" width="10" height="4" rx="1.5" fill="#F2C94C"/></>}
      {(r === 3 || r === 4) && <path d="M50 55 L46 60 L50 82 L54 60 Z" fill={f.e}/>}
      {r === 6 && <path d="M35.5 74 h29 v6 h-29 Z" fill={f.e}/>}
      {/* braço direito erguido + objeto */}
      <g transform="translate(80,36) rotate(14)"><Objeto col={c} f={f}/></g>
      <path d="M66 52 L76.5 42 L83 34 L88 39 L80 49 L70.5 58 Z" fill={f.b}/>
      <path d="M78 44 L83 34 L88 39 L82.5 47 Z" fill={f.e} opacity=".5"/>
      <circle cx="81.5" cy="36.5" r="6" fill={PELE}/>
      <path d="M76.6 34 Q73.4 35.6 75 38.6 Q76.6 41 79.4 40" fill={PELE}/>
      <Cabeca row={r} f={f}/>
    </svg>
  );
}

/* ═══════ PARTIDOS ═══════ */
const FEDS = {
  fe:{ nome:"Brasil da Esperança", m:["PT","PCdoB","PV"] },
  pr:{ nome:"PSOL-Rede", m:["PSOL","REDE"] },
  pc:{ nome:"PSDB-Cidadania", m:["PSDB","Cidadania"] },
  up:{ nome:"União Progressista", m:["União Brasil","PP"] },
  rs:{ nome:"Renovação Solidária", m:["Solidariedade","PRD"] },
};
const P = [
  ["PCO","29",1,1,1],["PCB","21",1,1,1],["UP","80",1,1,1],
  ["PSTU","16",1,2,1],
  ["PCdoB","65",1,3,5,"fe"],
  ["PSOL","50",2,2,5,"pr"],
  ["PT","13",2,4,10,"fe"],["PDT","12",2,4,6],["PV","43",2,4,3,"fe"],
  ["Republicanos","10",3,2,8],["DC","27",3,2,1],
  ["PSB","40",3,3,7],["REDE","18",3,3,3,"pr"],["Cidadania","23",3,3,3,"pc"],
  ["PL","22",4,2,10],["PP","11",4,2,8,"up",1],["União Brasil","44",4,2,8,"up",1],
  ["Solidariedade","77",4,2,3,"rs"],
  ["MDB","15",4,3,8,null,1],["Avante","70",4,3,2,null,1],["PMN","33",4,3,1,null,1],
  ["PMB","35",4,3,1,null,1],["Agir","36",4,3,1,null,1],["Podemos","19",4,3,4,null,1],
  ["PSD","55",4,4,9,null,1],["PSDB","45",4,4,5,"pc"],
  ["PRD","25",5,1,2,"rs"],["PRTB","28",5,1,1],
  ["Missão","14",5,3,2],
  ["NOVO","30",5,4,3],
].map(([s,n,c,r,peso,fed,flex]) => ({ s,n,c,r,peso,fed,flex }));
const UFS = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

/* ═══════ PERGUNTAS ═══════ */
const N = {
  q1:{ t:"Propriedade", q:"O que fazer com as terras, imóveis, fábricas e empresas do Brasil:", o:[
    { t:"As decisões devem ser tomadas por um coletivo, por um grupo de pessoas.", go:"q2e", af:"as grandes decisões econômicas devem ser tomadas por um coletivo." },
    { t:"Cada pessoa decide o que fazer com aquilo que é seu.", go:"q2d", af:"cada pessoa decide o que fazer com aquilo que é seu." }]},
  q2e:{ t:"Economia", q:"De que forma o grupo de pessoas organizaria a produção e a distribuição de produtos e serviços?", o:[
    { t:"Centralizando o controle de tudo nas pessoas com o poder.", col:1, af:"o controle da economia deve ser centralizado em quem tem o poder." },
    { t:"Gerindo setores estratégicos e regulamentando os demais.", col:2, af:"o Estado deve gerir os setores estratégicos e regulamentar os demais." },
    { t:"Intervindo na economia em momentos de crise.", col:3, af:"o Estado só deve intervir na economia em momentos de crise." }]},
  q2d:{ t:"Imposto", q:"Imposto é:", o:[
    { t:"Um contrato social. Quem não concorda pode buscar outro país.", col:4, af:"o imposto é um contrato social, e quem vive aqui aceitou esse contrato." },
    { t:"Um mínimo necessário para garantir ordem e infraestrutura.", col:5, af:"o imposto só se justifica para garantir ordem e infraestrutura." },
    { t:"Extorsão. Cobrança sob ameaça, para a qual nunca dei meu consentimento.", col:6, af:"cobrar imposto sem consentimento é extorsão." }]},
  q3:{ t:"Tratamento", q:"As pessoas deveriam ser tratadas:", o:[
    { t:"De forma diferente, baseado no grupo a que pertencem.", go:"q4a", ident:"IDENTITÁRIO", af:"as pessoas devem ser tratadas de forma diferente conforme o grupo a que pertencem." },
    { t:"De forma igual.", go:"q4l", ident:"UNIVERSALISTA", af:"as pessoas devem ser tratadas de forma igual, sem olhar o grupo." }]},
  q4a:{ t:"Diferença", q:"Quem age, pensa ou reza de um jeito diferente do que a maioria:", o:[
    { t:"É considerado um inimigo e deve ser eliminado.", row:1, af:"quem é diferente da maioria é um inimigo e deve ser eliminado." },
    { t:"Deve ser preso por não fazer bem para o coletivo.", row:2, af:"quem não faz bem ao coletivo deve ser preso." },
    { t:"Deve ser disciplinado para que melhore.", row:3, af:"quem foge do que a maioria aceita deve ser disciplinado." }]},
  q4l:{ t:"Regras", q:"O que as pessoas podem ou não fazer:", o:[
    { t:"Deve ser definido por uma autoridade legisladora.", row:4, af:"os limites da conduta devem ser definidos por uma autoridade legisladora." },
    { t:"Deve respeitar direitos naturais, independente do que diz a lei.", row:5, af:"existem direitos naturais que valem mesmo contra a lei." },
    { t:"Cada um faz o que quiser, desde que não obrigue ninguém a nada.", row:6, af:"cada um faz o que quiser, desde que não obrigue ninguém a nada." }]},
};

/* ═══════ CANDIDATOS (EXEMPLO — trocar por tse-etl.js) ═══════ */
const NOMES = ["Marina Rebouças","Otávio Sampaio","Célia Andrade","Ruben Tavares","Iara Monteiro",
  "Décio Vasconcelos","Nara Pontes","Aluízio Braga","Selma Queiroz","Fábio Cerqueira","Rita Albuquerque","Gustavo Ferraz"];
const hs = (s) => { let x = 7; for (let i = 0; i < s.length; i++) x = (x*31 + s.charCodeAt(i)) >>> 0; return x; };
const nome = (k) => NOMES[hs(k) % NOMES.length];
const CARGOS = [
  { k:"Deputado Federal",   z:2, api:"depFederal"  },
  { k:"Deputado Estadual",  z:3, api:"depEstadual" },
  { k:"Senador · 1º voto",  z:1, api:"senador1"    },
  { k:"Senador · 2º voto",  z:1, api:"senador2"    },
  { k:"Governador",         z:0, api:"governador"  },
  { k:"Presidente",         z:0, api:"presidente"  },
];
const temCargo = (p, cargo) => !(p.peso <= 3 && cargo === "Senador · 2º voto");
const substituto = (p, col, row) => [...P]
  .filter((x) => x.s !== p.s && temCargo(x, "Senador · 2º voto"))
  .sort((a,b) => (Math.hypot(a.c-col,a.r-row) - Math.hypot(b.c-col,b.r-row)) || ((b.c+b.r)-(a.c+a.r)))[0];

export default function Colinha2026() {
  const [tela, setTela] = useState("home");
  const [menu, setMenu] = useState(false);
  const [uf, setUf] = useState(null);
  const [via, setVia] = useState([]);
  const [pixOn, setPixOn] = useState(false);
  const [valor, setValor] = useState(1);
  const [ok, setOk] = useState("");
  const [dados, setDados] = useState(null);   // JSON do TSE; null = ainda em exemplo

  useEffect(() => {
    if (!uf) { setDados(null); return; }
    let vivo = true;
    fetch(`/data/${uf}.json`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => vivo && setDados(d))
      .catch(() => vivo && setDados(null));
    return () => { vivo = false; };
  }, [uf]);
  const PIX = "00020126500014BR.GOV.BCB.PIX0128colinha2026@exemplo.com.br5204000053039865802BR5913COLINHA 20266009SAO PAULO62070503***63042F7C";

  const ir = (t) => { setMenu(false); setTela(t); };
  const eixo = useMemo(() => {
    let col = null, row = null, ident = null;
    via.forEach(({ id, opt }) => { const o = N[id].o[opt]; if (o.col) col = o.col; if (o.row) row = o.row; if (o.ident) ident = o.ident; });
    return { col, row, ident };
  }, [via]);
  const atual = useMemo(() => {
    if (!via.length) return "q1";
    const u = via[via.length-1], o = N[u.id].o[u.opt];
    return o.go ? o.go : (o.col ? "q3" : null);
  }, [via]);
  const responder = (i) => { const v = [...via,{id:atual,opt:i}]; setVia(v); if (N[atual].o[i].row) setTela("pix"); };

  const res = useMemo(() => {
    const { col, row } = eixo; if (!col || !row) return null;
    const rank = [...P].map((p) => ({ ...p, d: Math.hypot(p.c-col,p.r-row) - p.peso*.045 })).sort((a,b) => a.d-b.d);
    return { col, row, rotulo: GRID[row-1][col-1], p: rank[0], vice: rank[1], vazio: col === 6,
      concorda: AUTORES[row-1][col-1], discorda: AUTORES[6-row][6-col], casaOposta: GRID[6-row][6-col] };
  }, [eixo]);

  const linhas = useMemo(() => {
    if (!res || !uf) return [];
    const perto = [...P]
      .map((p) => ({ ...p, d: Math.hypot(p.c-res.col, p.r-res.row) - p.peso*.045 }))
      .sort((a,b) => a.d - b.d);

    return CARGOS.map((c) => {
      const chave = uf === "DF" && c.api === "depEstadual" ? "depDistrital" : c.api;

      if (dados) {                                   // ── dados reais do TSE ──
        if (dados[res.p.s]?.[chave]) {
          const x = dados[res.p.s][chave];
          return { cargo:c.k, num:x.numero, nome:x.nome, sigla:x.partido, foto:x.foto, sub:false };
        }
        const alt = perto.find((p) => dados[p.s]?.[chave]);
        if (alt) {
          const x = dados[alt.s][chave];
          return { cargo:c.k, num:x.numero, nome:x.nome, sigla:x.partido, foto:x.foto, sub:true };
        }
        return { cargo:c.k, num:"--", nome:"Sem candidato registrado", sigla:"—", sub:true };
      }
                                                     // ── exemplo, enquanto o TSE não entra ──
      const dono = temCargo(res.p, c.k) ? res.p : substituto(res.p, res.col, res.row);
      return { cargo:c.k, num: dono.n + "0".repeat(c.z), nome: nome(uf+dono.s+c.k), sigla: dono.s, sub: dono.s !== res.p.s };
    });
  }, [res, uf, dados]);

  const copiar = (t, tag) => {
    const e = document.createElement("textarea"); e.value = t; document.body.appendChild(e); e.select();
    try { document.execCommand("copy"); } catch (_) {}
    document.body.removeChild(e); setOk(tag); setTimeout(() => setOk(""), 1600);
  };
  const txt = res ? `Colinha 2026 · ${uf}\nMeu perfil: ${res.rotulo}\n\n` +
    linhas.map((l) => `${l.cargo}: ${l.num} — ${l.nome} (${l.sigla})${l.sub?"*":""}`).join("\n") +
    `\n\nMonte a sua: colinha2026.com.br` : "";
  const pct = tela === "home" ? 0 : Math.min(100, (via.length/4)*100);
  const VALORES = ["R$ 5","R$ 15","R$ 30"];

  return (
    <div className="ap">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="shell">
        <header className="topbar">
          <span className="mark">COLINHA <em>2026</em></span>
          <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu}>
            <div><span/><span/><span/></div>
          </button>
        </header>
        {menu && <>
          <div className="scrim" onClick={() => setMenu(false)} />
          <nav className="menu">
            <button onClick={() => { setVia([]); setUf(null); ir("home"); }}>🏠 Página inicial</button>
            <button onClick={() => ir("galeria")}>🎭 Os 36 tipos</button>
            <button onClick={() => ir("metodo")}>📐 Metodologia</button>
            <button className="cafe" onClick={() => { setPixOn(true); ir("cafe"); }}>☕ Pagar um café</button>
          </nav>
        </>}
        <div className="bar"><i style={{ width:`${pct}%` }} /></div>

        {tela === "home" && (
          <main className="screen">
            <span className="kicker">ELEIÇÕES DE OUTUBRO</span>
            <h1 className="lede">{TITULO.pre}<br /><em>{TITULO.grifo}</em></h1>
            <p className="cliques">{TITULO.sub}</p>
            <p className="sub">
              Quase todo mundo decide o voto pelo rosto que mais aparece. Selecione 5
              respostas para saber exatamente qual é a sua posição política — ela tem
              nome, tem história e provavelmente vai te surpreender.
            </p>
            <p className="sub" style={{ marginTop:14 }}>
              No fim sai uma <b>colinha pronta</b> para o print, com número, nome e
              partido de cada cargo.
            </p>
            <hr className="rule" />
            <h2 className="chamada">SELECIONE SEU ESTADO <span>⬇</span></h2>
            <div className="uf-grid">
              {UFS.map((u) => <button key={u} className="uf" onClick={() => { setUf(u); setTela("quiz"); }}>{u}</button>)}
            </div>
          </main>
        )}

        {tela === "galeria" && (
          <main className="screen">
            <span className="eyebrow">Os 36 tipos</span>
            <h2 className="q" style={{ marginTop:8 }}>Qual deles é você?</h2>
            <p className="sub" style={{ fontSize:13.5 }}>
              Cada quadrante tem sua cor. O rosto vem da linha, o objeto na mão vem da coluna.
            </p>
            {[0,1,2,3].map((g) => (
              <div key={g}>
                <div className="grupo"><b>{GRUPOS[g]}</b></div>
                <div className="gal">
                  {GRID.flatMap((linha, ri) => linha.map((rot, ci) =>
                    quad(ci+1, ri+1) === g ? (
                      <div className="gcell" key={`${ri}-${ci}`}>
                        <Avatar c={ci+1} r={ri+1} size={62}/>
                        <p>{rot}</p><i>{AUTORES[ri][ci][0]}</i>
                      </div>) : null))}
                </div>
              </div>
            ))}
            <button className="link" onClick={() => ir("home")}>← Voltar</button>
          </main>
        )}

        {tela === "metodo" && (
          <main className="screen met">
            <span className="eyebrow">Transparência</span>
            <h2 className="q" style={{ marginTop:8 }}>Metodologia da Colinha</h2>
            <p>Nenhum partido, candidato ou campanha participa, financia ou revisa este material.</p>
            <h5>1. As perguntas</h5>
            <p>Quatro, em árvore. As duas primeiras dão sua coluna no eixo econômico; as duas
              últimas, sua linha no eixo da autoridade. O cruzamento dá uma das 36 casas.</p>
            <h5>2. O enquadramento dos partidos</h5>
            <table><thead><tr><th>Partido</th><th>Col</th><th>Lin</th><th>Casa</th></tr></thead>
              <tbody>{[...P].sort((a,b)=>a.c-b.c||a.r-b.r).map((p) => (
                <tr key={p.s}><td>{p.s} ({p.n})</td><td>{p.c}</td><td>{p.r}</td><td>{GRID[p.r-1][p.c-1]}</td></tr>
              ))}</tbody></table>
            <h5>3. A coluna 6 está vazia</h5>
            <p>Nenhum partido registrado no Brasil defende que imposto seja extorsão.</p>
            <h5>4. Qual candidato aparece</h5>
            <p>Pelo <strong>melhor número</strong>: o mais redondo dentro do partido indicado.
              Regra mecânica, não julgamento sobre a pessoa.</p>
            <h5>5. Quando falta candidato</h5>
            <p>Asterisco e o mais próximo na matriz. <strong>Em empate, a régua favorece a
              direita libertária</strong> — viés intencional, declarado aqui.</p>
            <h5>6. Como a Colinha se sustenta</h5>
            <p>Doações via Pix e comissão de afiliado sobre livros. Não recebemos dinheiro de
              partidos, candidatos ou campanhas, e o resultado não muda em função de quem paga.</p>
            <h5>7. Fonte dos dados</h5>
            <p>DivulgaCandContas e Portal de Dados Abertos do TSE, sem alteração.</p>
            <button className="link" onClick={() => ir("home")}>← Voltar</button>
          </main>
        )}

        {tela === "quiz" && atual && (
          <main className="screen" key={atual}>
            <div className="qtag">
              <b className="eyebrow" style={{ color:"var(--urna)" }}>{via.length+1} de 4 · {N[atual].t}</b><hr />
            </div>
            <h2 className="q">{N[atual].q}</h2>
            <div className="opts">
              {N[atual].o.map((o, i) => (
                <button key={i} className="opt" onClick={() => responder(i)}><kbd>{"ABC"[i]}</kbd><span>{o.t}</span></button>
              ))}
            </div>
            <p className="back">Escolha a opção mais próxima do que você acredita — dá para alterar tudo no fim.</p>
            {via.length > 0 && (
              <button className="link" style={{ textAlign:"left" }} onClick={() => setVia(via.slice(0,-1))}>← Voltar uma pergunta</button>
            )}
          </main>
        )}

        {(tela === "pix" || tela === "cafe") && (
          <>
            <main className="screen" style={{ filter:"blur(4px)", opacity:.45 }} aria-hidden="true">
              <h2 className="q">{tela === "pix" ? "Pronto. Calculando o seu perfil…" : "Obrigado."}</h2>
            </main>
            <div className="veil" role="dialog" aria-modal="true" aria-label="Apoie a Colinha">
              <div className="sheet">
                <span className="eyebrow">{tela === "pix" ? "Antes do resultado" : "Apoie"}</span>
                <h2 className="q" style={{ fontSize:22, margin:"9px 0 7px" }}>A Colinha é grátis e sem anúncio.</h2>
                <p className="sub" style={{ fontSize:14, marginBottom:18 }}>
                  Nenhum partido paga por isso e seus dados não são vendidos. Se ela te
                  ajudou, um cafezinho mantém o site de pé até outubro.
                </p>
                {!pixOn ? (
                  <button className="pix" onClick={() => setPixOn(true)}>☕ Ajudar com um cafezinho</button>
                ) : (
                  <div className="pixbox">
                    <div className="tiers">
                      {VALORES.map((v, i) => (
                        <button key={i} className="tier" data-on={valor===i?1:0} onClick={() => setValor(i)}>{v}</button>
                      ))}
                    </div>
                    <span className="eyebrow" style={{ color:"var(--urna)" }}>Pix copia e cola · dá para editar o valor</span>
                    <code>{PIX}</code>
                    <button className="pix" style={{ marginTop:11, padding:15, fontSize:14, animation:"none" }}
                      onClick={() => copiar(PIX,"pix")}>{ok==="pix" ? "✓ Código copiado" : "Copiar código Pix"}</button>
                  </div>
                )}
                <button className="ghost" onClick={() => setTela(tela === "pix" ? "res" : "home")}>
                  {tela === "pix" ? "Ver o resultado grátis" : "Voltar"}
                </button>
              </div>
            </div>
          </>
        )}

        {tela === "res" && res && (
          <main className="screen">
            <span className="eyebrow">Suas respostas</span>
            <div className="recap">
              <div className="rrow">
                <i>UF</i><div><p>Seu estado</p><strong>{uf}</strong></div>
                <button className="chg" onClick={() => { setUf(null); setVia([]); setTela("home"); }}>ALTERAR</button>
              </div>
              {via.map(({ id, opt }, i) => (
                <div className="rrow" key={i}>
                  <i>{String(i+1).padStart(2,"0")}</i>
                  <div><p>{N[id].q}</p><strong>{N[id].o[opt].t}</strong></div>
                  <button className="chg" onClick={() => { setVia(via.slice(0,i)); setTela("quiz"); }}>ALTERAR</button>
                </div>
              ))}
            </div>

            <section className="verdict">
              <span className="eyebrow">Você é</span>
              <div className="palco"><Avatar c={res.col} r={res.row} size={168}/></div>
              <h3>{res.rotulo}</h3>
              <p className="coord">
                {res.col<=3 ? "ESQUERDA" : "DIREITA"} {res.col<=3 ? 4-res.col : res.col-3} ·{" "}
                {res.row<=3 ? "AUTORITÁRIO" : "LIBERAL"} {res.row<=3 ? 4-res.row : res.row-3} ·{" "}
                {GRUPOS[quad(res.col, res.row)]}
              </p>
              {eixo.ident && <div className="eixo3">{eixo.ident}</div>}
            </section>

            <div className="claims">
              {via.map(({ id, opt }, i) => (
                <div className="claim" key={i}>
                  <span style={{ color:"var(--marca)", fontWeight:800 }}>›</span>
                  <span>Você acredita que {N[id].o[opt].af}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop:30 }}><span className="eyebrow">Onde ler mais</span></div>
            <div className="autor">
              <span className="tag" style={{ background:"var(--urna-fraca)", color:"var(--urna)" }}>Quem mais concorda com você</span>
              <h6>{res.concorda[0]}</h6><p>{res.concorda[1]}</p>
              <a href={amazon(res.concorda[0], res.concorda[1])} target="_blank" rel="sponsored nofollow noreferrer">Ver o livro <span>→</span></a>
            </div>
            <div className="autor">
              <span className="tag" style={{ background:"#FDE8E2", color:"var(--alerta)" }}>Quem mais discorda de você</span>
              <h6>{res.discorda[0]}</h6><p>{res.discorda[1]} · {res.casaOposta}</p>
              <a href={amazon(res.discorda[0], res.discorda[1])} target="_blank" rel="sponsored nofollow noreferrer">Ver o livro <span>→</span></a>
            </div>
            <p className="afiliado">
              Links de afiliado da Amazon. Se você comprar, a Colinha recebe uma pequena
              comissão sem custo extra para você. Isso não influencia o resultado do teste
              nem a escolha dos autores.
            </p>

            {res.vazio && (
              <p className="callout" style={{ background:"#FDF3E3" }}>
                <strong>Sua posição não tem partido no Brasil.</strong> Nenhuma das 30 legendas
                registradas defende o fim do imposto. A colinha abaixo mostra o mais próximo —
                não o que representa você.
              </p>
            )}

            {!dados && <div style={{ marginTop:26 }}><span className="flag">DADOS DE EXEMPLO · TSE AINDA NÃO CONECTADO</span></div>}

            <div className="colinha">
              <div className="chead">
                <span className="eyebrow">Eleições 2026 · {uf}</span>
                <h4>COLINHA <em>2026</em></h4>
              </div>
              {linhas.map((l, i) => (
                <div className="crow" key={i}>
                  <span className="eyebrow">{l.cargo}</span>
                  <div className="cline">
                    <div className="digits">
                      {l.num.split("").map((d, j) => <b key={j} style={{ animationDelay:`${i*90+j*45}ms` }}>{d}</b>)}
                    </div>
                    <div className="cnome">
                      <strong>{l.nome}{l.sub && "*"}</strong><span>{l.sigla.toUpperCase()}</span>
                    </div>
                    <div className="foto" aria-hidden="true"><Avatar c={res.col} r={res.row} size={36} crop/></div>
                  </div>
                </div>
              ))}
              <div className="cfoot">
                {linhas.some((l) => l.sub) &&
                  <>* {res.p.s.toUpperCase()} SEM CANDIDATO NESTE CARGO EM {uf}. INDICAMOS O MAIS PRÓXIMO.<br/></>}
                COLINHA2026.COM.BR · METODOLOGIA NO SITE<br/>
                RESPONSÁVEL: [SEU NOME] · CONTATO@COLINHA2026.COM.BR
              </div>
            </div>

            {res.p.fed && (
              <p className="callout" style={{ background:"var(--urna-fraca)" }}>
                <strong>Federação.</strong> {FEDS[res.p.fed].m.join(", ")} formam a Federação{" "}
                {FEDS[res.p.fed].nome} e valem como um partido só na urna.
              </p>
            )}
            {res.p.flex && (
              <p className="callout" style={{ background:"#FDF3E3" }}>
                <strong>Sigla de baixa consistência programática.</strong> No {res.p.s} o voto
                depende mais do candidato do que do partido.
              </p>
            )}

            <div className="acts">
              <button className="act wide" onClick={() => copiar(txt,"c")}>{ok==="c" ? "✓ Copiada" : "Copiar colinha"}</button>
              <a className="act" style={{ textDecoration:"none" }} target="_blank" rel="noreferrer"
                href={`https://wa.me/?text=${encodeURIComponent(txt)}`}>WhatsApp</a>
              <button className="act" onClick={() => { setVia([]); setUf(null); setPixOn(false); setTela("home"); }}>Refazer</button>
            </div>

            <p className="note">
              Aproximação, não endosso. Segundo lugar no seu perfil: <strong>{res.vice.s}</strong>.
              Confira cada nome no DivulgaCandContas do TSE antes de votar.
            </p>
            <p className="resp">
              Colinha 2026 é uma iniciativa independente. Não recebe recursos de partidos,
              candidatos, campanhas ou comitês. Responsável pelo conteúdo: [seu nome completo]
              — contato@colinha2026.com.br.
            </p>
          </main>
        )}
      </div>
    </div>
  );
}
