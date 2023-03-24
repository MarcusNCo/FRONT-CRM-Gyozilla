import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomForm from '../../components/form/CustomForm';
import { login } from '../../utils/login';
import { LoadingButton } from '@mui/lab';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Log = () => {

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalide').required('L\'email est obligatoire'),
    password: Yup.string().required('Mot de passe obligatoire'),
  });

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await login(values);
      resetForm();
      setSubmitting(false);
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
    } catch (error) {
      console.error(error);
      setSubmitting(false);
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
    }
  };

  return (
    <div>
      <ToastContainer />
      <Formik
        initialValues={initialValues} //transforme en state
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, handleChange, errors, touched, isSubmitting }) => {
          return (
            <Form className='formLogin'>
              <CustomForm
                inputs={[
                  {
                    name: 'email',
                    label: 'Email',
                    type: 'email',
                    value: values.email,
                    onChange: handleChange,
                    errors: touched.email && errors.email,
                  },
                  {
                    name: 'password',
                    label: 'Password',
                    type: 'password',
                    secure: 'true',
                    value: values.password,
                    onChange: handleChange,
                    errors: touched.password && errors.password,
                  },
                ]}
              />
              <LoadingButton type='submit' loading={isSubmitting}>Envoyer</LoadingButton>
            </Form>
          )
        }}
      </Formik>
    </div>
  );
};

export default Log;

