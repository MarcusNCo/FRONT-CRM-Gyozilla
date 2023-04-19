import instance from "../interceptor";

export const signIn = async (values) => {
    return await instance.post("customers", values)
}