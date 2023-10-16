import { Box, TextField, ThemeProvider, useTheme } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import CustomButton from "../../components/button/CustomButton";
import logo from "../../images/gyozilla-logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { contact } from "../../utils/api-call/contact";
import { ToastContainer, toast } from "react-toastify";

const validationSchema = Yup.object({
  nom: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  message: Yup.string().required("Required"),
});

const Contact = () => {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      nom: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await contact(values);
        if (response.status === 200) {
          toast.success("Email envoyé", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("Erreur lors de l'envoi de l'email", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        //console.log("Erreur de réseau", error);
      }
    },
  });

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
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "90%",
              "@media (min-width:700px)": {
                width: "400px",
              },
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "space-evenly",
            }}
          >
            <ThemeProvider theme={theme}>
              <Box>
                <TextField
                  id="nom"
                  label="Nom"
                  variant="outlined"
                  value={formik.values.nom}
                  onChange={formik.handleChange}
                  error={formik.touched.nom && Boolean(formik.errors.nom)}
                  helperText={formik.touched.nom && formik.errors.nom}
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>
              <TextField
                id="message"
                label="Votre message"
                variant="outlined"
                multiline
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </ThemeProvider>
          </Box>
          <CustomButton
            type="submit"
            text={"Envoyer"}
            width={"200px"}
          ></CustomButton>
        </form>
        <ToastContainer position="top-right" />
      </Box>
    </>
  );
};

export default Contact;
