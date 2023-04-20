import instance from "../interceptor";

export const getAllProductByMenu = (menuId) => {
  return instance.get(`products/menu/${menuId}`);
};
