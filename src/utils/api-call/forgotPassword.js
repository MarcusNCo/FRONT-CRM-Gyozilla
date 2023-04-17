import instance from "../interceptor";

export const forgotPassword = async (values) => {
    return await instance.post("customers/forgot-password", values)
}