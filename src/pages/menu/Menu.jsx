import React, { useEffect, useState } from "react";
import { SelectButton } from "primereact/selectbutton";

import { Divider } from "primereact/divider";

import "./Menu.css";
import { getAllProductByMenu } from "../../utils/api-call/getAllProductByMenu";
import { Box, useTheme } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import CustomCard from "../../components/card/CustomCard";
import { Card, Checkbox, Typography } from "@mui/material";
import CustomButton from "../../components/button/CustomButton";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const Menu = () => {
  const [value, setValue] = useState(null);
  const [productsByMenu, setProductsByMenu] = useState([]);
  const [error, setError] = useState(null);
  const [selectedTypeMenu, setSelectedTypeMenu] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [displayBackButton, setDisplayBackButton] = useState(true);

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

  const TYPE_MENU = {
    MENU_ENFANTS: 1,
    MENU_PETIT_PRIX: 2,
    MENU_DECOUVERTE: 3,
    MENU_GOURMAND: 4,
  };

  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const selectMenuOptions = [
    { id: 1, label: "Menu Enfant", value: 1, image: "Menu-Enfants" },
    { id: 2, label: "Menu Petit Prix", value: 2, image: "Menu-Petits-Prix" },
    { id: 3, label: "Menu Decouverte", value: 3, image: "Menu-Decouverte" },
    { id: 4, label: "Menu Gourmand", value: 4, image: "Menu-Gourmand" },
  ];
  useEffect(() => {
    getAllProductByMenu(selectedTypeMenu)
      .then((res) => {
        setProductsByMenu(res.data.data);
        setError(null);
      })
      .catch((error) => {
        setProductsByMenu([]);
        setError(error);
      });
  }, [selectedTypeMenu]);

  const filteredMenu =
    productsByMenu.length > 0
      ? productsByMenu.filter((productByMenu) => {
          if (selectMenuOptions === null || selectMenuOptions === 0) {
            return true;
          } else if (selectMenuOptions === 1) {
            return productByMenu.productMenu.id === TYPE_MENU.MENU_ENFANTS;
          } else if (selectMenuOptions === 2) {
            return productByMenu.productMenu.id === TYPE_MENU.MENU_PETIT_PRIX;
          } else if (selectMenuOptions === 3) {
            return productByMenu.productMenu.id === TYPE_MENU.MENU_DECOUVERTE;
          } else if (selectMenuOptions === 4) {
            return productByMenu.productMenu.id === TYPE_MENU.MENU_GOURMAND;
          } else {
            return null;
          }
        })
      : null;

  const labelTemplate = (option) => {
    return <p>{option.label}</p>;
  };

  const handleSelectMenu = (e) => {
    setSelectedTypeMenu(e.value);
  };

  const handleSelectedProducts = () => {
    const selected = productsByMenu.filter((product) =>
      selectedProducts.includes(product.id)
    );
    console.log(selected);
  };

  const displayCard = (item) => {
    return item.map((item) => {
      return (
        <Box key={item.id} style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CustomCard
              id={item.id}
              description={item.description}
              image={item.image}
              buttonCardText="Details"
              variantButton={"contained"}
              width="200px"
              height="200px"
              title={item.name}
              backgroundSize="contain"
            />
            <Checkbox
              sx={{ color: "##CDE8E7", "&.Mui-checked": { color: "#F8A500" } }}
              checked={selectedProducts.includes(item.id)}
              onChange={(e) => {
                if (e.target.checked) {
                  // add product id to selectedProducts array
                  setSelectedProducts([...selectedProducts, item.id]);
                } else {
                  // remove product id from selectedProducts array
                  setSelectedProducts(
                    selectedProducts.filter((id) => id !== item.id)
                  );
                }
              }}
            />
          </div>
        </Box>
      );
    });
  };

  return (
    <>
      <Typography
        sx={{
          marginTop: "10px",
          fontSize: "2rem",
          color: "black",
          alignSelf: "center",
        }}
      >
        Selectionne ton type de menu et choisis ton entrée, plat, dessert et
        boisson
      </Typography>
      <div className="flex justify-content-center mt-5 divSelectMenu">
        <SelectButton
          value={selectedTypeMenu}
          onChange={handleSelectMenu}
          itemTemplate={labelTemplate}
          optionLabel="value"
          options={selectMenuOptions}
          className="selectMenu"
        />
      </div>
      <Box>
        {productsByMenu?.length > 0 ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "30px",
              }}
            >
              <Divider align="center" style={{ marginBottom: "0px" }}>
                <b
                  style={{
                    color: "#F8A500",
                    fontSize: "2rem",
                  }}
                >
                  Entrées
                </b>
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                {displayCard(
                  productsByMenu.filter(
                    (productMenu) => productMenu.id_product_categories == 1
                  )
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "30px",
              }}
            >
              <Divider align="center" style={{ marginBottom: "0px" }}>
                <b
                  style={{
                    color: "#F8A500",
                    fontSize: "2rem",
                  }}
                >
                  Plats
                </b>
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                {displayCard(
                  productsByMenu.filter(
                    (productMenu) => productMenu.id_product_categories == 2
                  )
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "30px",
              }}
            >
              <Divider align="center" style={{ marginBottom: "0px" }}>
                <b
                  style={{
                    color: "#F8A500",
                    fontSize: "2rem",
                  }}
                >
                  Desserts
                </b>
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                {displayCard(
                  productsByMenu.filter(
                    (productMenu) => productMenu.id_product_categories == 3
                  )
                )}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "30px",
              }}
            >
              <Divider align="center" style={{ marginBottom: "0px" }}>
                <b
                  style={{
                    color: "#F8A500",
                    fontSize: "2rem",
                  }}
                >
                  Boissons
                </b>
              </Divider>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              >
                {displayCard(
                  productsByMenu.filter(
                    (productMenu) => productMenu.id_product_categories == 4
                  )
                )}
              </Box>
            </Box>
          </>
        ) : (
          "il n'y a pas de produits"
        )}
      </Box>

      {/* bouton retour en version desktop */}
      {displayBackButton && (
        <Box
          sx={{
            position: "fixed",
            bottom: "10px",
            left: "50px",
            [theme.breakpoints.down("sm")]: {
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
export default Menu;
