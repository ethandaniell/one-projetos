import axios from 'axios';

const api = axios.create({
    baseURL: "https://67afc482dffcd88a67877dc8.mockapi.io/aluraflix/videos",
})

export const getVideos = async () => {
    try {
        const response = await api.get("/video");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar videos", error);
        throw new Error("Não foi possível acessar o vídeo. Tente novamente.");
    }
}

export const saveVideo = async (video) => {
    try{
        const response = await api.post("/video", video);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar videos", error);
        throw error;
    }
}

export const deleteVideo = async (videoId) => {
    try{
        const response = await api.delete(`/video/${videoId}`);
        return response.data;
    } catch (error) {
        console.error("Error ao deletar vídeo", error);
        throw error;
    }
}

export const updateVideo = async (videoId, updatedData) => {
    try {
        const response = await api.put(`/video/${videoId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar vídeo", error);
        throw error;
    }
};

export default api;