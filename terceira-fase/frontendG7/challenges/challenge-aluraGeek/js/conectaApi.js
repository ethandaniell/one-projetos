async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarProduto(imagem, titulo, preco) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            titulo: titulo,
            preco: `$ ${preco}`
        })
    });
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function excluirProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/{id}`, {
        method: 'DELETE',
    });
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos,
    criarProduto,
    excluirProduto
}