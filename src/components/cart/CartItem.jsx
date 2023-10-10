/* eslint-disable no-dupe-keys */
import React, { useContext } from "react";
import { Typography, Box, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import CartContext from "../../utils/context/CartContext";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const handleIncrement = (event) => {
    event.stopPropagation();
    dispatch({ type: "INCREMENT", payload: item.id });
  };

  const handleDecrement = (event) => {
    event.stopPropagation();
    dispatch({ type: "DECREMENT", payload: item.id });
  };

  const handleRemove = (event) => {
    event.stopPropagation();
    dispatch({ type: "REMOVE", payload: item.id });
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "300px",
          height: "fit-content",
          border: "0",
          margin: "5px 5px 5px 5px",
          display: "flex",
          justifyContent: "space-evenly",
          boxShadow: "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset"
        }}
      >
        <Box
          sx={{
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            width: "60%",
          }}
        >
          <Typography variant="h7bnw">
            {item.quantity}x {item.name}
          </Typography>
          <Typography variant="h8bn">{item.price} € par unité</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "40%",
          }}
        >
          <AddIcon
            onClick={(event) => handleIncrement(event)}
            sx={{
              border: "1px solid #5F8D85",
              borderRadius: "50%",
              color: "#5F8D85 !important",
              padding: "5px",
              "&:hover": {
                color: "white !important",
                backgroundColor: "#5F8D85",
              },
            }}
          />
          <RemoveIcon
            onClick={(event) => handleDecrement(event)}
            disabled={item.quantity === 1}
            sx={{
              border: "1px solid #5F8D85",
              borderRadius: "50%",
              color: "#5F8D85 !important",
              padding: "5px",
              "&:hover": {
                color: "white !important",
                backgroundColor: "#5F8D85",
              },
            }}
          />
          <DeleteIcon
            onClick={(event) => handleRemove(event)}
            sx={{
              border: "1px solid #F8A500",
              borderRadius: "50%",
              color: "#F8A500 !important",
              padding: "5px",
              "&:hover": {
                color: "white !important",
                backgroundColor: "#F8A500",
              },
            }}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CartItem;
