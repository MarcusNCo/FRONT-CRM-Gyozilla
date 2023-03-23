import React from 'react'
import CustomForm from '../../components/form/CustomForm'

const Log = () => {
  const fields = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      id: 'email',
      variant: 'standard'
  },
    {
      label: 'Mot de passe',
      name: 'password',
      type: 'password',
      id: 'password',
      secure: 'true',
      variant: 'standard'
  },
    {
      label: 'Nom',
      name: 'lastname',
      type: 'lastname',
      id: 'lastname',
      variant: 'standard'
  },
  ]
  
    return (
      <>
        <div className="log">
          <CustomForm fields={fields}/>
        </div>
      </>
      )
}

export default Log