import React, { useState } from 'react'
import './Login.css'
import 'react-toastify/dist/ReactToastify.css'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { login } from '../../utils/api-call/login'
import { LoadingButton } from '@mui/lab'
import { toast, ToastContainer } from 'react-toastify'
import CustomInput from '../../components/input/CustomInput'
import Home from '../home/Home'
import { Link } from 'react-router-dom'

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
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

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 'calc(100vh - 100px)',
          [theme.breakpoints.down('sm')]: {
            height: 'calc(100vh - 56px)',
          },
        }}
      >
        {({ values, handleChange, errors, touched, isSubmitting }) => {
          if (isLoggedIn) {
            return <Home />
          }
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

              <Link to="/forgot-password">Mot de passe oublié ?</Link>
              <LoadingButton type="submit" loading={isSubmitting}>
                Connexion
              </LoadingButton>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default Login
