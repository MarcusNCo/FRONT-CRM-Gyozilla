import { Box, borderRadius } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomCard from "../../components/card/CustomCard";
import { Button, Chip, Divider, TextField, Typography } from "@mui/material";


const ProductDetails = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [productInfo, setProductInfo] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    menu: "",
  });
  const [total, setTotal] = useState(productInfo.price);

  useEffect(() => {
    if (location.state && location.state.productList) {
      setProductInfo(location.state.productList[0]);
    }
  }, []);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setTotal(quantity * productInfo.price);
  }, [quantity, productInfo.price]);

  const addToCart = () => {
    const product = { id: productInfo.id, name: productInfo.name, price: productInfo.price, quantity };
    const cart = JSON.parse(window.localStorage.getItem('cart')) || {};
  
    if (cart[product.id]) {
      cart[product.id].quantity += quantity;
    } else {
      cart[product.id] = product;
    }
  
    window.localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <>
      <Box
        sx={{
          minHeight: "calc(100vh - 71px)",
          color: "black",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          "@media (max-width: 900px)": {
            flexDirection: "column",
          },
        }}
      >
        {productInfo.image && (
          <Box
            component="img"
            sx={{
              height: "fit-content",
              maxWidth: '400px',
              maxHeight: '400px',
              objectFit: "cover",
            }}
            alt={`Image du produit "${productInfo.name}"`}
            src={require("../../images/" + productInfo.image)}
          />
        )}
        <Box
          sx={{
            width: "400px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "space-evenly",
            justifyContent: "space-evenly",
            padding: "10px",
            borderRadius: "0 0 10px 10px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          }}
        >
          <Typography variant="h6g">{productInfo.name}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "fit-content",
            }}
          >
            <Typography sx={{ width: '200px', fontSize: '1.2rem', backgroundColor: '#5F8D85', borderRadius: '5px 0', paddingLeft: '10px', marginBottom: '10px' }}>Description du produit</Typography>
          
            <Typography variant="h7bnw">{productInfo.description}</Typography>
            <Typography variant="h7bnw">
              Prix à l'unité : {productInfo.price}€
            </Typography>

          </Box>
          <Divider sx={{ borderBottom: 1, borderColor: "#00000050" }}/>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100px',
              justifySelf: 'end',
            }}
          >

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Button onClick={decrementQuantity}>-</Button>
              <Typography variant="h7bnw">
                Nombre de produit : {quantity}
              </Typography>
              <Button onClick={incrementQuantity}>+</Button>
            </Box>
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                
              }}
            >
              <Typography sx={{ textAlign: "center", display: 'flex', alignItems: 'center' }} variant="h7b">
                Total: {total}€
              </Typography>
              <Button
                sx={{ alignSelf: "center", width: "fit-content" }}
                onClick={addToCart}
              >
                Ajouter au panier
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
