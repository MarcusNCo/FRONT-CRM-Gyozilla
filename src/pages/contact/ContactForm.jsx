import React from "react";
import CustomForm from "../../components/form/CustomForm";
import { Typography, Box, Container } from "@mui/material";
import "./ContactForm.css";
import CustomInput from "../../components/input/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import { display, height, margin, width } from "@mui/system";
import TextField from "@mui/system";

const ContactForm = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
      className="bodyCont"
      maxWidth="xl"
    >
      <CustomForm inputs={[]} />
      <Box
        id="firstCol"
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: 400, md: 800 },
          backgroundColor: "amber",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          ml={8}
          mt={3}
          className="contactText"
        >
          {" "}
          Des questions?
        </Typography>
        <Typography
          variant="h3"
          color="white"
          ml={8}
          mt={1}
          className="contactText"
        >
          {" "}
          Une remarque?
        </Typography>
        <Typography
          variant="body1"
          color="white"
          ml={8}
          mr={8}
          mt={4}
          className="contactText"
        >
          {" "}
          Si vous avez la moindre question vous pouvez nous la poser directement
          ci-dessous en nous communiquant votre nom et email.
        </Typography>
        <Box className="info">
          <CustomInput
            style={{ width: "40%" }}
            placeholder="Nom*"
            type="name"
            name="name"
            id="name"
            label="Nom"
            variant="outlined"
            autoComplete="name"
            required
          ></CustomInput>
          <CustomInput
            style={{ width: "40%" }}
            placeholder="Email*"
            type="email"
            name="email"
            id="email"
            label="Email"
            variant="outlined"
            autoComplete="email"
            required
          ></CustomInput>
        </Box>
        <Box className="sendContent">
          <CustomInput
            style={{ width: "80%" }}
            id="outlined-multiline-static"
            label="Votre message"
            multiline="true"
            rows={4}
            defaultValue="Default Value"
          />
        </Box>
        <CustomButton text={"Envoyer"} width={"25%"} margin={"0 0 0 30px"}></CustomButton>
      </Box>
      <Box
        id="secondCol"
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: 400, md: 800 },
          backgroundColor: "teal",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          ml={8}
          mt={3}
          className="contactText"
        >
          {" "}
          Gyozilla
        </Typography>
        <Typography
          variant="body1"
          color="white"
          ml={8}
          mt={3}
          className="contactText"
        >
          69 avenue de la poupée qui tousse
        </Typography>
        <Typography
          variant="body1"
          color="white"
          ml={8}
          className="contactText"
        >
          80000
        </Typography>
        <Typography variant="h4" color="white" ml={8} className="contactText">
          Amiens
        </Typography>
        <Typography
          variant="body1"
          color="white"
          ml={8}
          mt={2}
          className="contactText"
        >
          06 18 64 23 15
        </Typography>
        <Typography
          variant="body1"
          color="white"
          ml={8}
          mt={2}
          className="contactText"
        >
          contact@gyozilla.fr
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactForm;
