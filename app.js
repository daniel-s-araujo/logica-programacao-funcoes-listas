function verificarChute() {
    console.log(numeroSecreto);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

let numeroSecreto = gerarNumeroAleatorio();

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
