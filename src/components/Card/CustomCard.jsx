import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CustomButton from "../button/CustomButton";
import "./CustomCard.css";
import { Box } from "@mui/system";
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
  zIndex,
  backgroundPosition,
}) => {
  let dbImage = "";
  if (image !== undefined) {
    dbImage = require("../../images/" + image);
  }

  return (
    <Card
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: justifyContentCard,
        alignItems: alignItemsCard,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        backgroundImage: `url(${dbImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: backgroundPosition,
        zIndex: zIndex,
      }}
    >
      <CardContent
        style={{
          width: widthContent,
          height: heightContent,
          backgroundColor: backgroundColorContent,
          display: "flex",
          flexDirection: "column",
          padding: "0 20px 0 0",
        }}
      >
        <Box
          sx={{
            backgroundColor: "black",
            padding: "5px 15px 5px 15px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "0 0 5px 0",
            width: "fit-content",
          }}
        >
          <Typography variant={"hbox"}>{title}</Typography>
          <Typography variant={"p"}>{description}</Typography>
        </Box>
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
  );
};

export default CustomCard;
