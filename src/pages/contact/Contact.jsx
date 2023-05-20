import { Box, TextField, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import CustomButton from "../../components/button/CustomButton";

const theme = createTheme({
  typography: {
    fontSize: 14,
  },
});

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          height: "calc(100vh - 71px)",
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
          <Typography variant="hboxnb" color="initial">
            Une question ?
          </Typography>
          <Typography variant="hboxnb" color="initial">
            Une remarque ?
          </Typography>
          <Typography variant="hboxnb" color="initial">
            Joignez-nous tous types de demande via le formulaire ci-dessous.
          </Typography>
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
            />
          </ThemeProvider>
        </Box>
        <CustomButton text={"Envoyer"} width={"200px"}></CustomButton>
      </Box>
    </>
  );
};

export default Contact;
