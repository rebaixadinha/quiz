//Array principal
const perguntas = [
    {
    pergunta: "Qual línguagem é usada para estruturar paginas web?",
    alternativas: ["CSS", "HTML", "Python", "Java script"],
    correta: 1
    }
];
const premio = [1000, 10000, 20000, 30000, 40000];
let perguntaAtual = 0;
let premioAtual = 0;
let respondeu = false;

const perguntaE = document.getElementById("pergunta");
const alternativasE = document.getElementById("alternativas");
const mensagemE = document.getElementById("mensagem");
const numeroPerguntasE = document.getElementById("numero- pergunta");
const premioE = document.getElementById("premio");
const proximaBtnE = document.getElementById("proxima");

function carregarPergunta(){
    respondeu = false;
    proximaBrnE.disabled = true;
    mensagemE.textContent ="";
    alternativasE.innerHTML ="";
    const item = perguntas[perguntaAtual];
    perguntaE.textContent = item.pergunta;
    numeroPerguntasE.textContent =
    `Pergunta: ${perguntaAtual + 1} de ${perguntas.length}`;
    premioE.textContent = 
    `Premio: R$ ${premioAtual}`;
    item.alternativas.forEach((texto, indice)=> {
        const botao = document.createElement("button");
        botao.classList.add("alternativa");
        botao.textContent = 
        `${String.fromCharCode(65 + indice)}) $(texto)`;
 botao.addEventListener("click", () => verificaResposta(indice, botao));
    alternativasE.appendChild(botao);
        
    })
}
function verificaResposta(indiceEscolhido, botaoEscolhido){
    if(respondeu) return;
    respondeu = true;
   
    const item = perguntas[perguntaatual];
    //querySelector seleciona todos os elementos com uma determinada classe
    const botoes = document.querySelector(".alternativa");
    //botao.disabled = true desativa o botao para novas tentativas
    botoes.forEach(botao => botao.Disabled = true);
    if (indiceEscolhido === item.correta){
        botaoEscolhido.classList.add("correta");
        premioatual = premioatual[perguntaatual];
        mensagemE.textContent = "resposta correta. Voce avançou";

    }
    else{
        botaoEscolhido.classList.add("errada");
    }
    premioE.textContent = `Premio: R$ ${premioatual.toLocaleString("pt-BR")}`
    proximaBtnE.Disabled = false;
}
proximaBtnE.addEventListener("click",() => {
//perguntaatual++ equvale a perguntaatual = perguntaatual+1
    perguntaatual++;
    if(perguntaatual<perguntas.length){
        carregarpergunta();
    }else
    finalizaJogo();
   
});
function  finalizarJogo(){
    perguntaE.textContent = "finz do jogo";
    alternativasE.innerHTML = "";
    numero_perguntaE.textContent =
    `voce ficou com R$ ${premioatual}`;
    proximaBtnE.Disabled = false;

    proximaBtnE.onclick = () => {
        perguntaatual = 0;
        premioatual = 0;
        proximaBtnE.textContent = " proxima pergunta";
        proximaBtnE.onclick = null;
        carregarpergunta();
    };
}
carregarpergunta();
