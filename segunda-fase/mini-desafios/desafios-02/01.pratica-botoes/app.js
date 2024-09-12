let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clickBotao() {
    console.log('O botão foi clicado!')
}

function clickAlerta() {
    console.log('Eu amo JS')
}

function clickPrompt() {
    let cidade = prompt('Diga o nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você!`)
}

function clickSoma() {
    let num1 = prompt('Digite um numero: ');
    let num2 = prompt('Digite um segundo numero para somar: ');
    let resultado = parseInt(num1) + parseInt(num2);

    alert(`${num1} + ${num2} = ${resultado}`);
}