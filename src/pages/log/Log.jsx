import React, { useState } from 'react'
import CustomInput from '../../components/form/CustomInput'

const Log = () => {
  const [formState, setFormState] = useState({ name: '', email: ''});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput input={{ type: 'text', name: 'name', placeholder: 'Nom' }} onChange={handleChange} />
      <CustomInput input={{ type: 'email', name: 'email', placeholder: 'Email' }} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Log