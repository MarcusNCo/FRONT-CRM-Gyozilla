import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item, increment, decrement, remove }) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "300px",
          height: "fit-content",
          border: "0",
          // filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.48))",
          margin: "0px 8px 0px 8px",
          display: "flex",
          justifyContent: 'space-evenly',
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
  
          <Typography variant="h8b">Prix: {item.price.toFixed(2)} €</Typography>
          <Typography variant="h8b">Quantité: {item.quantity}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: "space-evenly",
            alignItems: 'center',
            width: '40%',
          }}
        >
          <AddIcon
            onClick={increment}
            sx={{
              border: "1px solid #5F8D85",
              borderRadius: "50%",
              padding: "5px",
              '&:hover': {
                color: 'white',
                backgroundColor: '#5F8D85',
              },
            }}
          />
          <RemoveIcon
            onClick={decrement}
            disabled={item.quantity === 1}
            sx={{
              border: "1px solid #5F8D85",
              borderRadius: "50%",
              padding: "5px",
              '&:hover': {
                color: 'white',
                backgroundColor: '#5F8D85',
              },
            }}
          />
          <DeleteIcon
            onClick={remove}
            sx={{
              border: "1px solid #5F8D85",
              borderRadius: "50%",
              padding: "5px",
              '&:hover': {
                color: 'white',
                backgroundColor: '#5F8D85',
              },
            }}
          />
        </Box>
      </Box>
      <Divider 
        sx={{
          borderWidth: '1px',
          opacity: '0.2',
          borderColor: 'black',
        }}
      />
    </React.Fragment>
  );
};

export default CartItem;
