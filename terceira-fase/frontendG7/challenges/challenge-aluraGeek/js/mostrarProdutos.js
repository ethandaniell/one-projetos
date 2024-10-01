import { conectaApi } from "./conectaApi.js";
import { excluirProduto } from "./excluirProduto.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(imagem, titulo, preco, id) {
    const produto = document.createElement("li");

    produto.className = "produtos-elemento";
    produto.innerHTML = `<img class="produtos-elemento-imagem" src="${imagem}">
        <p class="produtos-elemento-descricao">${titulo}</p>
        <div class="produtos-elemento-div">
            <p class="produtos-elemento-preco">$ ${preco}</p>
            <img class="produtos-elemento-excluir" src="./assets/trash.png" data-lixeira id=${id}>
        </div>`;

    return produto;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();

        if(listaApi.length) {
            listaApi.forEach(e => lista.appendChild(constroiCard(e.imagem, e.titulo, e.preco, e.id)));
        } else {
            lista.innerHTML = `<p class="container-cards-vazio">Nenhum produto foi adicionado.</p>`
        }

        const lixeira = document.querySelectorAll(`[data-lixeira]`);
        lixeira.forEach(bt => {
            bt.addEventListener('click', () => excluirProduto(bt.id))
        })
    } catch (error) {
         lista.innerHTML = `<p class="container-cards-vazio">Nenhum produto foi adicionado.</p>`
    }
}

listaProdutos();