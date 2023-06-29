import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import defaultTheme from "./utils/theming/theme";
import Footer from "./template/footer/Footer";
import Header from "./template/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
// import UserContextProvider from "./utils/context/UserContext";
import RoutesConfig from "./routes";
import React, { createContext, useEffect, useReducer, useState } from "react";
import jwt_decode from "jwt-decode";

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

function UserContextProvider(props) {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [shouldRedirectToOrder, setShouldRedirectToOrder] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !isLogged) {
      const decoded = jwt_decode(token);
      setUser(decoded);
      setIsLogged(true);
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


const CartContext = createContext({
  cartItems: [],
  updateCartItems: () => {},
});









const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <UserContextProvider>
          <Router>
            <Header />
            <RoutesConfig />
            <Footer />
          </Router>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
