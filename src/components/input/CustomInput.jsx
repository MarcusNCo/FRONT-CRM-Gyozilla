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

const CustomInput = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const field = props
  const fieldAttribute = {
    type: field.type,
    name: field.name,
    id: field.id,
    className: field.className,
    style: field.style,
    value: field.value || '',
    placeholder: field.placeholder,
    disabled: field.disabled,
    autoFocus: field.autoFocus,
    onFocus: field.onFocus,
    onBlur: field.onBlur,
    autoComplete: field.autoComplete,
    pattern: field.pattern,
    required: field.required,
    min: field.min,
    max: field.max,
    step: field.step,
    readOnly: field.readOnly,
    onChange: field.onChange,
    secure: field.secure,
    label: field.label,
    htmlFor: field.htmlFor,
    variant: field.variant,
  }
  return (
    // <Customfield
    // variant = 'filled' label = "Email" htmlFor = 'email' id = 'name' type= 'email'  name= 'name' color= "primary" value = {formState.name} onChange = {handleChange}
    // />
    // Voici un exemple d'importation du components. Pour un input de type password il faut ajouter l'attributs secure = 'true' !
    <FormControl variant={fieldAttribute.variant}>
      <InputLabel htmlFor={fieldAttribute.htmlFor}>
        {fieldAttribute.label}
      </InputLabel>
      <Input
        {...fieldAttribute}
        type={
          fieldAttribute.type != 'password'
            ? fieldAttribute.type
            : showPassword
            ? 'text'
            : 'password'
        }
        endAdornment={
          fieldAttribute.secure ? (
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
    </FormControl>
  )
}

export default CustomInput
