alert('Boas vindos ao jogo do número secreto!');
let numeroSecreto = 5;
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10:');

    if(chute == numeroSecreto) {
        alert(`Isso! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas :)`);
    } else {
        if(numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}