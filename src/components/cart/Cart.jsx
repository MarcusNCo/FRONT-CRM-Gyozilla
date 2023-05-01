import React, { useContext } from "react";
import { Button, Box, Typography, Divider } from "@mui/material";
import CartItem from "./CartItem";
import CartContext from "../../utils/context/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const { dispatch } = useContext(CartContext);

  const removeCart = (event) => {
    event.stopPropagation();
    dispatch({ type: "CLEARALL", payload: cartItems });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0 10px 10px 10px",
      }}
    >
      <Typography variant="hboxb" sx={{ textAlign: "center" }}>
        Panier
      </Typography>
      <Divider
        sx={{
          marginTop: "6px",
          borderWidth: "1px",
          opacity: "0.2",
          borderColor: "black",
        }}
      />
      {cartItems.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <Typography variant="h7b" sx={{ textAlign: "center", marginTop: "12px" }}>
        Total: {totalPrice} €
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          variant="contained"
          onClick={(event) => removeCart(event)}
          sx={{
            width: "180px",
            height: "30px",
          }}
        >
          Vider le panier
        </Button>
        <Button
          variant="contained"
          onClick={() => console.log("Commande confirmée")}
          sx={{
            width: "120px",
            height: "30px",
          }}
        >
          Confirmer
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
