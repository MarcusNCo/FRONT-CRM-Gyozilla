import instance from "../interceptor";

export const verifyUser = async (token) => {
    return await instance.get(`customers/verify/${token}`)
}