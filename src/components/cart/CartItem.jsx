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
          margin: "0px 8px 0px 8px",
          display: "flex",
          justifyContent: "space-evenly",
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
          <Typography variant="h7b">{item.name}</Typography>

          <Typography variant="h8b">Prix: {item.price} €</Typography>
          <Typography variant="h8b">Quantité: {item.quantity}</Typography>
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
              padding: "5px",
              "&:hover": {
                color: "white",
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
              padding: "5px",
              "&:hover": {
                color: "white",
                backgroundColor: "#5F8D85",
              },
            }}
          />
          <DeleteIcon
            onClick={(event) => handleRemove(event)}
            sx={{
              border: "1px solid #5F8D85",
              borderRadius: "50%",
              padding: "5px",
              "&:hover": {
                color: "white",
                backgroundColor: "#5F8D85",
              },
            }}
          />
        </Box>
      </Box>
      <Divider
        sx={{
          borderWidth: "1px",
          opacity: "0.2",
          borderColor: "black",
        }}
      />
    </React.Fragment>
  );
};

export default CartItem;