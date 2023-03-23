import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomForm from '../../components/form/CustomForm';

const Login = () => {

  const initialValues = {
    email: '',
    password: '',
  };

  const fieldNames = {
    email: 'email',
    password: 'password',
  };

  const [formState, setFormState] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const fields = [
    {
      name: fieldNames.email,
      label: 'Email',
      type: 'email',
      value: formState[fieldNames.email],
      onChange: handleChange,
    },
    {
      name: fieldNames.password,
      label: 'Password',
      type: 'password',
      secure: 'true',
      value: formState[fieldNames.password],
      onChange: handleChange,
    },
  ];

  const validationSchema = Yup.object().shape({
    [fieldNames.email]: Yup.string().email('Email invalide').required('L\'email est obligatoire'),
    [fieldNames.password]: Yup.string().required('Mot de passe obligatoire'),
  });


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <CustomForm
          fields={fields}
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};


export default Login;