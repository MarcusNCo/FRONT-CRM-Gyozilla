import instance from "../interceptor";

export const resetPassword = async (values) => {
    return await instance.post("customers/reset-password", values)
}