import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";

import backgroundImageHome from "../../images/backgroundHomePage.webp";
import backgroundImageHomeMobile from "../../images/backgroundHomePage-Mobile-min.webp";
import logo from "../../images/logo texteLogo horizontal ecriture2_Logo horizontal ecriture.png";
import "./Home.css";

import { IconButton, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const Home = () => {
  const [src, setSrc] = useState(backgroundImageHome);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width <= 992) {
        setSrc(backgroundImageHomeMobile);
      } else {
        setSrc(backgroundImageHome);
      }
    });
    return () => window.removeEventListener("resize", null);
  }, []);

  return (
    <>
      <Box
        className="backgroundHome"
        sx={{
          height: "calc(100vh - 100px)",
        }}
      >
        {/* Image background */}

        <img src={src} alt="backgroundImageHome" />

        {/* Logo */}
        <img src={logo} alt="Logo" className="logoEcriture" />

        {/* Icône de flèche vers le bas */}
        <IconButton
          aria-label="Flèche vers le bas"
          color="inherit"
          sx={{
            marginTop: "16px",
            position: "absolute",
            left: "50%",
            bottom: "0.5rem",
            transform: "translate(-50%)",
            width: "150px",
          }}
        >
          <KeyboardDoubleArrowDownIcon
            sx={{ color: "#F8A500", height: "4rem", width: "4rem" }}
          />
        </IconButton>
      </Box>

      <div>Home</div>
    </>
  );
};

export default Home;
