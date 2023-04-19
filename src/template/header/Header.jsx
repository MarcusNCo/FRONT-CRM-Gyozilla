import React, { useEffect, useState } from "react";
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
import Badge from "@mui/material/Badge";
import Basket from "../../components/basket/Basket";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const [auth, setAuth] = useState(true);
  const [valueInput, setvalueInput] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
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

  const [basketOpen, setBasketOpen] = useState(false);

  const handleBasketOpen = (e) => {
    e.preventDefault();
    setBasketOpen(e.currentTarget);
  };

  const handleBasketClose = () => {
    setBasketOpen(false);
  };

  const [cartItems, setCartItems] = useState([]);

  const addDummyProducts = () => {
    const dummyProducts = [
      { id: 1, name: "Nems au poulet", price: 6.0, quantity: 2 },
      { id: 2, name: "Crevettes sautées", price: 12.0, quantity: 1 },
      { id: 3, name: "Sunday litchi", price: 3.5, quantity: 1 },
    ];

    setCartItems(dummyProducts);
  };

  useEffect(() => {
    addDummyProducts();
  }, []);

  const incrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
                  <Box style={{ display: "flex" }}>
                    <Badge
                      badgeContent={4}
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
                        aria-label="basket of current user"
                        aria-controls="menu-basket"
                        aria-haspopup="true"
                        onClick={handleBasketOpen}
                      />
                    </Badge>

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
            "@media (max-width: 992px)": {
              display: "none",
            },
            overflow: "hidden",
            padding: "10px",
            justifyContent: "space-between",
            boxShadow: "0 0 .4em black",
          }}
        >
          <Box className="header-left">
            <a id="gyozilla" href="/">
              <img src={Logo} alt="Logo de Gyozilla" />
            </a>
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
            <a className="containIcon" href="/" onClick={null}>
              <LocationOnIcon
                className="logIcon"
                style={{ fontSize: 35, color: "#739B94" }}
              />
            </a>
            <Badge badgeContent={4} variant="standard">
              <ShoppingCartIcon
                style={{
                  fontSize: 35,
                  color: "#739B94",
                  cursor: "pointer",
                }}
                aria-label="basket of current user"
                aria-controls="menu-basket"
                aria-haspopup="true"
                onClick={handleBasketOpen}
              />
            </Badge>
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
        </Menu>
        {/* // ------------ Panier version desktop et mobile --------------- */}
        <Menu
          anchorEl={basketOpen}
          id="menu-basket"
          open={Boolean(basketOpen)}
          onClose={handleBasketClose}
          onClick={handleBasketClose}
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
                filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))",
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
          <Basket
            items={cartItems}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
          />
        </Menu>
      </header>
    </>
  );
};

export default Header;
