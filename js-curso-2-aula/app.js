let listaSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoTela('h1', 'Jodo do número secreto');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto) {
        exibirTextoTela('h1', 'Acertou!');
        
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas} :)`; 
        
        exibirTextoTela('p', mensagemTentativas);
        
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoTela('p', 'O número secreto é menor');
        } else {
            exibirTextoTela('p', 'O número secreto é maior');
        }
        tentativas++;
        
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeLista = listaSorteados.length;

    if(quantidadeLista == numeroLimite) {
        listaSorteados = [];
    }

    if(listaSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaSorteados.push(numeroEscolhido);
        return numeroEscolhido();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ' ';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;

    exibirMensagemInicial();

    document.querySelector('#reiniciar').setAttribute('disabled', true);
}