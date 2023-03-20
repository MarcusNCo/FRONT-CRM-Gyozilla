import axios from 'axios'
import env from 'react-dotenv'


// Création d'une instance Axios
const instance = axios.create({
    baseURL: env.URL_API,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Ajout d'un intercepteur de requête
instance.interceptors.request.use(
    (config) => {
        // Récupération du token depuis le local storage
        // const token = localStorage.getItem("token");

        // Ajout du token dans l'en-tête de la requête
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        // Vous pouvez ajouter des informations supplémentaires à la requête ici
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Ajout d'un intercepteur de réponse
instance.interceptors.response.use(
    (response) => {
        // Vous pouvez traiter la réponse ici
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;