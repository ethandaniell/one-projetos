import { conectaApi } from "./conectaApi";

async function excluirProduto(id) {
    if(confirm('Tem certeza que deseja excluir este produto?')) {
        try {
            await conectaApi.excluirProduto(id);
        } catch {
            alert('Não foi possível excluir o produto.')
        }

        window.location.reload(true);

    }    
}

export {excluirProduto};