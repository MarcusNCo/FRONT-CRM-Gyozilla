import instance from "../interceptor";

export const createOrder = async (values, token) => {
  console.log(values)
  return await instance.post("orders", values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createOrderLine = async (values, token) => {
  console.log(values)
  return await instance.post("order_lines", values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
