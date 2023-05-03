import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';


const Order = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const cartParsed = JSON.parse(cartData);
      setCartItems(Object.values(cartParsed));
    }
  }, []);

  const getImage = (image) => {
    let dbImage;
    if (image !== undefined) {
      dbImage = require("../../images/" + image);
    }
    return dbImage;
  };

  return (
    <>
      <Box
        sx={{
          minHeight: 'calc(100vh - 71px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Typography variant="h7bnw" color="initial">Récapitulatif de la commande</Typography>
        {cartItems.map((item) => (
          <Box key={item.id}>
            <Typography variant="h7bnw" color="initial">{item.name}</Typography>
            <img src={getImage(item.image)} alt={item.name} style={{ height: '150px', width: '150px' }} />
            <Typography variant="body1" color="initial">Prix: {item.price}€</Typography>
            <Typography variant="body1" color="initial">Quantité: {item.quantity}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Order;
