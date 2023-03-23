import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import './CustomInput.css'
import { ErrorMessage } from 'formik'

const CustomInput = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const input = props
  const inputAttribute = {
    type: input.type,
    name: input.name,
    id: input.id,
    className: input.className,
    style: input.style,
    value: input.value || '',
    placeholder: input.placeholder,
    disabled: input.disabled,
    autoFocus: input.autoFocus,
    onFocus: input.onFocus,
    onBlur: input.onBlur,
    autoComplete: input.autoComplete,
    pattern: input.pattern,
    required: input.required,
    min: input.min,
    max: input.max,
    step: input.step,
    readOnly: input.readOnly,
    onChange: input.onChange,
    secure: input.secure,
    label: input.label,
    htmlFor: input.htmlFor,
    variant: input.variant,
    errors: input.errors,
  }
  return (
    // <Custominput
    // variant = 'filled' label = "Email" htmlFor = 'email' id = 'name' type= 'email'  name= 'name' color= "primary" value = {formState.name} onChange = {handleChange}
    // />
    // Voici un exemple d'importation du components. Pour un input de type password il faut ajouter l'attributs secure = 'true' !
    <FormControl variant={inputAttribute.variant}>
      <InputLabel htmlFor={inputAttribute.htmlFor}>
        {inputAttribute.label}
      </InputLabel>
      <Input
        {...inputAttribute}
        type={
          inputAttribute.type !== 'password'
            ? inputAttribute.type
            : showPassword
            ? 'text'
            : 'password'
        }
        endAdornment={
          inputAttribute.secure ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : (
            ''
          )
        }
      />
      {inputAttribute.errors ? <small>{inputAttribute.errors}</small> : null}
    </FormControl>
  )
}

export default CustomInput
