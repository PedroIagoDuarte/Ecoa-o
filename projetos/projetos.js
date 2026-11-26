const PROJETOS = [
  { categoria:"Decoração", titulo:"Foguete de garrafa PET", imagem:"/imagens/foguete.png",
    descricao:"Um foguete colorido feito com uma garrafa PET e sobras de papelão.",
    materiais:["1 garrafa PET vazia e limpa","Papelão reutilizado para as asas","Papelão fino ou cartolina para a ponta","Tinta guache ou acrílica","Papéis coloridos ou retalhos","Cola quente ou cola forte","Tesoura, régua e lápis","Canetinhas (opcional)"],
    passos:["Prepare a garrafa: lave e seque bem. Ela será o corpo do foguete.","Faça a ponta: enrole papelão fino em forma de cone, cole as extremidades e fixe no fundo da garrafa, que será a parte de cima.","Recorte as asas: desenhe 3 ou 4 asas triangulares no papelão, deixando uma abinha na base para colar.","Fixe as asas: cole ao redor da parte de baixo, bem distribuídas, para o foguete ficar em pé.","Decore: pinte e acrescente janelas e faixas com papel colorido ou canetinhas.","Finalize: espere secar e confira se tudo está bem fixado."],
    objetivo:"Transforma uma garrafa PET e pedaços de papelão que seriam descartados em um objeto decorativo criativo, incentivando a reutilização, a imaginação e a consciência ambiental." },

  { categoria:"Brinquedo", titulo:"Ratinho de garrafa PET", imagem:"/imagens/rato.png",
    descricao:"Um ratinho com rodinhas de tampinha, feito com uma garrafa pequena.",
    materiais:["1 garrafa PET pequena e vazia","4 tampinhas de garrafa (rodas)","Papelão ou EVA para as orelhas","Papel rosa para dentro das orelhas","2 olhos móveis ou papel","Barbante, lã ou fio para o rabo","Fios finos para os bigodes","Tinta, cola e tesoura"],
    passos:["Prepare a garrafa: lave, seque e deixe deitada para formar o corpo.","Pinte o corpo e espere secar.","Faça as orelhas: recorte duas no papelão e cole um papel rosa menor no centro de cada uma.","Monte o rosto: fixe os olhos na frente e cole os fios finos no focinho como bigodes.","Faça o rabo: prenda uma ponta de barbante atrás e curve a outra.","Monte as rodas: fixe duas tampinhas de cada lado. Para ele andar de verdade, use palitos resistentes como eixos.","Finalize: confira as peças e ajuste o rosto e as orelhas."],
    objetivo:"Reutiliza garrafas PET, tampinhas e sobras de material para criar um brinquedo, estimulando a criatividade e mostrando que o que seria descartado ganha nova utilidade." },

  { categoria:"Ciência", titulo:"Mão robótica de papelão", imagem:"/imagens/mao.png",
    descricao:"Uma mão com dedos que se mexem ao puxar os fios, como tendões de verdade.",
    materiais:["Papelão reutilizado de caixas","Canudos usados","Barbante ou fios resistentes","Elásticos","Cola quente ou cola forte","Tesoura","Lápis e régua (opcional)"],
    passos:["Desenhe o molde: contorne sua mão no papelão, desenhe os cinco dedos e recorte.","Prepare os canudos: corte pedaços pequenos para as articulações.","Cole os canudos nos dedos, deixando pequenos espaços para o movimento.","Passe os fios: faça furos nas pontas dos dedos e passe um barbante em cada um, deixando sobra embaixo.","Monte a base: fixe uma faixa de papelão na palma e passe os fios por ela, livres para deslizar.","Adicione os elásticos para ajudar os dedos a voltarem à posição inicial.","Teste: puxe os fios um a um e ajuste os canudos se algum dedo não mexer bem."],
    rotulo:"Como funciona?",
    objetivo:"Um sistema simples de fios funciona como tendões. Quando um fio é puxado, ele movimenta o dedo correspondente, simulando o movimento de uma mão humana." },

  { categoria:"Brinquedo", titulo:"Brinquedo de arremesso", imagem:"/imagens/copo.png",
    descricao:"Um jogo de copos e bolinha para treinar a pontaria e a concentração.",
    materiais:["2 copos descartáveis reutilizados","Barbante ou fio resistente","2 bolinhas de papel amassado","Papel colorido ou retalhos","2 palitos de sorvete","Cola quente ou cola forte","Tesoura","Fita adesiva (opcional)"],
    passos:["Prepare os copos: limpe e seque os dois.","Decore: encape com papel colorido e enfeite com círculos de outras cores.","Faça a alça: cole um palito de sorvete na parte de fora de cada copo.","Corte o barbante no comprimento desejado.","Prenda uma bolinha em cada ponta do barbante.","Monte: fixe a outra ponta dentro de cada copo, com as bolinhas penduradas para fora.","Teste: segure um copo e tente encaixar a bolinha no outro. Ajuste o barbante se precisar."],
    rotulo:"Como funciona?",
    objetivo:"O brinquedo usa coordenação motora e percepção de distância. O objetivo é movimentar o copo para a bolinha entrar no outro, desenvolvendo concentração e precisão." },

  { categoria:"Para o pet", titulo:"Cama de pet com camisetas velhas", imagem:"/imagens/cama.png",
    descricao:"Uma caminha macia e lavável para cachorro ou gato, sem precisar costurar.",
    materiais:["6 a 8 camisetas velhas","1 caixa de papelão baixa ou aro de bambolê","Roupas velhas ou retalhos para o enchimento","Tesoura"],
    passos:["Corte as camisetas em tiras de 4 a 5 cm.","Amarre as tiras ao redor do aro ou da borda da caixa, bem firmes.","Preencha o centro com roupas dobradas ou retalhos.","Cubra com uma manta ou camiseta inteira para ficar macio."],
    objetivo:"Dá um destino útil a roupas que não são mais usadas e economiza na compra de uma cama nova para o seu pet." },

  { categoria:"Para casa", titulo:"Horta vertical de garrafas PET", imagem:"/imagens/horta.png",
    descricao:"Uma horta compacta de temperos para pendurar na varanda, janela ou muro.",
    materiais:["Garrafas PET de 2 litros","Barbante ou corda","Terra e adubo","Mudas de manjericão, salsinha ou cebolinha","Tesoura"],
    passos:["Corte um retângulo na lateral de cada garrafa.","Faça furinhos no fundo para a água escorrer.","Passe a corda e pendure as garrafas, uma abaixo da outra.","Encha com terra, plante as mudas e regue com frequência."],
    objetivo:"Reaproveita garrafas PET e ajuda a ter temperos frescos em casa, mesmo em espaços pequenos." }
];

const esc = t => String(t).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const FOLHA = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 6-7"/></svg>`;
const SETA = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

document.getElementById("pj-grid").innerHTML = PROJETOS.map(p => `
  <article class="pj-card">
    <div class="pj-foto">${p.imagem ? `<img src="${esc(p.imagem)}" alt="${esc(p.titulo)}">` : `<div class="pj-icone">${FOLHA}</div>`}</div>
    <div class="pj-info">
      <span class="pj-cat">${esc(p.categoria)}</span>
      <h2>${esc(p.titulo)}</h2>
      <p>${esc(p.descricao)}</p>
      <h3>Materiais necessários</h3>
      <ul>${p.materiais.map(m => `<li>${esc(m)}</li>`).join("")}</ul>
      <div class="pj-obj"><h3>${esc(p.rotulo || "Objetivo sustentável")}</h3><p>${esc(p.objetivo)}</p></div>
    </div>
    <details>
      <summary>Passo a passo ${SETA}</summary>
      <ol class="pj-passos">${p.passos.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
    </details>
  </article>`).join("");