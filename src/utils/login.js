import instance from "./interceptor";

export const login = async (values) => {
    return instance.post("token", values);
}