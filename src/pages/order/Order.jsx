import { Box } from "@mui/system";
import React from "react";
import Typography from '@mui/material/Typography'

const Order = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "calc(100vh - 71px)",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography variant="h7bnw" color="initial">COUCOU, voici ta commande cochon ;-)</Typography>
      </Box>
    </>
  );
};

export default Order;
