import React, { useContext } from "react";
import { Button, Box, Typography, Divider } from "@mui/material";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/context/UserContext";
import CartContext from "../../utils/context/CartContext";

const Cart = () => {
  const { cartItems, dispatch } = useContext(CartContext);
  const { isLogged, setShouldRedirectToOrder } = useContext(UserContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

  const removeCart = (event) => {
    event.stopPropagation();
    dispatch({ type: "CLEAR" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0 10px 0 10px",
        height: "400px",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F8A50050",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <Typography variant="hboxnb">Panier</Typography>
      </Box>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Box
        sx={{
          backgroundColor: "#F8A50050",
          borderRadius: "20px 20px 5px 5px",
          textAlign: "center",
          marginTop: "12px",
          paddingTop: "5px",
          paddingBottom: "10px",
        }}
      >
        <Box sx={{ padding: "5px 0 5px 0" }}>
          <Typography variant="h7bnw">
            Total du panier : {totalPrice} €
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button
            variant="contained"
            onClick={(event) => removeCart(event)}
            sx={{
              width: "120px",
              height: "30px",
              marginTop: "0",
            }}
          >
            Vider
          </Button>
          <Button
            variant="contained"
            disabled={!cartItems.length}
            onClick={() => {
              if (isLogged) {
                navigate("/order");
              } else {
                setShouldRedirectToOrder(true);
                navigate("/login");
              }
            }}
            sx={{
              width: "120px",
              height: "30px",
              marginTop: "0",
            }}
          >
            Confirmer
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
