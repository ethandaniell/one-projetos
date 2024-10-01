import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarProduto(e) {
    e.preventDefault();

    const imagem =  document.querySelector("[data-imagem]").value; 
    const titulo =  document.querySelector("[data-nome]").value; 
    const preco =  document.querySelector("[data-preco]").value;

    await conectaApi.criarProduto(imagem, titulo, preco);
}

formulario.addEventListener('submit', e => criarProduto(e));