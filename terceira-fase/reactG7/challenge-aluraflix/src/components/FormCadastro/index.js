import CampoTexto from 'components/CampoTexto'
import styles from './FormCadastro.module.css'
import CampoMensagem from 'components/CampoMensagem'
import ListaSuspensa from 'components/ListaSuspensa'
import { useState } from 'react'
import BotaoForm from 'components/BotaoForm'

const FormCadastro = (props) => {

    const categorias = [
        'Selecione uma Categoria',
        'Front End',
        'Back End',
        'Mobile'
    ]

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')
    const [descricao, setDescricao] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoNovoVideoCadastrado({
            titulo, 
            categoria, 
            imagem, 
            video, 
            descricao
        })
        limparCampos()
    }

    const limparCampos = () => {
        setTitulo('')
        setCategoria('')
        setImagem('')
        setVideo('')
        setDescricao('')
    }

    return (
        <section className={styles.container}>
            <div className={styles.cabecalho}>
                <h2>Novo Vídeo</h2>
                <p>Complete o Formulário para criar um novo Card de Vídeo</p>
            </div>
            <h2 className={styles.titulo}>Criar Card</h2>

            <form onSubmit={aoSalvar} onReset={limparCampos}>
                <CampoTexto 
                    label="Título"
                    placeholder="Digite o Título"
                    obrigatorio={true}
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />
                <ListaSuspensa 
                    label="Categoria" itens={categorias}
                    obrigatorio={true}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />
                <CampoTexto 
                    label="Imagem"
                    placeholder="Digite o link da Imagem"
                    obrigatorio={true}
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto 
                    label="Vídeo"
                    placeholder="Digite o link do Vídeo"
                    obrigatorio={true}
                    valor={video}
                    aoAlterado={valor => setVideo(valor)}
                />
                <CampoMensagem 
                    label="Descrição"
                    placeholder="Sobre o que é esse vídeo?"
                    obrigatorio={true}
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <div className={styles.botao}>
                    <BotaoForm type="submit">Cadastrar</BotaoForm>
                    <BotaoForm type="reset">Limpar</BotaoForm>
                </div>
            </form>
        </section>
    )
}

export default FormCadastro