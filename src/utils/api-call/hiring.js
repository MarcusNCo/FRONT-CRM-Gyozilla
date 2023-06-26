import instance from "../interceptor";

export const getAllHiring = () => {
    return instance.get("hiring");
}