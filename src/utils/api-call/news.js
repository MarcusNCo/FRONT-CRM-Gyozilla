import instance from "../interceptor";

export const getLastThreeNews = () => {
    return instance.get("lastnews");
}