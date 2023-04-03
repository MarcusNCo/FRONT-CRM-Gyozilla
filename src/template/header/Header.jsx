import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "./../../assets/images/gyozillalog.png";
import mobileLogo from "./../../assets/images/gyozillalogo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import RamenDiningIcon from '@mui/icons-material/RamenDining'
// import CoPresentIcon from '@mui/icons-material/CoPresent'
// import PinDropIcon from '@mui/icons-material/PinDrop'
// import ContactMailIcon from '@mui/icons-material/ContactMail'
import MenuBurger from "../../components/burger/MenuBurger";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  // Drawer,
  // List,
  // ListItem,
  // ListItemText,
  // Divider,
} from "@mui/material";
import CustomInput from "../../components/input/CustomInput";
import { Link } from "react-router-dom";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [mobileVersion, setMobileVersion] = useState(false);
  console.log("openDrawer", openDrawer, "mobileversion", mobileVersion);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
    setMobileVersion(true);
  };

  useEffect(() => {
    if (openDrawer) {
      setMobileVersion(true);
    }

    return () => {
      setMobileVersion(false);
    };
  }, [openDrawer]);

  const [auth, setAuth] = useState(true);
  // const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const list = () => (
  //   <List>
  //     <a href="/" onClick={null}>
  //       <ListItem onClick={toggleDrawer(false)}>
  //         <RamenDiningIcon />
  //         <ListItemText primary="La carte" style={{ marginLeft: '10px' }} />
  //       </ListItem>
  //     </a>
  //     <Divider />
  //     <a href="/" onClick={null}>
  //       <ListItem onClick={toggleDrawer(false)}>
  //         <CoPresentIcon />
  //         <ListItemText
  //           primary="Nos engagements"
  //           style={{ marginLeft: '10px' }}
  //         />
  //       </ListItem>
  //     </a>
  //     <Divider />
  //     <a href="/" onClick={null}>
  //       <ListItem onClick={toggleDrawer(false)}>
  //         <ContactMailIcon />
  //         <ListItemText
  //           primary="Contactez-nous"
  //           style={{ marginLeft: '10px' }}
  //         />
  //       </ListItem>
  //     </a>
  //     <Divider />
  //     <a href="/" onClick={null}>
  //       <ListItem onClick={toggleDrawer(false)}>
  //         <PinDropIcon />
  //         <ListItemText
  //           primary="Trouver un resto"
  //           style={{ marginLeft: '10px' }}
  //         />
  //       </ListItem>
  //     </a>
  //     <Divider />
  //   </List>
  // )
  const [valueInput, setvalueInput] = useState("");
  const handleChangeInput = (e) => {
    console.log(e);
    setvalueInput(e.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <header>
        {/* // -------------------- Mobile version -------------------------- */}
        <div className="headerMobile">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#739B94" }}>
              <Toolbar>
                <MenuBurger />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></Typography>
                {auth && (
                  <div style={{ display: "flex" }}>
                    <IconButton
                      size="large"
                      aria-label="shop of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    {/* <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu> */}
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                      </MenuItem>
                      <Divider />
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </div>
                )}
              </Toolbar>
            </AppBar>
            <img
              src={mobileLogo}
              alt="Logo de Gyozilla"
              style={{
                position: "absolute",
                width: "80px",
                left: "50%",
                top: "10px",
                transform: "translate(-50%)",
              }}
            />
          </Box>
        </div>
        {/* // ----------------------- Web version -------------------------- */}
        <div className="headerWeb">
          <div className="header-left">
            <a id="gyozilla" href="#home">
              <img src={Logo} alt="Logo de Gyozilla" />
            </a>
            <Link className="menu" to="/products">
              La carte
            </Link>
            <Link className="menu" to="/nosengagements">
              Nos engagements
            </Link>
            <Link className="menu" to="/contact">
              Contactez-nous
            </Link>
          </div>
          <div className="containSearch">
            <CustomInput
              htmlFor="toto"
              id="toto"
              variant="standard"
              label="Que cherchez-vous"
              onChange={handleChangeInput}
              value={valueInput}
            />
          </div>
          <div className="header-right">
            <a className="containIcon" href="/" onClick={null}>
              <LocationOnIcon
                className="logIcon"
                style={{ fontSize: 35, color: "#739B94" }}
              />
            </a>
            <a className="containIcon" href="/" onClick={null}>
              <ShoppingCartIcon
                className="logIcon"
                style={{ fontSize: 35, color: "#739B94" }}
              />
            </a>
            <a className="containIcon" href="/" onClick={null}>
              <AccountCircleIcon
                className="logIcon"
                style={{ fontSize: 35, color: "#739B94" }}
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
