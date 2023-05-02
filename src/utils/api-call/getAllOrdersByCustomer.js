import instance from "../interceptor";

export const getAllOrdersByCustomer = async (id) => {
    return await instance.get(`orders/customers/${id}`)
}