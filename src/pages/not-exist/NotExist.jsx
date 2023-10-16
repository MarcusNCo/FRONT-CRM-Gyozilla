/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CustomButton from "../../components/button/CustomButton";
import logo from "../../images/gyozilla-logo.png";

const NotExist = () => {
  const [displayBackButton, setDisplayBackButton] = useState(true);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const maxScrollPosition =
        document.documentElement.scrollHeight - window.innerHeight;
      if (window.pageYOffset > maxScrollPosition - 200) {
        setDisplayBackButton(false);
      } else {
        setDisplayBackButton(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 71px)",
          "@media (max-width:700px)": {
            minHeight: "calc(100vh - 56px)",
          },
          position: "relative",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 400,
            width: 300,
            objectFit: "cover",
          }}
          alt="The house from the offer."
          src={logo}
        />
        <Box
          sx={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -60%)",
          }}
        >
          <Typography variant="h3">
            Erreur 404
          </Typography>
        </Box>
        <Typography variant="h7b">
          Rien n'est disponible sur cette page !
        </Typography>
      </Box>
      {displayBackButton && (
        <Box
          sx={{
            position: "fixed",
            bottom: "20px",
            left: "25px",
            "@media (max-width:700px)": {
              display: "none",
            },
          }}
        >
          <CustomButton
            text="Retour"
            height="40px"
            width="120px"
            padding="0 20px 0 20px"
            margin="32px"
            startIcon={<KeyboardReturnIcon />}
            onClick={handleBackClick}
          ></CustomButton>
        </Box>
      )}
    </>
  );
};

export default NotExist;
