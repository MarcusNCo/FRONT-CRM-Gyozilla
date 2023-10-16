import instance from "../interceptor";

export const createOrder = async (values) => {
  return await instance.post("orders", values);
};

export const createOrderLine = async (values) => {
  return await instance.post("order_lines", values);
};

export const updateOrder = async (id, values) => {
  return await instance.patch(`orders/${id}`, values);
};

export const sendOrderEmail = async (values) => {
  return await instance.post('send_email', values);
};
