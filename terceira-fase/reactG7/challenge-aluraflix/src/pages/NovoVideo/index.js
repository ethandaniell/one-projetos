import FormCadastro from 'components/FormCadastro'
import styles from './NovoVideo.module.css'

const NovoVideo = () => {

    const aoNovoVideoCadastrado = (novoVideo) => {
        fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoVideo),
        })
            .then((resposta) => {
                if (!resposta.ok) throw new Error('Erro ao criar novo vídeo');
                return resposta.json();
            })
            .then((videoCriado) => {
                console.log('Vídeo criado:', videoCriado);
            })
            .catch((error) => console.error('Erro ao criar vídeo:', error));
    };

    return (
        <main>
            <FormCadastro 
                aoNovoVideoCadastrado = {aoNovoVideoCadastrado}
            />
        </main>
    )
}

export default NovoVideo