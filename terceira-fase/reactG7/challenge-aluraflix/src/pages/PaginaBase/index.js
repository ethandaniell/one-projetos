const { default: Footer } = require("components/Footer")
const { default: Header } = require("components/Header")
const { Outlet } = require("react-router-dom")

const PaginaBase = () => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}

export default PaginaBase