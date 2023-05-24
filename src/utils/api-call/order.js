import instance from "../interceptor";

export const createOrder = async (values, token) => {
  return await instance.post("orders", values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createOrderLine = async (values, token) => {
  return await instance.post("order_lines", values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
