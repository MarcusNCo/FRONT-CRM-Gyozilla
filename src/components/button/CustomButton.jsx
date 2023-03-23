import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({ onClick, variant, text, color }) => {
  return (
    <Button onClick={onClick} variant={variant} color={color}>
      {text}
    </Button>
  )
}

export default CustomButton
