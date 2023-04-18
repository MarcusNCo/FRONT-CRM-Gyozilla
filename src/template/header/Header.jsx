import React, { useState } from "react";
import "./Header.css";
import Logo from "../../images/gyozillalog.png";
import mobileLogo from "../../images/gyozillalogo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import { Box, useTheme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuBurger from "../../components/burger/MenuBurger";
import { Divider, IconButton } from "@mui/material";
import CustomInput from "../../components/input/CustomInput";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const Header = () => {
  const [auth, setAuth] = useState(true);
  const [valueInput, setvalueInput] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChangeInput = (e) => {
    console.log(e);
    setvalueInput(e.target.value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header>
        {/* // -------------------- Mobile version -------------------------- */}
        <Box
          sx={{
            display: "none",
            "@media (max-width: 992px)": {
              display: "flex",
            },
            position: "relative",
          }}
        >
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
                      aria-label="shop of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <ShoppingCartIcon
                        sx={{
                          width: "32px",
                          height: "32px",
                        }}
                      />
                    </IconButton>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle
                        sx={{
                          width: "32px",
                          height: "32px",
                        }}
                      />
                    </IconButton>
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
        </Box>
        {/* // ----------------------- Web version -------------------------- */}
        <Box
          sx={{
            display: "flex",
            "@media (max-width: 992px)": {
              display: "none",
            },
            overflow: "hidden",
            padding: "10px",
            justifyContent: "space-around",
            boxShadow: "0 0 .4em black",
          }}
        >
          <div className="header-left">
            <a id="gyozilla" href="/">
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
            <AccountCircleIcon
              className="logIcon"
              style={{
                fontSize: 35,
                color: "#739B94",
                margin: "15px",
                cursor: "pointer",
              }}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            />
          </div>
        </Box>
        {/* // ------------ Menu for desktop and mobile version --------------- */}
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
              mr: 1.5,
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
                right: 13,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
                [theme.breakpoints.down("sm")]: {
                  right: 19,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose} className="menu-item">
            <a className="menu-item-a" href="/login">
              <Logout fontSize="small" />
              <Typography
                variant="body1"
                color="initial"
                sx={{ paddingLeft: "10px" }}
              >
                Se connecter
              </Typography>
            </a>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} className="menu-item">
            <a className="menu-item-a" href="/create">
              <AppRegistrationIcon fontSize="small" />
              <Typography
                variant="body1"
                color="initial"
                sx={{ paddingLeft: "10px" }}
              >
                S'inscrire
              </Typography>
            </a>
          </MenuItem>
        </Menu>
      </header>
    </>
  );
};

export default Header;
