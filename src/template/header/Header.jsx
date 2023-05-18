import React, { useContext, useState } from "react";
import "./Header.css";
import Logo from "../../images/logoHeader.png";
import mobileLogo from "../../images/gyozillalogo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AppBar from "@mui/material/AppBar";
import { Box, useTheme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuBurger from "../../components/burger/MenuBurger";
import { Divider, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Badge from "@mui/material/Badge";
import Cart from "../../components/cart/Cart";
import useMediaQuery from "@mui/material/useMediaQuery";
import { UserContext } from "../../utils/context/UserContext";
import CartContext from "../../utils/context/CartContext";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [auth, setAuth] = useState(true);
  const [cartOpen, setCartOpen] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const { isLogged } = useContext(UserContext);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCartOpen = (e) => {
    e.preventDefault();
    setCartOpen(e.currentTarget);
  };

  const handleCartClose = (e) => {
    e.preventDefault();
    setCartOpen(null);
  };

  const closeMenu = () => {
    // Ferme le menu ici
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate(-1);
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
                <MenuBurger closeDrawer={closeMenu} />
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
                  <Box style={{ display: "flex" }}>
                    {location.pathname !== "/order" && (
                      <Badge
                        badgeContent={cartItems.length}
                        variant="standard"
                        overlap="circular"
                        sx={{
                          width: "48px",
                          height: "48px",
                          padding: "8px",
                          marginRight: "8px",
                        }}
                      >
                        <ShoppingCartIcon
                          sx={{
                            width: "32px",
                            height: "32px",
                          }}
                          color="inherit"
                          aria-label="cart of current user"
                          aria-controls={null}
                          aria-haspopup="true"
                          onClick={handleCartOpen}
                        />
                      </Badge>
                    )}
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
                  </Box>
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
            zIndex: 1000,
            "@media (max-width: 992px)": {
              display: "none",
            },
            overflow: "hidden",
            justifyContent: "space-between",
            boxShadow: "0 0 .4em black",
          }}
        >
          <Box className="header-left">
            <Link id="gyozilla" to={"/"}>
              <img src={Logo} alt="Logo de Gyozilla" />
            </Link>
            <Link className="menu" to="/products" style={{ padding: "0" }}>
              La carte
            </Link>
            <Link
              className="menu"
              to="/nosengagements"
              style={{ padding: "0" }}
            >
              Nos engagements
            </Link>
            <Link className="menu" to="/contact" style={{ padding: "0" }}>
              Contactez-nous
            </Link>
          </Box>
          <Box className="header-right">
            <Link className="containIcon" to={"/find"} onClick={null}>
              <LocationOnIcon
                className="logIcon"
                style={{ fontSize: 35, color: "#739B94" }}
              />
            </Link>
            {location.pathname !== "/order" && (
              <Badge badgeContent={cartItems.length} variant="standard">
                <ShoppingCartIcon
                  style={{
                    fontSize: 35,
                    color: "#739B94",
                    cursor: "pointer",
                  }}
                  aria-label="cart of current user"
                  aria-controls={null}
                  aria-haspopup="true"
                  onClick={handleCartOpen}
                />
              </Badge>
            )}
            <AccountCircleIcon
              style={{
                fontSize: 35,
                color: "#739B94",
                margin: "15px",
                cursor: "pointer",
              }}
              aria-label="account of current user"
              aria-controls="account-menu"
              aria-haspopup="true"
              onClick={handleMenu}
            />
          </Box>
        </Box>
        {/* // ------------ Menu utilisateur version desktop et mobile --------------- */}
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mr: 1.5,
              mb: 10,
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
                right: 12,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))",
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
            {isLogged ? (
              <a className="menu-item-a" href="/profile">
                <Logout fontSize="small" />
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ paddingLeft: "10px" }}
                >
                  Mon compte
                </Typography>
              </a>
            ) : (
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
            )}
          </MenuItem>
          {isLogged ? (
            <Divider
              sx={{
                display: "none",
              }}
            />
          ) : (
            <Divider />
          )}

          {isLogged ? (
            <MenuItem onClick={handleLogout} className="menu-item">
              <a className="menu-item-a" href="/login">
                <PowerSettingsNewIcon fontSize="small" />
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ paddingLeft: "10px" }}
                >
                  Se déconnecter
                </Typography>
              </a>
            </MenuItem>
          ) : (
            <MenuItem onClick={handleClose} className="menu-item">
              <a className="menu-item-a" href="/sign-in">
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
          )}
        </Menu>
        {/* // ------------ Panier version desktop et mobile --------------- */}
        <Menu
          anchorEl={cartOpen}
          onClick={handleCartClose}
          id="menu-cart"
          open={Boolean(cartOpen)}
          PaperProps={{
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))",
              mt: 1.5,
              "& .MuiSvgIcon-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                color: "#5F8D85",
              },

              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 12,
                width: 12,
                height: 12,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
                [theme.breakpoints.down("sm")]: {
                  right: 75,
                },
              },
            },
          }}
          transformOrigin={{
            horizontal: isMobile ? "center" : "right",
            vertical: "top",
          }}
          anchorOrigin={{
            horizontal: isMobile ? "center" : "right",
            vertical: "bottom",
          }}
        >
          <Cart />
        </Menu>
      </header>
    </>
  );
};

export default Header;
