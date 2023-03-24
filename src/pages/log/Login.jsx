import React from 'react';
import './Log.css'
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomForm from '../../components/form/CustomForm';
import { login } from '../../utils/login';
import { LoadingButton } from '@mui/lab';
import { toast, ToastContainer } from 'react-toastify';
import CustomInput from '../../components/input/CustomInput';


const Log = () => {

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalide').required('L\'email est obligatoire'),
    password: Yup.string().min(8, 'Il faut 8 caractères minimum').required('Mot de passe obligatoire'),
  });

  return (
    <div className='containedLogin'>
      <h2 className='loginTitle'>Connexion</h2>
      <ToastContainer />
      <Formik
        initialValues={initialValues} //transforme en state
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          login(values)
            .then(response => {
              console.log(response)
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
          console.log('valeurs', values);
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
  );
};

export default Log;

