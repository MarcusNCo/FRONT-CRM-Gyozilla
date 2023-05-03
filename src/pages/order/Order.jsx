import React, { useState, useEffect } from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";

const Order = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
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

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleProceed = () => {
    // Ajoutez votre logique pour passer à l'étape suivante de la commande
    console.log("Poursuivre la commande");
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "calc(100vh - 71px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography variant="h7bnw" color="initial">
          Récapitulatif de la commande
        </Typography>
        {cartItems.map((item) => (
          <Box key={item.id}>
            <Typography variant="h6" color="initial">
              {item.name}
            </Typography>

            <CardMedia
              className="around"
              component="img"

              image={getImage(item.image)}
              alt={item.name}
              sx={{
                height:"140px",
                width:"140px"
              }}
            />
            <Typography variant="body1" color="initial">
              Prix: {item.price}€
            </Typography>
            <Typography variant="body1" color="initial">
              Quantité: {item.quantity}
            </Typography>
          </Box>
        ))}
        <Typography variant="h6" color="initial">
          Total: {getTotal()}€
        </Typography>
        <Button variant="contained" color="primary" onClick={handleProceed}>
          Poursuivre la commande
        </Button>
      </Box>
    </>
  );
};

export default Order;
