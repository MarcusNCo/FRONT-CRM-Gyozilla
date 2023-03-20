import axios from "./interceptor";

export const getAllProducts = () => {
    return axios.get("products");
}