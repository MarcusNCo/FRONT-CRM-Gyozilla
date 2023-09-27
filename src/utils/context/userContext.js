import { createContext, useEffect, useState, useReducer } from "react";
import jwt_decode from "jwt-decode";
import CartContext from "./CartContext";

export const UserContext = createContext({});

const cartReducer = (state, action) => {
  const cart = JSON.parse(window.localStorage.getItem("cart")) || {};

  switch (action.type) {
    case "INCREMENT":
      if (cart[action.payload]) {
        cart[action.payload].quantity += 1;
      }
      window.localStorage.setItem("cart", JSON.stringify(cart));
      action.type = "UPDATE";
      return Object.values(cart);

    case "DECREMENT":
      if (cart[action.payload] && cart[action.payload].quantity > 1) {
        cart[action.payload].quantity -= 1;
      }
      window.localStorage.setItem("cart", JSON.stringify(cart));
      action.type = "UPDATE";
      return Object.values(cart);

    case "REMOVE":
      if (cart[action.payload]) {
        delete cart[action.payload];
      }
      window.localStorage.setItem("cart", JSON.stringify(cart));
      return Object.values(cart);

    case "CLEAR":
      window.localStorage.setItem("cart", JSON.stringify({}));
      return [];

    case "INIT":
      return action.payload;

    case "UPDATE":
      return Object.values(cart);

    default:
      return state;
  }
};

const  UserContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [shouldRedirectToOrder, setShouldRedirectToOrder] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      
      const currentTime = Date.now() / 1000;
      if (decoded.exp && decoded.exp < currentTime) {
        localStorage.removeItem("token");
        setIsLogged(false);
        setUser({});
      } else {
        if (!isLogged) {
          setUser(decoded);
          setIsLogged(true);
        }
      }
    }
  }, [isLogged]);

  const [cartItems, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const cart = JSON.parse(window.localStorage.getItem("cart")) || {};
    dispatch({ type: "INIT", payload: Object.values(cart) });
  }, []);

  const updateCartItems = () => {
    dispatch({ type: "UPDATE" });
  };

  return (
    <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged, shouldRedirectToOrder, setShouldRedirectToOrder }}>
      <CartContext.Provider
        value={{
          cartItems,
          updateCartItems,
          dispatch,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default UserContextProvider;