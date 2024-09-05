const entradaTexto = document.querySelector("textarea#digite");
const saidaTexto = document.querySelector("textarea#resultado");
const criptografarBotao = document.querySelector(".criptografar");
const descriptografarBotao = document.querySelector(".descriptografar");
const areaTextoImagem = document.querySelector(".homem-lupa");
const texto = document.querySelector(".texto");
const areaResultado = document.querySelector(".resultado");
const copiarBotao = document.querySelector(".copiar");

const codificando = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

function criptografar(texto) {
    for(let i = 0; i < codificando.length; i++) {
        let letra = codificando[i][0];
        let codigo = codificando[i][1];

        texto = texto.replaceAll(letra, codigo);
    }
    return texto;
}

function descriptografar(texto) {
    for(let i = 0; i < codificando.length; i++) {
        let letra = codificando[i][0];
        let codigo = codificando[i][1];

        texto = texto.replaceAll(codigo, letra);
    }
    return texto;
}

function exibirResultado() {
    areaTextoImagem.style.display = "none";
    texto.style.display = "none";
    areaResultado.style.display = "block";
}

function limparEntrada() {
    entradaTexto.value = entradaTexto.innerHTML;
}

function handleCriptografar() {
    const textoCriptografado = criptografar(entradaTexto.value);
    saidaTexto.value = textoCriptografado;
    exibirResultado();
    limparEntrada();
}

function handleDescriptografar() {
    const textoDescriptografado = descriptografar(entradaTexto.value);
    saidaTexto.value = textoDescriptografado;
    exibirResultado();
    limparEntrada();
}

function copiarTexto() {
    navigator.clipboard.writeText(saidaTexto.value).then(() => {
        saidaTexto.value = saidaTexto.innerHTML;
    });
}

entradaTexto.addEventListener('click', exibirResultado);
criptografarBotao.addEventListener('click', handleCriptografar);
descriptografarBotao.addEventListener('click', handleDescriptografar);
copiarBotao.addEventListener('click', copiarTexto);