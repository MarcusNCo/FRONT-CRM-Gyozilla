import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({ onClick, variant, text, color, style }) => {
  return (
    <Button onClick={onClick} variant={variant} color={color} style={style}>
      {text}
    </Button>
  )
}

export default CustomButton
