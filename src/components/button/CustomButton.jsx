import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({
  onClick,
  variant,
  text,
  color,
  style,
  backgroundColor,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {text}
    </Button>
  )
}

export default CustomButton
