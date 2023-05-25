import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  HomeOutlined,
  InfoOutlined,
} from "@mui/icons-material";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const CustomListItem = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <List>
        <ListItem button onClick={handleClose}>
          <ListItemIcon>
            <HomeOutlined />
          </ListItemIcon>
          <ListItemText primary="Accueil" />
        </ListItem>
        <ListItem button onClick={handleClose}>
          <ListItemIcon>
            <InfoOutlined />
          </ListItemIcon>
          <ListItemText primary="À propos" />
        </ListItem>
        <ListItem button onClick={handleClose}>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </>
  );
};

export default CustomListItem;
