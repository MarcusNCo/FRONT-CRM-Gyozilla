import React from "react";
import "./Profil.css";
import { Box } from "@mui/system";
import logo from "../../images/happychinese.jpg";

const Profil = () => {
  return (
    <>
      <Box
        sx={{
          heigh: "calc(100vh - 100px)",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: '50px 0 50px 0'
        }}
      >
        <Box
          component="img"
          sx={{
            height: 400,
            width: 400,
            objectFit: 'cover'
          }}
          alt="Happy Chinese"
          src={logo}
        />
      </Box>
    </>
  );
};

export default Profil;
