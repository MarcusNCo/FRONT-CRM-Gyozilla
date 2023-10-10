import instance from "../interceptor";

export const contact = async (values) => {
    return await instance.post("customers/send-email", values)
}