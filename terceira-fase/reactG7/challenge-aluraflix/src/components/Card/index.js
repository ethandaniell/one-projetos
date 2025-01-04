import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import iconeDeletar from '../../assets/images/icon-delete.png';
import iconeEditar from '../../assets/images/icon-edit.png';
import Modal from 'components/EditCardModal';


const Card = ({ id, img, titulo, cor, cardData, aoSalvar, aoExcluir }) => {
    const [modalAberto, setModalAberto] = useState(false);

    const aoModalAberto = () => setModalAberto(true);
    const aoModalFechado = () => setModalAberto(false);

    const excluir = () => {
        fetch(`${id}`, {
            method: 'DELETE',
        })
            .then((resposta) => {
                if (!resposta.ok) throw new Error('Erro ao excluir o card');
                console.log('Card excluído:', id);
                aoExcluir();
            })
            .catch((error) => console.error('Erro ao excluir card:', error));
    };

    return (
        <div 
            className={styles.conteudo}
            style={{
                border: `3px solid ${cor}`,
                boxShadow: `0 0 10px ${cor}`,
                WebkitBoxShadow: `0 0 15px ${cor}`,
                MozBoxShadow: `0 0 15px ${cor}`,
            }}
        >
            <Link className={styles.link} to={`/${id}`}>
                <img 
                    src={img} 
                    alt={titulo} 
                />
            </Link>
            <div 
                className={styles.cardFooter}
                style={{
                    borderTop: `2px solid ${cor}`, 
                    boxShadow: `0 0 15px ${cor}`,
                }}
            >
                <div className={styles.deletar} onClick={excluir}>
                    <img 
                        src={iconeDeletar} 
                        alt="Deletar Card" 
                        title="Deletar Card" 
                    />
                    <p className={styles.texto}>Deletar</p>
                </div>
                <div className={styles.editar} onClick={aoModalAberto}>
                    <img 
                        src={iconeEditar} 
                        alt="Editar Card" 
                        title="Editar Card" 
                    />
                    <p className={styles.texto}>Editar</p>
                </div>
            </div>
            <Modal 
                aoAbrir={modalAberto} 
                aoFechar={aoModalFechado}
                aoSalvar={(updatedData) => {
                    aoSalvar(updatedData); // Atualiza os dados do card
                    aoModalFechado(); // Fecha o modal
                }}
                dadosIniciais={cardData}
            />
        </div>
    );
};

export default Card;
