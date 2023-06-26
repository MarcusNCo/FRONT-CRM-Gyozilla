import { Box, TextField, ThemeProvider, useTheme } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import CustomButton from "../../components/button/CustomButton";
import logo from "../../images/gyozilla-logo.png";

const Contact = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          minHeight: "calc(100vh - 71px)",
          "@media (max-width:700px)": {
            minHeight: "calc(100vh - 56px)",
          },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
        >
          <Typography
            variant="hboxnb"
            color="initial"
            sx={{ paddingBottom: "10px" }}
          >
            Une question ? Une remarque ?
          </Typography>
          <Typography
            variant="hboxnb"
            color="initial"
            sx={{ paddingBottom: "10px" }}
          >
            Joignez-nous tous types de demande via le formulaire ci-dessous.
          </Typography>
          <Box
            component="img"
            sx={{
              height: 120,
              width: 100,
              margin: "0 auto 0 auto",
              "@media (max-width:700px)": {
                display: "none",
              },
            }}
            alt="Logo de Gyozilla"
            src={logo}
          />
        </Box>
        <Box
          sx={{
            width: "90%",
            "@media (min-width:700px)": {
              width: "500px",
            },
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "space-evenly",
          }}
        >
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "50px",
                "@media (max-width:700px)": {
                  flexDirection: "column",
                },
              }}
            >
              <TextField id="outlined-basic" label="Nom" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Box>
            <TextField
              id="outlined-multiline-static"
              label="Votre message"
              multiline
              rows={4}
              variant="outlined"
              sx={{ margin: "0 auto 0 auto" }}
            />
          </ThemeProvider>
        </Box>
        <CustomButton text={"Envoyer"} width={"200px"}></CustomButton>
      </Box>
    </>
  );
};

export default Contact;
