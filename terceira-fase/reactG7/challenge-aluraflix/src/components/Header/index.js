import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import iconHome from '../../assets/images/icon-home.png'
import iconNewVideo from '../../assets/images/icon-newvideo.png'
import HeaderLink from './HeaderLink'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt='Logo da AluraFlix'></img>
            </Link>
            <nav>
                <div className={styles.botaoHome}>
                    <img src={iconHome} alt='Icone Inicio'></img>
                    <HeaderLink url="./" >
                        Home
                    </HeaderLink>
                </div>
                <div className={styles.novoVideoBotao}>
                    <img src={iconNewVideo} alt='Icone Novo Video'></img>
                    <HeaderLink url="./NovoVideo" >
                        Novo Vídeo
                    </HeaderLink>
                </div>
            </nav>
        </header>
    )
}

export default Header