import { LinkNav, Logo, Nav, NavContainer } from "./Header.styled";
import logo from '../../assets/logo.png'
import Button from "../Button/Button";

const Header = () => {
    return (
        <header>
            <Nav>
                <Logo src={logo} alt="AluraFlix Logo" />
                <NavContainer>
                    <LinkNav
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <Button>Home</Button>
                    </LinkNav>
                    <LinkNav
                        to="/new-video"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        <Button>New Video</Button>
                    </LinkNav>
                </NavContainer>
            </Nav>
        </header>
    )
}

export default Header;