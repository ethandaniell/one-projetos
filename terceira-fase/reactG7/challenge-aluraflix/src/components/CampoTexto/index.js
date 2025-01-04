import styles from './CampoTexto.module.css'

const CampoTexto = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className={styles.campoTexto}>
            <label>{props.label}</label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                placeholder={props.placeholder}
                required={props.obrigatorio}
            />
        </div>
    )
}

export default CampoTexto