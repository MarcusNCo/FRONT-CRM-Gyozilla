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
import { Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const MyDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 240,
  },
});

export default function MenuBurger({ onCloseMenu }) {
  const [open, setOpen] = useState(false);
  const [openLaCarte, setOpenLaCarte] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickLaCarte = () => {
    setOpenLaCarte(!openLaCarte);
  };

  const handleLinkClick = () => {
    if (typeof onCloseMenu === "function") {
      onCloseMenu();
    }
    setOpen(false);
  };

  const handleTypeRepasClick = (typeRepas) => {
    handleLinkClick();
    navigate("/products", { state: { typeRepas } });
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
              marginTop: "15px",
              padding: "20px 0 10px 0",
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
              <Box
                className="link-hover"
                onClick={() => handleTypeRepasClick(1)}
              >
                <Typography variant="h9b">Nouveautés</Typography>
              </Box>
              <Box
                className="link-hover"
                onClick={() => handleTypeRepasClick(2)}
              >
                <Typography variant="h9b">Menus</Typography>
              </Box>
              <Box
                className="link-hover"
                onClick={() => handleTypeRepasClick(3)}
              >
                <Typography variant="h9b">Entrées</Typography>
              </Box>
              <Box
                className="link-hover"
                onClick={() => handleTypeRepasClick(4)}
              >
                <Typography variant="h9b">Plats</Typography>
              </Box>
              <Box
                className="link-hover"
                onClick={() => handleTypeRepasClick(5)}
              >
                <Typography variant="h9b">Desserts</Typography>
              </Box>
              <Box
                className="link-hover"
                onClick={() => handleTypeRepasClick(6)}
              >
                <Typography variant="h9b">Boissons</Typography>
              </Box>
            </List>
          </Collapse>
          <Divider />
          <Link
            to="/nosengagements"
            className="link-container"
            onClick={handleLinkClick}
          >
            <Box
              className="link-hover"
              sx={{
                display: "flex",
                color: "#739B94",
                borderBottom: "1px solid #739B94",
                padding: "20px 0 5px 0",
              }}
            >
              <CoPresentIcon
                style={{ marginRight: "20px", marginLeft: "20px" }}
              />
              <Typography variant="h9g">Nos engagements</Typography>
            </Box>
          </Link>
          <Divider />
          <Link
            to="/contact"
            className="link-container"
            onClick={handleLinkClick}
          >
            <Box
              className="link-hover"
              sx={{
                display: "flex",
                color: "#739B94",
                borderBottom: "1px solid #739B94",
                padding: "20px 0 5px 0",
              }}
            >
              <ContactMailIcon
                style={{ marginRight: "20px", marginLeft: "20px" }}
              />
              <Typography variant="h9g">Contactez-nous</Typography>
            </Box>
          </Link>
          <Divider />
          <Link to="/find" className="link-container" onClick={handleLinkClick}>
            <Box
              className="link-hover"
              sx={{
                display: "flex",
                color: "#739B94",
                borderBottom: "1px solid #739B94",
                padding: "20px 0 5px 0",
              }}
            >
              <PinDropIcon
                style={{ marginRight: "20px", marginLeft: "20px" }}
              />
              <Typography variant="h9g">Trouver un resto</Typography>
            </Box>
          </Link>
        </List>
      </MyDrawer>
    </React.Fragment>
  );
}
