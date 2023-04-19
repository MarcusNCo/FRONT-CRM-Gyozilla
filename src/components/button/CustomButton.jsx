import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({
  onClick,
  variant,
  text,
  color,
  style,
  width,
  height,
  fontSize,
  startIcon,
  backgroundColor,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      startIcon={startIcon}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        width: width,
        height: height,
        fontSize: fontSize,
      }}
    >
      {text}
    </Button>
  )
}

export default CustomButton
