import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import CustomButton from '../button/CustomButton'
// import { useTheme } from '@mui/material'

const CustomCard = ({
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

  console.log(image)

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
        <Typography variant={'h5'}>{title}</Typography>
        <Typography variant={'p'}>{description}</Typography>



        {/* <img src={require(`${image}`)} alt="nems"></img> */}
        {/* <img src={require(`../../images/products/${image}`)} alt="nems"></img> */}
        <img src=`../../images/products/${image}` alt="nems"></img>
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
