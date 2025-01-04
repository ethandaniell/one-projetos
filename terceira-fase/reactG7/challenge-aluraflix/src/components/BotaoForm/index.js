import styles from './BotaoForm.module.css'

const BotaoForm = ({ children }) => {
    return (
        <div>
            <button className={styles.botao}>{children}</button>
        </div>
    )
}

export default BotaoForm