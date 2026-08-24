/* ═══════════════════════════════════════════════════════════════
   ideologias.js — Colinha 2026
   Fonte única dos 36 textos. Importado pelo App.jsx (telas) e pelo
   prerender.js (páginas estáticas para o Google).
   Coordenadas: l = linha (autoridade), c = coluna (economia).
   ═══════════════════════════════════════════════════════════════ */

export const IDEOLOGIAS = [
/* ── LINHA 1 ─────────────────────────────────────────────────── */
{ slug:"comunismo", nome:"Comunismo", l:1, c:1, autor:"Lênin", obra:"O Estado e a Revolução",
  chamada:"A propriedade privada dos meios de produção deve acabar, e o Estado conduz a transição.",
  p:[
"Defende que terras, fábricas e bancos deixem de ter donos particulares e passem ao controle coletivo, planejado por um poder central. O objetivo declarado é acabar com a divisão da sociedade em classes: se ninguém é dono dos meios de produção, ninguém vive do trabalho alheio. O mercado é substituído por um plano, e a distribuição segue a necessidade, não a capacidade de pagar.",
"A formulação vem de Marx e Engels no século XIX, mas a versão que moldou o século XX é a de Lênin, que acrescentou a ideia de um partido de vanguarda dirigindo o processo. Foi o modelo da União Soviética, da China de Mao e de Cuba. No Brasil, o PCB de 1922 é a raiz de uma tradição que se dividiu muitas vezes e hoje sobrevive em siglas pequenas.",
"A crítica central é econômica e política ao mesmo tempo. Sem preços de mercado, o planejador não tem como saber o que é escasso — foi o argumento de Mises e Hayek, e a experiência soviética deu força a ele. E concentrar toda a economia em quem tem o poder concentra também a capacidade de silenciar quem discorda, o que os regimes comunistas do século XX fizeram em larga escala.",
]},

{ slug:"fascismo", nome:"Fascismo", l:1, c:2, autor:"Robert Paxton", obra:"A Anatomia do Fascismo",
  chamada:"Tudo dentro do Estado, nada fora do Estado, nada contra o Estado.",
  p:[
"Mantém a propriedade privada, mas subordina toda a economia ao interesse nacional definido pelo Estado: controle de preços, salários fixados por decreto, sindicatos absorvidos pelo governo e grandes obras públicas. A nação é tratada como um organismo, e o indivíduo, como parte que só faz sentido dentro do todo. Rejeita ao mesmo tempo o liberalismo, por individualista, e o comunismo, por dividir a nação em classes.",
"Nasceu na Itália de Mussolini nos anos 1920 e teve variantes na Alemanha, em Portugal e na Espanha. No Brasil, a Ação Integralista Brasileira de Plínio Salgado foi o movimento de massas mais próximo, e o Estado Novo de Vargas incorporou elementos corporativistas sem ser propriamente fascista.",
"A crítica é histórica antes de ser teórica: onde chegou ao poder, o fascismo produziu supressão da imprensa, prisão política, guerra de expansão e, no caso alemão, extermínio em escala industrial. Também é acusado de incoerência econômica — promete superar capitalismo e socialismo, mas na prática preservou grandes fortunas privadas enquanto esmagava a organização dos trabalhadores.",
]},

{ slug:"teocracia", nome:"Teocracia", l:1, c:3, autor:"Santo Agostinho", obra:"A Cidade de Deus",
  chamada:"A lei divina está acima da lei humana, e governar é aplicá-la.",
  p:[
"Sustenta que a autoridade política deriva de uma revelação religiosa e que o governo existe para fazer cumprir a lei sagrada. Não há separação entre crime e pecado. A economia costuma ser mista, com propriedade privada preservada e forte redistribuição por meio de obrigações religiosas — o zakat islâmico, o dízimo, as fundações de caridade.",
"Existiu na Genebra de Calvino, nos Estados Pontifícios e, na forma contemporânea mais conhecida, no Irã pós-1979. Diferente do conservadorismo religioso, que quer influenciar as leis, a teocracia quer que a lei religiosa seja a lei.",
"A objeção principal é que ela não tem como acomodar quem não crê. Se a legitimidade vem de Deus, discordar do governo vira heresia, e não oposição legítima. Também não há mecanismo de correção: nenhuma eleição pode revogar o que se entende como vontade divina.",
]},

{ slug:"conservadorismo-tradicionalista", nome:"Conservadorismo tradicionalista", l:1, c:4, autor:"Edmund Burke", obra:"Reflexões sobre a Revolução em França",
  chamada:"A tradição carrega a sabedoria acumulada de gerações. Mexer nela exige provas.",
  p:[
"Defende que instituições que sobreviveram séculos — família, religião, propriedade, hierarquias locais — resolvem problemas que ninguém consegue enunciar por completo. Aceita mudança, desde que gradual e testada. Economicamente é pragmático: nem estatismo, nem mercado sem freio, mas o arranjo que preserve a ordem social existente.",
"Edmund Burke fundou a corrente ao criticar a Revolução Francesa em 1790, argumentando que os revolucionários destruíam em meses arranjos que levaram gerações para se formar. No Brasil, é o vocabulário de boa parte da direita eleitoral: Deus, pátria, família, ordem.",
"Os críticos apontam que a tradição também acumula injustiça — escravidão, exclusão das mulheres do voto e criminalização de minorias foram, todas, tradições longevas. E que o critério de \"provas antes de mudar\" na prática funciona como veto permanente a qualquer mudança que incomode quem já está por cima.",
]},

{ slug:"nacionalismo-autoritario", nome:"Nacionalismo autoritário", l:1, c:5, autor:"Carl Schmitt", obra:"O Conceito do Político",
  chamada:"A nação vem antes de tudo, e defendê-la justifica concentrar poder.",
  p:[
"Coloca a soberania e a coesão nacional acima de qualquer outro valor, inclusive dos limites constitucionais ao poder. Aceita economia de mercado, mas com proteção à indústria nacional e desconfiança de organismos internacionais. A oposição interna tende a ser tratada como fragilidade diante do inimigo externo.",
"Carl Schmitt, jurista alemão, deu a formulação mais influente ao dizer que o político se define pela distinção entre amigo e inimigo, e que o soberano é quem decide sobre a exceção. A corrente aparece em regimes muito diferentes entre si, da Hungria de Orbán a governos militares latino-americanos.",
"A crítica é que a lógica do inimigo não tem freio: uma vez que discordar vira ameaça à nação, não existe critério para dizer onde a repressão deve parar. E a promessa de soberania econômica costuma esbarrar na dependência real de comércio, capital e tecnologia estrangeiros.",
]},

{ slug:"neocameralismo", nome:"Neocameralismo", l:1, c:6, autor:"Balaji Srinivasan", obra:"The Network State",
  chamada:"O Estado como empresa: o morador é cliente, não cidadão.",
  p:[
"Propõe administrar o território como uma companhia de capital fechado. Não há eleição, há acionistas; não há imposto consentido, há aluguel pago por quem escolhe morar ali. A tese é que um governo que lucra com moradores satisfeitos tem incentivo melhor que um político que só precisa da próxima eleição. Quem não gosta, muda de jurisdição — a saída substitui a voz.",
"A ideia foi formulada por Curtis Yarvin nos anos 2000 e ganhou tração no debate das network states e das cidades charter, com projetos como Próspera em Honduras. É a corrente mais recente das 36 e a menos testada.",
"As objeções se acumulam. Sair de um país é caro e às vezes impossível, então a \"escolha\" é teórica para a maioria. Não há mecanismo para quem não pode pagar. E a história das companhias com poder soberano — a Companhia das Índias Orientais, o Estado Livre do Congo — não recomenda o modelo.",
]},

/* ── LINHA 2 ─────────────────────────────────────────────────── */
{ slug:"socialismo-revolucionario", nome:"Socialismo revolucionário", l:2, c:1, autor:"Leon Trótski", obra:"A Revolução Traída",
  chamada:"A ordem atual não se reforma por dentro. Precisa ser rompida.",
  p:[
"Concorda com o objetivo comunista, mas discorda do caminho: sustenta que a classe dominante nunca entrega o poder por via eleitoral, e que qualquer partido que governe dentro das regras existentes acaba capturado por elas. Defende ruptura e a construção de um poder popular novo, não a ocupação do antigo.",
"Trótski é a referência mais conhecida, tanto pela teoria da revolução permanente quanto pela crítica ao que a URSS se tornou sob Stálin — um Estado operário deformado por uma burocracia privilegiada. No Brasil a tradição está no PSTU, no PCO e em correntes internas de partidos maiores.",
"A crítica vem de dois lados. Da esquerda reformista, que aponta que revoluções concentram poder em quem as conduz e raramente o devolvem. E dos liberais, para quem substituir eleição por ruptura remove justamente o mecanismo que permite corrigir erros sem violência.",
]},

{ slug:"progressismo-identitarista", nome:"Progressismo identitarista", l:2, c:2, autor:"Judith Butler", obra:"Problemas de Gênero",
  chamada:"Tratar como iguais quem partiu de lugares desiguais só congela a desigualdade.",
  p:[
"Sustenta que raça, gênero, sexualidade e origem produzem desvantagens estruturais que a lei formalmente neutra não corrige. Por isso defende políticas que reconhecem grupos: cotas, ações afirmativas, legislação específica contra discriminação. A ideia de opressão sobreposta — a interseccionalidade de Kimberlé Crenshaw — é central.",
"Vem da teoria crítica, dos movimentos por direitos civis e do feminismo acadêmico, com Judith Butler entre as referências mais citadas. No Brasil, é o campo em que o PSOL se firmou eleitoralmente, sobretudo nos grandes centros urbanos.",
"A crítica liberal clássica, de linhagem hayekiana, é que distribuir direitos por pertencimento a grupo é a mesma operação formal usada historicamente para excluir — muda o sinal, não a estrutura. Há também a objeção de que atribuir a pessoas a experiência média do seu grupo é uma forma de apagá-las como indivíduos.",
]},

{ slug:"democracia-crista", nome:"Democracia cristã", l:2, c:3, autor:"Jacques Maritain", obra:"Humanismo Integral",
  chamada:"Economia de mercado com limites morais, dentro da democracia.",
  p:[
"Combina eleições livres com valores da doutrina social cristã: dignidade da pessoa, prioridade da família, e o princípio de subsidiariedade — o que puder ser resolvido pela comunidade local não deve subir ao Estado. Na economia, aceita mercado, mas rejeita que o lucro seja o único critério, defendendo salário justo e proteção social.",
"Foi a força política que reconstruiu a Europa ocidental no pós-guerra, com Adenauer na Alemanha e De Gasperi na Itália. Jacques Maritain deu a base filosófica. No Brasil, aparece de forma difusa em siglas com base religiosa.",
"Os críticos observam que a corrente se apoia numa moral que boa parte da população não compartilha, o que gera atrito num Estado laico. E que a subsidiariedade, na prática, foi usada muitas vezes para justificar a ausência do Estado onde a comunidade local não tinha meios de suprir nada.",
]},

{ slug:"comunitarismo-conservador", nome:"Comunitarismo conservador", l:2, c:4, autor:"Michael Sandel", obra:"Justiça: O que é fazer a coisa certa?",
  chamada:"O indivíduo abstrato não existe. Somos feitos pela comunidade que nos formou.",
  p:[
"Contesta a ideia liberal de um sujeito que escolhe seus valores a partir do zero. Argumenta que identidade, língua, religião e obrigações vêm antes de qualquer escolha, e que uma sociedade só funciona sobre laços concretos — vizinhança, igreja, associação, família. Prefere autoridade local e voluntária à autoridade estatal.",
"Michael Sandel e Alasdair MacIntyre formularam a crítica acadêmica ao liberalismo procedimental nos anos 1980. No Brasil, a lógica aparece com força nas redes de igreja evangélica, no cooperativismo e nas associações de bairro, que organizam vida coletiva sem passar pelo Estado.",
"A objeção é que comunidade também sufoca. Quem nasce numa comunidade e não se encaixa nela tem pouca saída se não houver um Estado garantindo direitos individuais por cima dela. Críticos apontam que a corrente costuma ser generosa com as comunidades que aprova e silenciosa sobre as que não.",
]},

{ slug:"nacionalismo-conservador", nome:"Nacionalismo conservador", l:2, c:5, autor:"Yoram Hazony", obra:"As Virtudes do Nacionalismo",
  chamada:"O mundo é feito de nações distintas, e isso é uma virtude, não um problema.",
  p:[
"Defende que a nação — com língua, história e costumes próprios — é a unidade política legítima, e que projetos supranacionais enfraquecem a autogoverno dos povos. Aceita economia de mercado, mas com proteção estratégica e controle de fronteiras. Diferente do nacionalismo autoritário, atua dentro das eleições e das regras constitucionais.",
"Yoram Hazony deu à corrente sua formulação contemporânea em 2018, argumentando que o Estado-nação é a melhor barreira contra impérios. A onda que inclui o Brexit e movimentos conservadores em vários países se identifica com essa leitura.",
"A crítica é que a definição de quem pertence à nação nunca é neutra: sempre há alguém dentro do território que a definição deixa de fora. E que problemas como clima, pandemia e tributação de multinacionais não respeitam fronteira, então recusar coordenação internacional pode ser autodestrutivo.",
]},

{ slug:"autoritarismo-de-mercado", nome:"Autoritarismo de mercado", l:2, c:6, autor:"Sebastián Edwards", obra:"The Chile Project",
  chamada:"Liberdade econômica primeiro. A política vem depois — se vier.",
  p:[
"Sustenta que reformas econômicas profundas exigem um executivo capaz de agir sem os freios da negociação democrática, e que a prosperidade resultante cria, com o tempo, as condições para a liberdade política. Mercado desregulado, gasto público cortado, e mão firme na segurança e na oposição.",
"O caso emblemático é o Chile de Pinochet, com os Chicago Boys conduzindo a economia sob um regime que suprimia a oposição. O debate voltou à América Latina com Bukele em El Salvador e com a discussão sobre choque econômico na Argentina.",
"A crítica mais forte vem de dentro do próprio liberalismo: se a liberdade econômica depende de suspender a liberdade política, ela não é liberdade, é concessão — e concessão pode ser retirada. Além disso, a promessa de transição para a democracia raramente foi cumprida por decisão do próprio regime.",
]},

/* ── LINHA 3 ─────────────────────────────────────────────────── */
{ slug:"socialismo-democratico", nome:"Socialismo democrático", l:3, c:1, autor:"Rosa Luxemburgo", obra:"Reforma ou Revolução?",
  chamada:"Transformar a estrutura econômica pelo voto, sem abrir mão da democracia.",
  p:[
"Quer superar o capitalismo, não apenas amenizá-lo, mas por meios eleitorais e com liberdades civis preservadas. Defende propriedade coletiva nos setores decisivos, forte poder sindical e ampliação contínua dos direitos sociais até que o mercado deixe de organizar o essencial da vida.",
"Rosa Luxemburgo é a referência que melhor marca a diferença: defendeu revolução, mas denunciou a supressão da liberdade dentro do processo revolucionário, escrevendo que liberdade é sempre a liberdade de quem pensa diferente. A corrente atravessa a história da esquerda europeia e latino-americana.",
"A objeção clássica, vinda dos revolucionários, é que o gradualismo se dilui: chega-se ao governo sem chegar ao poder. A objeção liberal é a inversa — que o programa exigiria, para se completar, concentrar tanto poder econômico no Estado que a democracia não sobreviveria ao processo.",
]},

{ slug:"escola-de-frankfurt", nome:"Escola de Frankfurt", l:3, c:2, autor:"Adorno e Horkheimer", obra:"Dialética do Esclarecimento",
  chamada:"A dominação não está só na economia. Está na cultura que nos parece natural.",
  p:[
"Deslocou a análise marxista da fábrica para a cultura. Argumenta que rádio, cinema e publicidade — a indústria cultural — produzem consentimento: as pessoas aceitam a ordem existente porque aprenderam a desejá-la. A emancipação, nessa leitura, passa por perceber o que parece óbvio e não é.",
"Adorno, Horkheimer, Marcuse e Benjamin formaram o núcleo, no Instituto de Pesquisa Social de Frankfurt a partir de 1923, muitos deles escrevendo no exílio durante o nazismo. É uma das correntes mais lidas nas universidades brasileiras.",
"A crítica mais frequente é o pessimismo: se toda cultura de massa é manipulação, sobra pouco espaço para as pessoas comuns escolherem alguma coisa, e a teoria acaba tratando o público como incapaz. Críticos também apontam que a escola diagnosticou muito e propôs pouco em termos práticos.",
]},

{ slug:"social-democracia-classica", nome:"Social-democracia clássica", l:3, c:3, autor:"Eduard Bernstein", obra:"Socialismo Evolucionário",
  chamada:"Capitalismo com Estado de bem-estar forte e universal.",
  p:[
"Aceita a economia de mercado e concentra o esforço em distribuir seus resultados: saúde e educação públicas para todos, aposentadoria garantida, seguro-desemprego, tributação progressiva. A palavra-chave é universalidade — o benefício vale para todo cidadão, não para grupos específicos, o que sustenta o apoio político ao sistema.",
"Eduard Bernstein rompeu com a ortodoxia marxista no fim do século XIX ao argumentar que o capitalismo não estava entrando em colapso e que o caminho era a reforma contínua. O modelo nórdico é a realização mais completa dessa ideia.",
"Os críticos à esquerda dizem que ela salvou o capitalismo em vez de superá-lo. Os críticos à direita apontam o custo tributário e o risco de que benefícios universais criem dependência. E há a questão demográfica: sistemas desenhados quando havia muitos trabalhadores por aposentado enfrentam contas difíceis com o envelhecimento.",
]},

{ slug:"centrismo-institucional", nome:"Centrismo institucional", l:3, c:4, autor:"Francis Fukuyama", obra:"Ordem e Decadência Política",
  chamada:"A qualidade das instituições importa mais do que a ideologia de quem governa.",
  p:[
"Sustenta que o que separa países prósperos de países pobres não é estar à esquerda ou à direita, e sim ter Estado capaz, judiciário previsível e regras que sobrevivem à troca de governo. Prefere ajuste técnico a projeto de transformação, e desconfia de reformas amplas feitas depressa.",
"Francis Fukuyama é a referência mais lida, com sua análise sobre como Estados desenvolvem — e perdem — capacidade administrativa. É a linguagem de boa parte dos partidos de centro e dos organismos multilaterais.",
"A crítica é que a neutralidade proclamada esconde uma escolha: manter o arranjo existente favorece quem já se beneficia dele. E que a valorização da estabilidade pode virar imobilismo diante de problemas que exigem, sim, mudança estrutural.",
]},

{ slug:"neoconservadorismo", nome:"Neoconservadorismo", l:3, c:5, autor:"Irving Kristol", obra:"Neoconservadorismo",
  chamada:"Mercado na economia, firmeza na ordem, e Estado disposto a moldar a cultura.",
  p:[
"Combina liberalismo econômico com uso deliberado do poder estatal para sustentar valores considerados civilizatórios — na segurança pública, na educação e no espaço cultural. Diferente do liberalismo clássico, não vê o Estado como algo a minimizar, mas como instrumento a ser usado na direção certa.",
"A corrente se formou nos Estados Unidos a partir de intelectuais que romperam com a esquerda, tendo Irving Kristol como figura central. No Brasil, é o enquadramento que melhor descreve o partido Missão, criado pelo MBL: liberalismo fiscal somado a guerra às facções e escolas cívico-militares.",
"A crítica liberal é de incoerência: quem defende Estado mínimo na economia e Estado forte nos costumes está escolhendo onde quer o poder, não limitando-o. E a experiência de política externa neoconservadora nos anos 2000 é usada como argumento sobre os limites de exportar instituições pela força.",
]},

{ slug:"paleolibertarianismo", nome:"Paleolibertarianismo", l:3, c:6, autor:"Hans-Hermann Hoppe", obra:"Democracia: O Deus que Falhou",
  chamada:"Mercado radicalmente livre, costumes radicalmente tradicionais.",
  p:[
"Defende a abolição de quase todo o Estado somada a uma cultura conservadora rígida. A ordem não viria de lei pública, mas de proprietários e comunidades voluntárias que estabelecem suas próprias regras e excluem quem não as aceita. É antiestatal e antiigualitário ao mesmo tempo.",
"Murray Rothbard e Lew Rockwell formularam a estratégia nos anos 1990, buscando unir libertários econômicos e conservadores culturais contra o Estado de bem-estar. Hans-Hermann Hoppe levou o argumento adiante com sua crítica à democracia como sistema que incentiva o curto prazo.",
"A crítica interna do próprio libertarianismo é que comunidades com poder de excluir reproduzem coerção com outro nome. E a crítica externa é que, sem Estado garantindo direitos individuais, minorias ficam à mercê de quem for dono do território onde vivem.",
]},

/* ── LINHA 4 ─────────────────────────────────────────────────── */
{ slug:"anarco-sindicalismo", nome:"Anarco-sindicalismo", l:4, c:1, autor:"Rudolf Rocker", obra:"Anarcossindicalismo",
  chamada:"O sindicato não é para negociar com o patrão. É para substituí-lo.",
  p:[
"Propõe que os próprios trabalhadores, organizados em sindicatos de base, administrem a produção sem Estado nem patrão. A greve geral é a ferramenta de ruptura, e a federação de sindicatos, a estrutura que substitui o governo. Decisões sobem de baixo para cima, com delegados revogáveis a qualquer momento.",
"Rudolf Rocker sistematizou a doutrina, que teve sua realização mais ampla na Catalunha de 1936, quando a CNT administrou fábricas e serviços durante a Guerra Civil Espanhola. No Brasil, foi a corrente dominante no movimento operário até os anos 1920, antes de ser deslocada pelo comunismo.",
"A crítica prática é de escala: coordenar uma economia industrial complexa por assembleias é lento, e a experiência catalã durou pouco demais para provar o contrário. A crítica marxista é que, sem tomar o poder do Estado, o movimento fica exposto à repressão organizada.",
]},

{ slug:"sindicalismo", nome:"Sindicalismo", l:4, c:2, autor:"Georges Sorel", obra:"Reflexões sobre a Violência",
  chamada:"Quem trabalha precisa de força organizada para negociar em pé de igualdade.",
  p:[
"Parte da constatação de que trabalhador e empregador não negociam entre iguais: um pode esperar, o outro precisa comer. A organização coletiva corrige esse desequilíbrio. Defende negociação coletiva, direito de greve e legislação protetiva, aceitando a economia de mercado mas disputando permanentemente sua repartição.",
"Georges Sorel deu à corrente sua formulação mais radical, tratando a greve geral como mito mobilizador. No Brasil, é a origem direta do PT, nascido das greves metalúrgicas do ABC no fim dos anos 1970, e a base histórica do PDT trabalhista.",
"Os críticos apontam que sindicatos fortes podem proteger quem já tem emprego às custas de quem está fora do mercado formal, e que estruturas sindicais consolidadas tendem a virar burocracias com interesses próprios, distantes da base que dizem representar.",
]},

{ slug:"keynesianismo", nome:"Keynesianismo", l:4, c:3, autor:"John Maynard Keynes", obra:"Teoria Geral do Emprego, do Juro e da Moeda",
  chamada:"O mercado não se corrige sozinho nas crises. O Estado precisa agir.",
  p:[
"Sustenta que uma economia pode ficar presa em desemprego alto sem tender ao equilíbrio, porque quando todos cortam gastos ao mesmo tempo a demanda desaba e a recessão se alimenta. A saída é o Estado gastar quando o setor privado recua, e recolher quando a economia esquenta — política anticíclica.",
"John Maynard Keynes publicou a Teoria Geral em 1936, em plena Depressão, e a ideia organizou a política econômica ocidental por cerca de quarenta anos. Voltou com força após a crise de 2008 e durante a pandemia.",
"A crítica monetarista, de Milton Friedman, é que o estímulo produz inflação sem ganho duradouro de emprego. A crítica de escolha pública é que governos aprendem a gastar na recessão e esquecem de poupar na expansão, o que transforma a política anticíclica em dívida crescente.",
]},

{ slug:"liberalismo-classico", nome:"Liberalismo clássico", l:4, c:4, autor:"John Locke", obra:"Segundo Tratado sobre o Governo Civil",
  chamada:"O governo existe por consentimento e para proteger direitos que já existiam antes dele.",
  p:[
"Defende que as pessoas têm direitos à vida, à liberdade e à propriedade independentemente do que a lei diga, e que o Estado é um arranjo criado para protegê-los — legítimo enquanto cumprir esse papel. Daí decorrem separação de poderes, império da lei, liberdade de expressão e economia de mercado com regras.",
"John Locke deu a formulação fundadora no século XVII, influenciando as revoluções americana e francesa e, por extensão, praticamente todas as constituições democráticas modernas, incluindo a brasileira de 1988.",
"A crítica de esquerda é que a igualdade perante a lei convive com desigualdade material enorme, e que liberdade sem meios para exercê-la é formal. A crítica libertária é a inversa: que o liberalismo clássico aceitou concessões demais e abriu caminho para o Estado que hoje tributa metade da economia.",
]},

{ slug:"escola-austriaca", nome:"Escola Austríaca", l:4, c:5, autor:"Ludwig von Mises", obra:"Ação Humana",
  chamada:"Nenhum planejador consegue saber o que os preços sabem.",
  p:[
"Argumenta que o conhecimento econômico é disperso entre milhões de pessoas e que os preços são o único mecanismo capaz de agregá-lo. Por isso qualquer planejamento central falha por impossibilidade de cálculo, não por má intenção. Defende moeda sólida, crítica à expansão de crédito pelo banco central e Estado mínimo.",
"Ludwig von Mises e Friedrich Hayek são as figuras centrais, com a teoria dos ciclos econômicos explicando bolhas como consequência de juros artificialmente baixos. No Brasil, a escola tem influência desproporcional ao seu peso acadêmico, difundida pelo Instituto Mises Brasil.",
"A crítica metodológica é que a escola rejeita testes empíricos e deduz conclusões de axiomas, o que a torna difícil de refutar. E a previsão recorrente de colapso inflacionário após políticas monetárias expansivas não se confirmou em vários episódios recentes.",
]},

{ slug:"objetivismo", nome:"Objetivismo", l:4, c:6, autor:"Ayn Rand", obra:"A Revolta de Atlas",
  chamada:"O egoísmo racional é uma virtude, e o altruísmo imposto é uma armadilha.",
  p:[
"Sustenta que cada pessoa é um fim em si mesma e que sacrificar-se pelos outros por dever moral corrói a base da produção e da criação. Defende capitalismo integral, com o Estado reduzido a polícia, tribunais e defesa — e ao contrário do jusnaturalismo, entende que esses direitos devem ser codificados por uma lei racional, não deduzidos da natureza.",
"Ayn Rand construiu o sistema em romances e ensaios a partir dos anos 1940, com A Revolta de Atlas como obra emblemática. Sua influência é maior na cultura empresarial e no debate público do que na filosofia acadêmica.",
"Os críticos apontam que a filosofia trata como parasitas pessoas que apenas nasceram sem condições, e que a distinção entre criador e aproveitador é mais retórica do que analítica. Filósofos profissionais costumam objetar que o sistema deduz ética de premissas que ele mesmo não demonstra.",
]},

/* ── LINHA 5 ─────────────────────────────────────────────────── */
{ slug:"anarquismo-social", nome:"Anarquismo social", l:5, c:1, autor:"Mikhail Bakunin", obra:"Estatismo e Anarquia",
  chamada:"Nenhuma autoridade é legítima até provar que é.",
  p:[
"Rejeita Estado, patrão e hierarquia imposta, defendendo organização por federação livre de associações voluntárias. Diferente do anarquismo individualista, é coletivista na economia: a terra e as ferramentas pertencem a quem as trabalha, coletivamente. E diferente do marxismo, recusa a ideia de um período de ditadura do proletariado.",
"Mikhail Bakunin foi quem melhor formulou a divergência, prevendo na disputa com Marx que um Estado operário produziria uma nova classe dominante de burocratas. A história soviética deu peso ao argumento.",
"A crítica é a de sempre contra o anarquismo: sem instituições permanentes, o que impede que a força privada ocupe o espaço deixado pelo Estado? E como uma federação de assembleias enfrenta um exército organizado, se for atacada?",
]},

{ slug:"socialismo-autogestionario", nome:"Socialismo autogestionário", l:5, c:2, autor:"Paul Singer", obra:"Introdução à Economia Solidária",
  chamada:"A empresa pertence a quem trabalha nela, e a direção é eleita por eles.",
  p:[
"Defende propriedade coletiva com gestão descentralizada: cada unidade produtiva é administrada por seus próprios trabalhadores, que elegem a direção e decidem sobre o excedente. Não há plano central nem dono externo. O mercado pode continuar existindo entre as empresas, mas não dentro delas.",
"O modelo teve versão estatal na Iugoslávia de Tito e versão cooperativa em Mondragón, no País Basco, que reúne dezenas de milhares de trabalhadores. No Brasil, a tradição está na economia solidária, sistematizada por Paul Singer, e nas fábricas recuperadas por seus funcionários.",
"A crítica econômica é que cooperativas subinvestem, porque o trabalhador que vai sair em cinco anos não quer travar recursos em máquina que rende em dez. E há dificuldade crônica de acesso a crédito, já que não existe dono para dar garantias.",
]},

{ slug:"ordoliberalismo", nome:"Ordoliberalismo", l:5, c:3, autor:"Wilhelm Röpke", obra:"A Humane Economy",
  chamada:"Mercado livre não nasce sozinho. Precisa de regras que a política não possa mexer.",
  p:[
"Defende uma constituição econômica: regras de concorrência, disciplina fiscal e independência monetária gravadas acima da legislação ordinária, fora do alcance da maioria do momento. O Estado não planeja nem redistribui muito, mas arbitra com firmeza — o papel dele é impedir monopólio e manter a moeda estável.",
"A escola nasceu em Freiburg com Walter Eucken e Wilhelm Röpke, e virou a base da economia social de mercado que reconstruiu a Alemanha Ocidental. Difere do neoliberalismo por desconfiar tanto do Estado quanto das grandes empresas.",
"No Brasil, é a lógica por trás do teto de gastos e da autonomia do Banco Central: a ideia de que regra vence discricionariedade. A crítica é exatamente essa — blindar decisões econômicas do voto retira da democracia o poder sobre o que mais afeta a vida das pessoas.",
]},

{ slug:"neoliberalismo", nome:"Neoliberalismo", l:5, c:4, autor:"Milton Friedman", obra:"Capitalismo e Liberdade",
  chamada:"Menos Estado, mais concorrência, e o preço fazendo o trabalho de coordenar.",
  p:[
"Defende privatização, abertura comercial, desregulamentação e disciplina fiscal, sob o argumento de que mercados competitivos alocam recursos melhor que burocracias e que a liberdade econômica sustenta as demais liberdades. Aceita uma rede mínima de proteção, focalizada em quem realmente não consegue pagar.",
"Milton Friedman é a referência mais influente, e o receituário se difundiu globalmente a partir dos anos 1980, com Thatcher e Reagan. No Brasil, orientou as privatizações dos anos 1990 e continua sendo o eixo do programa do NOVO.",
"Os críticos apontam que três décadas de aplicação vieram acompanhadas de concentração de renda e de crises financeiras recorrentes. Defensores respondem que o período coincide com a maior redução de pobreza absoluta da história, puxada por abertura comercial na Ásia.",
]},

{ slug:"minarquismo", nome:"Minarquismo", l:5, c:5, autor:"Frédéric Bastiat", obra:"A Lei",
  chamada:"O Estado guarda-noturno: polícia, tribunais, defesa. Nada mais.",
  p:[
"Aceita que o Estado é necessário, mas apenas para impedir violência, fraude e quebra de contrato. Tudo o mais — saúde, educação, previdência, infraestrutura — deve ser voluntário e privado. É a posição limite entre o liberalismo e o anarcocapitalismo: reconhece que alguma coerção é inevitável, e insiste em mantê-la no mínimo absoluto.",
"Frédéric Bastiat formulou no século XIX a crítica mais citada, sobre a lei que deixa de proteger a propriedade e passa a promover \"espoliação legal\" em favor de grupos organizados.",
"A crítica é que o mínimo nunca se sustenta: um Estado com polícia e tribunais tem que arrecadar, e uma vez que arrecada surge disputa sobre em que gastar. Historicamente, nenhum Estado permaneceu mínimo por muito tempo — o que críticos leem como evidência de que a posição é instável por natureza.",
]},

{ slug:"libertarianismo-de-direito-natural", nome:"Libertarianismo de direito natural", l:5, c:6, autor:"Robert Nozick", obra:"Anarquia, Estado e Utopia",
  chamada:"Existem direitos que nenhuma maioria pode revogar.",
  p:[
"Parte da premissa de que cada pessoa é proprietária de si mesma e, por extensão, do que produz e do que recebe em troca voluntária. Desses direitos derivam todos os outros, e nem lei nem plebiscito podem violá-los legitimamente. Impostos redistributivos, nessa leitura, são trabalho forçado parcial.",
"Robert Nozick construiu o argumento em 1974, em resposta direta à teoria da justiça de John Rawls, mostrando que qualquer padrão de distribuição só se mantém interferindo continuamente em trocas livres entre adultos.",
"A crítica mais forte é sobre a origem: a cadeia de propriedade legítima pressupõe uma aquisição inicial justa, e no mundo real a terra foi tomada por conquista. O próprio Nozick reconheceu o problema sem resolvê-lo. Críticos apontam ainda que autopropriedade não diz nada a quem nasceu sem nada.",
]},

/* ── LINHA 6 ─────────────────────────────────────────────────── */
{ slug:"anarco-comunismo", nome:"Anarco-comunismo", l:6, c:1, autor:"Piotr Kropotkin", obra:"A Conquista do Pão",
  chamada:"De cada um segundo sua capacidade, a cada um segundo sua necessidade — sem Estado.",
  p:[
"Propõe abolir Estado, dinheiro e propriedade privada dos meios de produção ao mesmo tempo. A produção seria organizada por comunas federadas e a distribuição feita segundo a necessidade, sem contabilidade de quem contribuiu quanto. A ajuda mútua, não a competição, seria o motor da cooperação.",
"Piotr Kropotkin, príncipe russo e naturalista, é a referência principal. Estudando animais na Sibéria, argumentou que a cooperação é fator evolutivo tão importante quanto a competição, e usou isso como base biológica para a política.",
"As críticas são duas. A econômica, de que sem preço nem moeda não há como saber o que é escasso. E a de coerência: se duas pessoas quiserem trocar trabalho por dinheiro voluntariamente, alguém terá que impedir — o que significa que a coerção não desapareceu, apenas mudou de mãos.",
]},

{ slug:"comunalismo-libertario", nome:"Comunalismo libertário", l:6, c:2, autor:"Murray Bookchin", obra:"Ecologia Social e Outros Ensaios",
  chamada:"A assembleia do bairro decide. Nada acima dela, exceto o que ela delegar.",
  p:[
"Defende substituir o Estado-nação por uma confederação de municípios autogovernados, onde as decisões são tomadas em assembleia aberta de moradores e os delegados às instâncias superiores têm mandato imperativo e revogável. A economia é municipalizada, não estatizada nem privada.",
"Murray Bookchin desenvolveu o modelo a partir dos anos 1970, ligando ecologia e política — a ideia de que a dominação da natureza deriva da dominação entre pessoas. A experiência de Rojava, no norte da Síria, é a tentativa contemporânea mais ambiciosa de aplicá-lo.",
"A crítica é de escala e de tempo: assembleias funcionam bem em vilas e mal em metrópoles, e participação constante exige disponibilidade que a maioria das pessoas não tem. Críticos apontam ainda que a confederação, ao coordenar defesa e infraestrutura, tende a reinventar o Estado sob outro nome.",
]},

{ slug:"mutualismo", nome:"Mutualismo", l:6, c:3, autor:"Pierre-Joseph Proudhon", obra:"O que é a Propriedade?",
  chamada:"Propriedade é o que você usa. O resto é privilégio.",
  p:[
"Distingue posse de propriedade: a terra que você cultiva e a oficina onde trabalha são suas, mas a terra que você apenas possui no papel para cobrar aluguel de terceiros, não. Defende mercado sem juro, sem renda da terra e sem lucro extraído do trabalho alheio, financiado por bancos mútuos de crédito gratuito.",
"Pierre-Joseph Proudhon foi o primeiro a se chamar anarquista, e sua frase de 1840 — a propriedade é um roubo — é uma das mais citadas e das mais mal compreendidas da história política, já que ele defendia a pequena propriedade produtiva.",
"A crítica marxista é que o mutualismo mantém a produção de mercadorias e por isso reproduz desigualdade. A crítica liberal é que juro não é privilégio, e sim o preço do tempo e do risco — sem ele, ninguém empresta e não há investimento de longo prazo.",
]},

{ slug:"liberalismo-individualista", nome:"Liberalismo individualista", l:6, c:4, autor:"John Stuart Mill", obra:"Sobre a Liberdade",
  chamada:"Sobre si mesmo, sobre seu próprio corpo e mente, o indivíduo é soberano.",
  p:[
"Sustenta que o único motivo legítimo para limitar a liberdade de alguém é impedir dano a terceiros — o princípio do dano. Não basta que uma conduta seja considerada imoral, degradante ou prejudicial a quem a pratica. Daí decorrem liberdade de expressão ampla, inclusive para opiniões impopulares, e autonomia sobre a própria vida privada.",
"John Stuart Mill formulou o princípio em 1859, defendendo também que a opinião silenciada pode estar certa, e que mesmo quando errada ela obriga a verdade a se justificar em vez de virar dogma repetido.",
"A crítica é que a fronteira do dano é elástica: quase toda conduta afeta alguém indiretamente, e a definição do que conta acaba sendo política. Críticos comunitaristas acrescentam que Mill trata a autonomia como dada, quando ela é produzida por instituições que a própria doutrina não se preocupa em sustentar.",
]},

{ slug:"voluntarismo", nome:"Voluntarismo", l:6, c:5, autor:"Samuel Konkin III", obra:"Novo Manifesto Libertário",
  chamada:"Toda relação humana legítima é voluntária. A que não é, não é legítima.",
  p:[
"Reduz a ética política a um princípio: nenhuma interação pode ser imposta pela força. Daí decorre que imposto, conscrição e regulação obrigatória são ilegítimos por definição, independentemente do resultado que produzam. A estratégia associada — o agorismo de Samuel Konkin — propõe construir mercados paralelos fora do alcance do Estado até torná-lo irrelevante.",
"Konkin publicou o Novo Manifesto Libertário em 1980, defendendo a contraeconomia como alternativa tanto à revolução armada quanto à disputa eleitoral, que ele considerava legitimadora do sistema.",
"A crítica é que o consentimento pode ser formal e vazio: quem aceita qualquer condição porque a alternativa é passar fome está escolhendo, mas não livremente. E a estratégia da contraeconomia, na prática, costuma expor mais os pobres do que os ricos à repressão.",
]},

{ slug:"anarcocapitalismo", nome:"Anarcocapitalismo", l:6, c:6, autor:"Murray Rothbard", obra:"Por uma Nova Liberdade",
  chamada:"Segurança, justiça e lei também podem ser oferecidas por empresas concorrentes.",
  p:[
"Defende a eliminação completa do Estado, com todos os seus serviços — inclusive polícia, tribunais e defesa — fornecidos por empresas privadas em concorrência, contratadas voluntariamente. A lei surgiria do costume e da arbitragem entre agências, não da legislação. Imposto é tratado como extorsão, sem exceção.",
"Murray Rothbard sistematizou a doutrina, combinando a economia austríaca com a ética jusnaturalista. Casos históricos como a Islândia medieval e o direito comercial internacional são citados como evidência de que ordem jurídica pode emergir sem Estado.",
"A objeção mais recorrente é a do monopólio: agências de segurança concorrentes têm incentivo para se fundir ou guerrear, e o vencedor de qualquer desses processos é, funcionalmente, um Estado. Críticos apontam ainda que justiça paga significa proteção proporcional à renda.",
]},
];

export const TAG_AFILIADO = "colinha2026-20";
export const amazon = (autor, obra) =>
  `https://www.amazon.com.br/s?k=${encodeURIComponent(obra + " " + autor)}&tag=${TAG_AFILIADO}`;

export const porSlug = Object.fromEntries(IDEOLOGIAS.map((i) => [i.slug, i]));
export const porCasa = Object.fromEntries(IDEOLOGIAS.map((i) => [`${i.c}${i.l}`, i]));
