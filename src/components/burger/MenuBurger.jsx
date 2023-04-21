import * as React from "react";
import "./MenuBurger.css";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Divider } from "@mui/material";
import { border } from "@mui/system";
import { Link } from "react-router-dom";

const MyDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 240,
  },
});

export default function MenuBurger() {
  const [open, setOpen] = useState(false);
  const [openLaCarte, setOpenLaCarte] = useState(false);
  const [openNosEngagements, setOpenNosEngagements] = useState(false);
  const [openContactezNous, setOpenContactezNous] = useState(false);
  const [openTrouverUnResto, setOpenTrouverUnResto] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickLaCarte = () => {
    setOpenLaCarte(!openLaCarte);
  };

  const handleClickNosEngagements = () => {
    setOpenNosEngagements(!openNosEngagements);
  };

  const handleClickContactezNous = () => {
    setOpenContactezNous(!openContactezNous);
  };

  const handleClickTrouverUnResto = () => {
    setOpenTrouverUnResto(!openTrouverUnResto);
  };

  return (
    <React.Fragment>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon
          sx={{
            width: "32px",
            height: "32px",
          }}
          className="MenuIcon"
        />
      </IconButton>
      <MyDrawer anchor="left" open={open} onClose={handleClick}>
        <List
          sx={{ width: 240 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            sx={{
              color: "#739B94",
              display: "flex",
              marginTop: "25px",
              borderBottom: "1px solid #739B94",
            }}
            onClick={handleClickLaCarte}
          >
            <RamenDiningIcon
              style={{ marginRight: "20px", marginLeft: "20px" }}
            />
            <ListItemText primary="La carte" sx={{ marginLeft: "10px" }} />
          </ListItemButton>
          <Collapse in={openLaCarte} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Nouveautés" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Entrées" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Plats" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Menus" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Boissons" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Desserts" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          <ListItemButton
            sx={{
              color: "#739B94",
              display: "flex",
              marginTop: "25px",
              borderBottom: "1px solid #739B94",
            }}
            onClick={handleClickNosEngagements}
          >
            <CoPresentIcon
              style={{ marginRight: "20px", marginLeft: "20px" }}
            />
            <ListItemText
              primary="Nos engagements"
              sx={{ marginLeft: "10px" }}
            />
          </ListItemButton>
          <Collapse in={openNosEngagements} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Accueil" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Les équipes" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="La qualité" />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider />
          <ListItemButton
            sx={{
              color: "#739B94",
              display: "flex",
              marginTop: "25px",
              borderBottom: "1px solid #739B94",
            }}
            onClick={handleClickContactezNous}
          >
            <ContactMailIcon
              style={{ marginRight: "20px", marginLeft: "20px" }}
            />
            <ListItemText
              primary="Contactez-nous"
              sx={{ marginLeft: "10px" }}
            />
            {/* <Link to="Contactez-nous" style={{ color: "#5F8D85" }} /> */}
          </ListItemButton>
          <Divider />
          <ListItemButton
            sx={{
              color: "#739B94",
              display: "flex",
              marginTop: "25px",
            }}
            onClick={handleClickTrouverUnResto}
          >
            <PinDropIcon style={{ marginRight: "20px", marginLeft: "20px" }} />
            <ListItemText
              primary="Trouver un resto"
              sx={{ marginLeft: "10px" }}
            />
          </ListItemButton>
        </List>
      </MyDrawer>
    </React.Fragment>
  );
}
