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
  border,
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
        backgroundPosition: "center center",
        zIndex: zIndex,
        border: "none",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
      }}
    >
      <CardContent
        style={{
          width: widthContent,
          height: heightContent,
          backgroundColor: backgroundColorContent,
          display: "flex",
          flexDirection: "column",
          padding: "0",
        }}
      >
        <Box
          sx={{
            backgroundColor: "black",
            padding: "5px 5px 5px 10px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5px 5px 0 0",
            width: "100%",
          }}
        >
          <Typography variant={"h7"}>{title}</Typography>
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
