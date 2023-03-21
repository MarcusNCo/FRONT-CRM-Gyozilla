import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import CustomButton from '../button/CustomButton'
import { useTheme } from '@mui/material'

const CustomCard = ({
  title,
  description,
  buttonCardText,
  onButtonCardClick,
  width,
  height,
  backgroundColor,
  backgroundColorContent,
  widthContent,
  heightContent,
  heightActions,
  widthActions,
  backgroundColorActions,
  justifyContentCard,
  alignItemsCard,
  styleTitle,
  styleParagraph,
}) => {
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justifyContentCard,
        alignItems: alignItemsCard,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
      }}
    >
      <CardContent
        style={{
          width: widthContent,
          height: heightContent,
          backgroundColor: backgroundColorContent,
        }}
      >
        <Typography variant={styleTitle}>{title}</Typography>
        <Typography variant={'p'}>{description}</Typography>
      </CardContent>
      <CardActions
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          width: widthActions,
          height: heightActions,
          backgroundColor: backgroundColorActions,
        }}
      >
        <CustomButton
          onClick={onButtonCardClick}
          variant="contained"
          text={buttonCardText}
        />
      </CardActions>
    </Card>
  )
}

export default CustomCard
