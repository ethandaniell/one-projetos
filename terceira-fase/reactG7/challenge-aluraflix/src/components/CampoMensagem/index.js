import styles from './CampoMensagem.module.css'

const CampoMensagem = (props) => {
    return (
        <div className={styles.campoMensagem}>
            <label>{props.label}</label>
            <textarea
                onChange={e => props.aoAlterado(e.target.value)}
                value={props.valor}
                placeholder={props.placeholder}
                required={props.obrigatorio}
            ></textarea>
        </div>
    )
}

export default CampoMensagem