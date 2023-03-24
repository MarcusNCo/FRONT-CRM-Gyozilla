import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import CustomButton from '../button/CustomButton'
import './CustomCard.css'
// import { string } from 'yargs'
// import { useTheme } from '@mui/material'

const CustomCard = ({
  id,
  title,
  description,
  image,
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
  variantButton,
}) => {
  let dbImage = ''
  if (image !== undefined) {
    dbImage = require('../../images/products/' + image)
  }

  return (
    <Card
      id={id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justifyContentCard,
        alignItems: alignItemsCard,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        backgroundImage: `url(${dbImage})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
      }}
    >
      <CardContent
        style={{
          width: widthContent,
          height: heightContent,
          backgroundColor: backgroundColorContent,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant={'h6'}>{title}</Typography>
        <Typography variant={'p'}>{description}</Typography>
      </CardContent>
      <CardActions
        style={{
          width: widthActions,
          height: heightActions,
          backgroundColor: backgroundColorActions,
        }}
      >
        <CustomButton
          onClick={onButtonCardClick}
          variant={variantButton}
          text={buttonCardText}
        />
      </CardActions>
    </Card>
  )
}

export default CustomCard
