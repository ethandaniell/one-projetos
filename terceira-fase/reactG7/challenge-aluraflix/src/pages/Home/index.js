import { useState, useEffect } from 'react';
import Banner from 'components/Banner';
import styles from './Home.module.css';
import Card from 'components/Card';

const Home = () => {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/ethandaniell/aluraflix-api/cards') 
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error(`Erro na rede: ${resposta.status}`);
                }
                return resposta.json();
            })
            .then(data => setDados(data))
            .catch(error => console.error('Erro ao carregar dados:', error));
    }, []);

    const editar = (videoId, dataAtualizada) => {
        fetch(`https://my-json-server.typicode.com/ethandaniell/aluraflix-api/cards/${videoId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataAtualizada),
        })
            .then((resposta) => {
                if (!resposta.ok) throw new Error('Erro ao salvar alterações');
                return resposta.json();
            })
            .then((videoAtualizado) => {
                // Atualiza o estado local após a edição
                setDados((prevState) =>
                    prevState.map((category) => ({
                        ...category,
                        videos: category.videos.map((video) =>
                            video.id === videoId ? videoAtualizado : video
                        ),
                    }))
                );
            })
            .catch((error) => console.error('Erro ao salvar alterações:', error));
    };

    const deletar = (videoId) => {
        fetch(`https://my-json-server.typicode.com/ethandaniell/aluraflix-api/cards/${videoId}`, {
            method: 'DELETE',
        })
            .then((resposta) => {
                if (!resposta.ok) throw new Error('Erro ao excluir o card');
                console.log('Card excluído:', videoId);

                // Atualiza o estado local após a exclusão
                setDados((prevState) =>
                    prevState.map((category) => ({
                        ...category,
                        videos: category.videos.filter((video) => video.id !== videoId),
                    }))
                );
            })
            .catch((error) => console.error('Erro ao excluir card:', error));
    };

    return (
        <div style={{ background: "#262626" }}>
            <Banner />
            <section className={styles.container}>
                {dados.map((category) => (
                    <div key={category.categoria} className={styles.categoria}>
                        <h2
                            style={{
                                color: 'white',
                                backgroundColor: category.cor,
                                padding: '0.5rem',
                                width: '432px',
                                height: '70px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '15px',
                                marginBottom: '40px',
                                fontSize: '2rem',
                            }}
                        >
                            {category.categoria}
                        </h2>
                        <div className={styles.cards}>
                            {category.videos.map(video => (
                                <Card 
                                    {...video}
                                    key={video.id}
                                    cor={category.cor}
                                    aoSalvar={(updatedData) => editar(video.id, updatedData)}
                                    aoExcluir={() => deletar(video.id)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Home;
