import React, { useState } from 'react';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../utils/api-call/login';
import { LoadingButton } from '@mui/lab';
import { toast, ToastContainer } from 'react-toastify';
import CustomInput from '../../components/input/CustomInput';
import Products from '../products/Products';


const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalide').required('L\'email est obligatoire'),
    password: Yup.string().min(8, 'Il faut 8 caractères minimum').required('Mot de passe obligatoire'),
  });

  return (
    <>
      <div className='containedLogin'>
        <h2 className='loginTitle'>Connexion</h2>
        <ToastContainer />
        <Formik
          initialValues={initialValues} //transforme en state
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            login(values)
              .then(response => {
                if (response.data.message === "Authentification réussi") {
                  setIsLoggedIn(true)
                }
                toast.success('Vous êtes connecté', {
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
              .catch(error => {
                console.error(error);
                toast.error('Erreur lors de la connexion, veuillez verifier vos informations', {
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
              });
          }}
        >
          {({ values, handleChange, errors, touched, isSubmitting }) => {
            if (isLoggedIn) {
              return <Products />
            }
            return (
              <Form className='formLogin'>
                <CustomInput
                  name='email'
                  label='Email'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                  errors={touched.email && errors.email}
                  variant='outlined'
                />
                <ErrorMessage name='email' />
                <CustomInput
                  name='password'
                  label='Mot de passe'
                  type='password'
                  value={values.password}
                  onChange={handleChange}
                  errors={touched.password && errors.password}
                  variant='outlined'
                  secure='true'
                />
                <ErrorMessage name='password' />
                {/* <CustomForm
                  inputs={[
                    {
                      name: 'email',
                      label: 'Email',
                      type: 'email',
                      value: values.email,
                      onChange: handleChange,
                      errors: touched.email && errors.email,
                      variant: 'outlined'
                    },
                    {
                      name: 'password',
                      label: 'Password',
                      type: 'password',
                      secure: 'true',
                      value: values.password,
                      onChange: handleChange,
                      errors: touched.password && errors.password,
                      variant: 'outlined'
                    },
                  ]}
                /> */}
                <LoadingButton type='submit' loading={isSubmitting}>Connexion</LoadingButton>
              </Form>
            )
          }}
        </Formik>
      </div>
    </>
  );
};

export default Login;

