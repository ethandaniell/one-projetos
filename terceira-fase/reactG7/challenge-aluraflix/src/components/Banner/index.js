import styles from './Banner.module.css';

const Banner = () => {
    
    return (
        <section className={styles.capa}>
            <div className={styles.conteudoBanner}>
                <div className={styles.bannerTexto}>
                    <button>Front End</button>
                    <h2>SEO com React</h2>
                    <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!
                    </p>
                </div>
                <div className={styles.conteudoBannerVideo}>
                    <iframe className={styles.videoFrame}
                        src='https://www.youtube.com/embed/c8mVlakBESE?si=MZzhQuBgf5Y4RG7p'
                        title='YouTube Video Player'
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default Banner