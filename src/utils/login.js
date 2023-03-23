import axios from "./interceptor";

export const login = () => {
    return axios.post("token");
}