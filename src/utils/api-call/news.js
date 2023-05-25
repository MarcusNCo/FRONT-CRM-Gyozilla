import instance from "../interceptor";

export const getLastThreeNews = () => {
    return instance.get("lastnews");
}

export const getAllNews = () => {
    return instance.get("news");
}

export const getNew = async (id) => {
    return await instance.get(`news/${id}`)
}