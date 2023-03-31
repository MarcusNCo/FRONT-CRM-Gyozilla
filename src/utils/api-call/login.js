import instance from "../interceptor";

export const login = async (values) => {
    return await instance.post("token", values)
}