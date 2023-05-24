import React, { useState } from "react";
import { Button, Box, Typography, Divider } from "@mui/material";
import CartItem from "./CartItem";

const Cart = ({ items, onIncrement, onDecrement } ) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const incrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity -= 1;
    setCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 10px 10px 10px',
      }}
    >
      <Typography variant="hboxb" sx={{ textAlign: 'center' }} >Panier</Typography>
      <Divider 
        sx={{
          marginTop: '6px',
          borderWidth: '1px',
          opacity: '0.2',
          borderColor: 'black',
        }}
      />
      {/* {cart.map((item, index) => ( */}
      {items.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          increment={() => incrementQuantity(index)}
          decrement={() => decrementQuantity(index)}
          remove={() => removeItem(index)}
        />
      ))}
      {/* <Typography variant="h7b">Total: {cartTotal.toFixed(2)} €</Typography> */}
      <Typography variant="h7b" sx={{ textAlign: 'center', marginTop: '12px' }} >Total: {totalPrice.toFixed(2)} €</Typography>
      <Box sx={{ display:'flex', justifyContent: 'space-evenly' }}>
        <Button 
          variant="contained" 
          onClick={clearCart}
          sx={{
              width: '130px',
              height: '30px',
          }}
        >
          Vider le panier
        </Button>
        <Button
          variant="contained"
          onClick={() => console.log("Commande confirmée")}
          sx={{
              width: '100px',
              height: '30px',
          }}
        >
          Confirmer
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
