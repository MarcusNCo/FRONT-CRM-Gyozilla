import React from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import CustomForm from '../../components/form/CustomForm';

const Log = () => {

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log('submit',values);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalide').required('L\'email est obligatoire'),
    password: Yup.string().required('Mot de passe obligatoire'),
  });


  return (
    <Formik
      initialValues={initialValues} //transforme en state
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({values, handleChange, errors, touched }) => {
        return (
          <Form>
          <CustomForm
            fields={[
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
          <button type="submit">Envoyer</button>
        </Form>
        ) 
      }}  
    </Formik>
  );
};


export default Log;