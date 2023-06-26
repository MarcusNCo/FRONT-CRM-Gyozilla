import { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Account from "./Account";
import Fidelity from "./Fidelity";
import Order from "./Order";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CustomButton from "../../components/button/CustomButton";

const Profile = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [displayBackButton, setDisplayBackButton] = useState(true);
  const profileTab = location.state?.profile;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuItemClick = (index) => {
    setSelectedMenuItemIndex(index);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const maxScrollPosition =
        document.documentElement.scrollHeight - window.innerHeight;
      if (window.pageYOffset > maxScrollPosition - 200) {
        setDisplayBackButton(false);
      } else {
        setDisplayBackButton(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      text: "Mon compte",
      icon: <AccountCircleIcon />,
      content: <Account />,
    },
    {
      text: "Ma fidelité",
      icon: <LoyaltyIcon />,
      content: <Fidelity />,
    },
    {
      text: "Mes commandes",
      icon: <ShoppingBasketIcon />,
      content: <Order />,
    },
  ];

  const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(
    profileTab || 0
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#739b94",
          padding: "40px 8px 12px 8px",
          [theme.breakpoints.up("sm")]: {
            display: "none",
          },
        }}
      >
        {menuItems.map((item, index) => (
          <CustomButton
            key={index}
            onClick={() => {
              handleMenuItemClick(index);
              setMobileMenuOpen(false);
            }}
            variant="contained"
            margin="6px"
            text={item.text}
          />
        ))}
      </Box>
      <div className="account">
        <Box
          sx={{
            width: "20%",
            minHeight: "calc(100vh - 71px)",
            [theme.breakpoints.down("sm")]: {
              minHeight: "calc(100vh - 56px)",
              display: "none",
            },
            backgroundColor: "#739b94",
            zIndex: 0,
          }}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                sx={{
                  color: "white",
                  fontWeight: "600",
                  "&:hover": {
                    textDecoration: "none",
                  },
                  backgroundColor:
                    index === selectedMenuItemIndex
                      ? "rgb(248, 165, 0.4)"
                      : "transparent",
                }}
                key={index}
                onClick={() => handleMenuItemClick(index)}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      color: "white",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "white",
                    }}
                    primary={
                      <Typography
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {item.text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            width: "100%",
            [theme.breakpoints.up("md")]: {
              width: "80%",
              minHeight: "calc(100vh - 71px)",
            },
            [theme.breakpoints.down("sm")]: {
              marginTop: "0",
              minHeight: "calc(100vh - 56px - 134px)",
            },
          }}
        >
          {menuItems[selectedMenuItemIndex].content}
        </Box>
      </div>
      {displayBackButton && (
        <Box
          sx={{
            position: "fixed",
            bottom: "10px",
            left: "25px",
            "@media (max-width:700px)": {
              display: "none",
            },
          }}
        >
          <CustomButton
            text="Retour"
            height="40px"
            width="120px"
            padding="0 20px 0 20px"
            margin="32px"
            startIcon={<KeyboardReturnIcon />}
            onClick={handleBackClick}
          ></CustomButton>
        </Box>
      )}
    </>
  );
};

export default Profile;
