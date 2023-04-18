import React, { useState } from "react";
import { Button, Box, Typography, Divider } from "@mui/material";
import BasketItem from "./BasketItem";

const Basket = ({ items, onIncrement, onDecrement } ) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };

  const incrementQuantity = (index) => {
    const newBasket = [...basket];
    newBasket[index].quantity += 1;
    setBasket(newBasket);
  };

  const decrementQuantity = (index) => {
    const newBasket = [...basket];
    newBasket[index].quantity -= 1;
    setBasket(newBasket);
  };

  const removeItem = (index) => {
    const newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const cartTotal = basket.reduce(
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
      {/* {basket.map((item, index) => ( */}
      {items.map((item, index) => (
        <BasketItem
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
          onClick={clearBasket}
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

export default Basket;
