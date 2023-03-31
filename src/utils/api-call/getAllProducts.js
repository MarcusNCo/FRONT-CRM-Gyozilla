import instance from "../interceptor";

export const getAllProducts = () => {
    return instance.get("products");
}