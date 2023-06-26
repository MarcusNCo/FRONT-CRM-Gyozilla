import "./CreateUser.css"
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import { toast, ToastContainer } from "react-toastify";
import CustomInput from "../../components/input/CustomInput";
import logo from "../../images/gyozilla-logo.png";
import { Box, useTheme } from "@mui/system";
import { Link } from "react-router-dom";
import { signIn } from "../../utils/api-call/sign-in";

const CreateUser = () => {

  const initialValues = {
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    lastname: Yup.string()
      .required("Le nom est obligatoire"),
    firstname: Yup.string()
      .required("Le prénom est obligatoire"),
    email: Yup.string()
      .email("Email invalide")
      .required("L'email est obligatoire"),
    password: Yup.string()
      .min(8, "Il faut 8 caractères minimum")
      .required("Mot de passe obligatoire"),
  });

  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "calc(100vh - 71px)",
          [theme.breakpoints.down("sm")]: {
            height: "calc(100vh - 56px)"
          },
        }}
      >
        <Box
          component="img"
          sx={{
            height: 400,
            width: 300,
            objectFit: "cover",
            [theme.breakpoints.down("sm")]: {
              display: 'none'
            },
          }}
          alt="The house from the offer."
          src={logo}
        />
        <div className="containedLogin">
          <h2 className="loginTitle">Créer un compte</h2>
          <ToastContainer />
          <Formik
            initialValues={initialValues} //transforme en state
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              resetForm()
              signIn(values)
                .then((response) => {
                  toast.success("Un email de validation a été envoyé", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                  setSubmitting(false);
                })
                .catch((error) => {
                  console.error(error);
                  if (error.response.data.message === "Le mail est déjà utilisé") {
                    toast.error(
                      "Le mail est déjà utilisé",
                      {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      }
                    );
                  } else {
                    toast.error(
                      "Erreur lors de l'envoi, veuillez verifier vos informations",
                      {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      }
                    );
                  }
                  setSubmitting(false);
                });
            }}
          >
            {({ values, handleChange, errors, touched, isSubmitting }) => {
              return (
                <Form className="formSignIn">
                  <CustomInput
                    name="lastname"
                    label="Nom"
                    type="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    errors={touched.lastname && errors.lastname}
                    variant="outlined"
                  />
                  <ErrorMessage name="lastname" />
                  <CustomInput
                    name="firstname"
                    label="Prénom"
                    type="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    errors={touched.firstname && errors.firstname}
                    variant="outlined"
                  />
                  <ErrorMessage name="firstname" />
                  <CustomInput
                    name="email"
                    label="Email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    errors={touched.email && errors.email}
                    variant="outlined"
                  />
                  <ErrorMessage name="email" />
                  <CustomInput
                    name="password"
                    label="Mot de passe"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    errors={touched.password && errors.password}
                    variant="outlined"
                    secure="true"
                  />
                  <ErrorMessage name="password" />
                  <Link style={{ paddingBottom:"20px" }} to="/login">Déjà inscrit ?</Link>
                  <LoadingButton type="submit" loading={isSubmitting}>
                    Inscription
                  </LoadingButton>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Box>
    </>
  );
}

export default CreateUser
