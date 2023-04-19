import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Menu,
  Home,
  Info,
  Contact,
  HomeOutlined,
  InfoOutlined,
} from "@mui/icons-material";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const CustomListItem = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(true);
  };

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
