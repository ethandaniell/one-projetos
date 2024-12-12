import Container from "components/Container";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

const { default: Cabecalho } = require("components/Cabecalho");
const { default: FavoritosProvider } = require("contextos/Favoritos");

function PaginaBase() {
    return(
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase