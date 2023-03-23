import axios from "axios";
import env from "react-dotenv";

// Création d'une instance Axios
const instance = axios.create({
  baseURL: env.URL_API + "/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Ajout d'un intercepteur de requête
instance.interceptors.request.use(
  (config) => {
    // console.log(config)

    // Récupération du token depuis le local storage
    const token = localStorage.getItem("token");

    // Ajout du token dans l'en-tête de la requête
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Ajout d'un intercepteur de réponse
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // Déconnexion de l'utilisateur et suppression du token
      localStorage.removeItem("token");
      // window.location.href = '/login'; // rediriger vers la page de connexion
    }
    return Promise.reject(error);
  }
);

export default instance;
