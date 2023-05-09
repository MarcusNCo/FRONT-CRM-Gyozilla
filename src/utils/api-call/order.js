import instance from "../interceptor";

export const createOrder = async (
  customerId,
  franchiseId,
  date,
  totalPrice,
  statusId,
  token
) => {
  return await instance.post(
    "orders",
    {
      id_customers: customerId,
      id_franchises: franchiseId,
      date_order: date,
      total_price: totalPrice,
      id_status: statusId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createOrderLine = async (orderId, productId, quantity, token) => {
  return await instance.post(
    "order_lines",
    {
      id_orders: orderId,
      id_products: productId,
      quantity: quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
