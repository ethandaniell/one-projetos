alert('Boas vindos ao jogo do número secreto!');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10:');

if(chute == numeroSecreto) {
    alert(`Isso! Você descobriu o numero secreto ${numeroSecreto} :)`)
} else {
    alert('Você errou :(')
}