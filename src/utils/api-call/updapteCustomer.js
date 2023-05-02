import instance from "../interceptor";

export const updateCustomer = async (values, id) => {
    return await instance.patch(`customers/${id}`, values)
}