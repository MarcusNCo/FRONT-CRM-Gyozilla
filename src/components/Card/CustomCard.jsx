import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CustomButton from "../button/CustomButton";
import "./CustomCard.css";
import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
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
  backgroundSize,
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
      onClick={onButtonCardClick}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: justifyContentCard,
        alignItems: alignItemsCard,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        zIndex: zIndex,
        border: "none",
        cursor: "pointer",
        boxShadow:
          "rgba(0, 0, 0, 0.55) 15px 10px 20px 2px, rgba(0, 0, 0, 0.25) 5px 5px 20px 2px",
      }}
    >
      <CardContent
        style={{
          width: widthContent,
          height: heightContent,
          backgroundColor: backgroundColorContent,
          padding: "0",
        }}
      >
        {title && (
          <Box
            sx={{
              backgroundColor: "#5F8D85",
              opacity: "0.8",
              padding: "5px 5px 5px 10px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "5px 5px 0 0",
              width: "100%",
              height: "fit-content",
            }}
          >
            <Typography variant={"h7b"}>{title}</Typography>
          </Box>
        )}
      </CardContent>
      <CardContent
        sx={{
          flexGrow: 1,
          width: "100%",
          padding: "0",
          paddingBottom: "0 !important",
          backgroundImage: `url(${dbImage})`,
          backgroundSize: backgroundSize,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      ></CardContent>
    </Card>
  );
};

export default CustomCard;
