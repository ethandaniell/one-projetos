const listaTeclas = document.querySelectorAll('.tecla');
const elemento = document.querySelectorAll();

function tocaSom(idElementoAudio) {
    if(elemento === null) {
        console.log('Elemento não encontrado');
    } else { 
        if(elemento.localName === 'audio') {
            elemento.play();
        }
    }
}

for(let cont = 0; cont < listaTeclas.length; cont++) {
    const tecla = listaTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio)
    };

    tecla.onekeydown = function(e) {
        if(e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onekeyup = function() {
        tecla.classList.remove('ativa');
    }
}

