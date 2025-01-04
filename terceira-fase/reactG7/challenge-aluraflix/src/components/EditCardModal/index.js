import React, { useState } from 'react';
import styles from './EditCardModal.module.css';

const Modal = ({ aoAbrir, aoFechar, aoSalvar, dadosIniciais }) => {
    const [formData, setFormData] = useState(dadosIniciais);

    const editar = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const limpar = () => {
        setFormData({
            titulo: '',
            categoria: '',
            img: '',
            url: '',
            descricao: '',
        });
    };

    const salvar = () => {
        fetch(`${dadosIniciais.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((resposta) => {
                if (!resposta.ok) throw new Error('Erro ao salvar alterações');
                return resposta.json();
            })
            .then((cardAtualizado) => {
                console.log('Alterações salvas:', cardAtualizado);
                aoSalvar(cardAtualizado);
            })
            .catch((error) => console.error('Erro ao salvar alterações:', error));
    };

    if (!aoAbrir) return null;

    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <button onClick={aoFechar} className={styles.botaoFechar}>
                    ✖
                </button>
                <h2 className={styles.titulo}>Editar Card:</h2>
                <form className={styles.form}>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={editar}
                        placeholder='o que é javascript?'
                    />

                    <label>Categoria:</label>
                    <select
                        name="categoria"
                        value={formData.categoria}
                        onChange={editar}
                        placeholder='Selecione uma Categoria'
                    >
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="design">Design</option>
                    </select>

                    <label>Imagem:</label>
                    <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={editar}
                        placeholder='https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps...'
                    />

                    <label>Vídeo:</label>
                    <input
                        type="text"
                        name="url"
                        value={formData.url}
                        onChange={editar}
                        placeholder='https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap..'
                    />

                    <label>Descrição:</label>
                    <textarea
                        name="descricao"
                        value={formData.descricao}
                        onChange={editar}
                        placeholder='Neste vídeo...'
                    ></textarea>

                    <div className={styles.botoes}>
                        <button className={styles.botaoSalvar} type="button" onClick={salvar}>
                            Salvar
                        </button>
                        <button className={styles.botaoLimpar} type="button" onClick={limpar}>
                            Limpar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
