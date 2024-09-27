const html = document.querySelector('html');
const focobt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseeBt = document.querySelector('#start-pause');
const iniciarPausarBt = document.querySelector('#start-pause span');
const tempoTela = document.querySelector('#timer');

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true;

const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')

let intervaloId = null;
let tempoSeg = 1500;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focobt.addEventListener('click', () => {
    tempoSeg = 1500;
    alterarContexto('foco');
    focobt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
    tempoSeg = 300;
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
    tempoSeg = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
})

function alterarContexto(contexto) {

    mostrarTempo();
   
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    });

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    switch(contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade, <br> <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
                titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta.</strong>`
                break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoSeg <= 0) {
        audioTempoFinalizado.play()
        alert('Tempo finalizado!');
        zerar();
        return;
    }
    tempoSeg -= 1;
    mostrarTempo();
}

startPauseeBt.addEventListener('click', iniciarPausar);

function iniciarPausar() {
    if(intervaloId) {
        audioPausa.play();
        zerar();
        return;
    }
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarPausarBt.textContent = "Pausar";
    iniciarPausarBt.setAttribute('src', `/imagens/pause.png`);
}

function zerar() {
    clearInterval(intervaloId);
    iniciarPausarBt.textContent = "Começar";
    iniciarPausarBt.setAttribute('src', `/imagens/play_arrow.png`);
    intervaloId = null;
}
function mostrarTempo() {
    const tempo = new Date(tempoSeg * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo();