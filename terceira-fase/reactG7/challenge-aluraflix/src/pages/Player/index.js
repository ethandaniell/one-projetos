import { useParams } from 'react-router-dom';
import styles from './Player.module.css';
import dados from '../../data/db.json';

const Player = () => {
    const parametros = useParams();
    const videoId = Number(parametros.id);

    // Busca o vídeo com find
    const videoPlay = dados.cards.flatMap(card => card.videos).find(video => video.id === videoId);

    // Função para extrair o embed URL do YouTube
    const getEmbedUrl = (url) => {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <div className={styles.containerPlayer}>
            <h2 className={styles.titulo}>{videoPlay?.titulo || 'Título não encontrado'}</h2>
            <div className={styles.player}>
                {videoPlay ? (
                    <div>
                        <iframe
                            className={styles.videoIframe}
                            width="900px"
                            height="600px"
                            src={getEmbedUrl(videoPlay.url)}
                            title={videoPlay.titulo}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                ) : (
                    <p>Vídeo não encontrado!</p>
                )}
            </div>
            <p className={styles.descricao}>{videoPlay?.descricao || 'Descrição não disponível'}</p>
        </div>
    );
};

export default Player;
