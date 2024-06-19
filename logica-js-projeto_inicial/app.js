alert('Boas vindos ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100:');

    if(chute == numeroSecreto) {
        break;
    } else {
        if(numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas} :)`);