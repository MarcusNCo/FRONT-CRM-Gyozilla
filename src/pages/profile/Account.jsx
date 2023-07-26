import React, { useContext } from 'react'
import { UserContext } from '../../utils/context/UserContext'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { LoadingButton } from '@mui/lab'
import CustomInput from '../../components/input/CustomInput'
import { Box, useTheme } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import './Profile.css'
import { updateCustomer } from '../../utils/api-call/updapteCustomer'

const Account = () => {
  const { user, isLogged } = useContext(UserContext)
  const initialValues = {
    lastname: '',
    firstname: '',
    email: '',
  }

  const validationSchema = Yup.object().shape({
    lastname: Yup.string(),
    firstname: Yup.string(),
    email: Yup.string().email('Email invalide'),
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
          minHeight: 'calc(100vh - 71px)',
          [theme.breakpoints.down('sm')]: {
            minHeight: 'calc(100vh - 56px - 134px)',
          },
        }}
      >
        <Box className="containedLoginUser">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              const id = user.id
              updateCustomer(values, id)
                .then((response) => {
                  if (
                    response.data.message === 'Votre compte a été mit à jour'
                  ) {
                    toast.success('Votre compte a été mit à jour !', {
                      position: 'top-right',
                      autoClose: 4000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'light',
                    })
                  }
                })
                .catch((error) => {
                  console.error(error.response)
                  if (
                    error.response.data.message ===
                    "Le client n'a pas été mis à jour"
                  ) {
                    toast.error(
                      'Un problème a eu lieu pendant la mise à jour !',
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
                  <Link to="/forgot-password">Changer son mot de passe</Link>
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    sx={{ marginTop: '20px' }}
                  >
                    Enregistrer
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

export default Account
