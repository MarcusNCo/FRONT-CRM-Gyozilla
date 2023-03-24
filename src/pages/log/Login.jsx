import React from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import CustomForm from '../../components/form/CustomForm';
import { login } from '../../utils/login';
import { LoadingButton } from '@mui/lab';

const Log = () => {

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalide').required('L\'email est obligatoire'),
    password: Yup.string().required('Mot de passe obligatoire'),
  });


  return (
    <Formik
      initialValues={initialValues} //transforme en state
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        login(values)
          .then(response => {
            console.log(response)
            setSubmitting(false);
          })
          .catch(error => {
            console.error(error);
            setSubmitting(false);
          });
      }}
    >
      {({values, handleChange, errors, touched , isSubmitting}) => {
        return (
          <Form>
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
          <LoadingButton type='submit' loading = {isSubmitting}>Envoyer</LoadingButton>
        </Form>
        ) 
      }}  
    </Formik>
  );
};


export default Log;