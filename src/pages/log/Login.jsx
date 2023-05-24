import React, { useContext } from 'react'
import './Login.css'
import 'react-toastify/dist/ReactToastify.css'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { login } from '../../utils/api-call/login'
import { LoadingButton } from '@mui/lab'
import { toast, ToastContainer } from 'react-toastify'
import CustomInput from '../../components/input/CustomInput'
import logo from '../../images/gyozilla-logo.png'
import { Box, useTheme } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../utils/context/UserContext'

const Login = () => {
  const {
    setIsLogged,
    shouldRedirectToOrder,
    setShouldRedirectToOrder,
  } = useContext(UserContext)
  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email invalide')
      .required("L'email est obligatoire"),
    password: Yup.string()
      .min(8, 'Il faut 8 caractères minimum')
      .required('Mot de passe obligatoire'),
  })

  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <>
      <ToastContainer preventDuplicates={false} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 'calc(100vh - 71px)',
          [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh - 56px)',
          },
        }}
      >
        <Box
          component="img"
          sx={{
            height: 400,
            width: 300,
            objectFit: 'cover',
            [theme.breakpoints.down('sm')]: {
              display: 'none',
            },
          }}
          alt="The house from the offer."
          src={logo}
        />
        <Box className="containedLogin">
          <h2 className="loginTitle">Connexion</h2>
          <Formik
            initialValues={initialValues} //transforme en state
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              login(values)
                .then((response) => {
                  if (response.data.message === 'Authentification réussi') {
                    setIsLogged(true)
                    if (shouldRedirectToOrder) {
                      setShouldRedirectToOrder(false)
                      navigate('/order')
                    } else {
                      navigate('/products', {
                        state: {
                          successMessage: 'Vous êtes connecté !',
                        },
                      })
                    }
                  }
                })
                .catch((error) => {
                  console.error(error.response.data.message)
                  if (error.response.data.message === "L'email n'existe pas") {
                    toast.error(
                      "Aucun utilisateur avec cet e-mail n'a été trouvé.",
                      {
                        position: 'top-right',
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                      },
                    )
                  } else if (
                    error.response.data.message ===
                    'Vous devez valider votre compte pour vous connecter'
                  ) {
                    toast.error(
                      'Vous devez valider votre compte pour vous connecter',
                      {
                        position: 'top-right',
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                      },
                    )
                  } else {
                    toast.error(
                      'Erreur lors de la connexion, veuillez verifier vos informations',
                      {
                        position: 'top-right',
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                      },
                    )
                  }
                  setSubmitting(false)
                })
            }}
          >
            {({ values, handleChange, errors, touched, isSubmitting }) => {
              return (
                <Form className="formLogin">
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
                  <Link style={{ paddingBottom: '10px' }} to="/forgot-password">
                    Mot de passe oublié ?
                  </Link>
                  <Link style={{ paddingBottom: '20px' }} to="/sign-in">
                    Pas encore inscrit ? Faites le ici !
                  </Link>
                  <LoadingButton type="submit" loading={isSubmitting}>
                    Connexion
                  </LoadingButton>
                </Form>
              )
            }}
          </Formik>
        </Box>
      </Box>
    </>
  )
}

export default Login
