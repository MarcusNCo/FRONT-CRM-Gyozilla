import React, { useContext, useEffect, useState } from "react";
import { SelectButton } from "primereact/selectbutton";

import { Divider } from "primereact/divider";

import "./Menu.css";
import { getAllProductByMenu } from "../../utils/api-call/getAllProductByMenu";
import { Box, useTheme } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/card/CustomCard";
import { Radio, Typography } from "@mui/material";
import CustomButton from "../../components/button/CustomButton";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { ToastContainer, toast } from "react-toastify";
import CartContext from "../../utils/context/CartContext";

const Menu = () => {
  const [productsByMenu, setProductsByMenu] = useState([]);
  const [error, setError] = useState(null);
  const [selectedTypeMenu, setSelectedTypeMenu] = useState(1);
  const [selectedStarter, setSelectedStarter] = useState(null);
  const [selectedMain, setSelectedMain] = useState(null);
  const [selectedDessert, setSelectedDessert] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [displayBackButton, setDisplayBackButton] = useState(true);
  const { updateCartItems } = useContext(CartContext);

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

  const MENU_PRICES = {
    MENU_ENFANT: 8,
    MENU_PETIT_PRIX: 12,
    MENU_DECOUVERTE: 18,
    MENU_GOURMAND: 25,
  };

  const navigate = useNavigate();
  const theme = useTheme();

  const selectMenuOptions = [
    { id: 1, label: "Menu Enfant", value: 1, image: "Menu-Enfant" },
    { id: 2, label: "Menu Petit Prix", value: 2, image: "Menu-Petit-Prix" },
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

  const labelTemplate = (option) => {
    return <p>{option.label}</p>;
  };

  const handleSelectMenu = (e) => {
    setSelectedTypeMenu(e.value);
  };

  const displayCard = (items, category) => {
    let setSelected;
    if (category === "Entrées") {
      setSelected = setSelectedStarter;
    } else if (category === "Plats") {
      setSelected = setSelectedMain;
    } else if (category === "Desserts") {
      setSelected = setSelectedDessert;
    } else if (category === "Boissons") {
      setSelected = setSelectedDrink;
    }

    return items.map((item) => {
      let selectedItem;
      if (category === "Entrées") {
        selectedItem = selectedStarter;
      } else if (category === "Plats") {
        selectedItem = selectedMain;
      } else if (category === "Desserts") {
        selectedItem = selectedDessert;
      } else if (category === "Boissons") {
        selectedItem = selectedDrink;
      }

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
            <Radio
              sx={{ color: "##CDE8E7", "&.Mui-checked": { color: "#F8A500" } }}
              checked={selectedItem === item.id}
              onChange={(e) => {
                setSelected(item.id);
              }}
            />
          </div>
        </Box>
      );
    });
  };

  const addToLocalStorage = () => {
    const foundStarter = productsByMenu.find(
      (product) => product.id === selectedStarter
    );
    const foundMain = productsByMenu.find(
      (product) => product.id === selectedMain
    );
    const foundDessert = productsByMenu.find(
      (product) => product.id === selectedDessert
    );
    const foundDrink = productsByMenu.find(
      (product) => product.id === selectedDrink
    );
  
    if (!foundStarter || !foundMain || !foundDessert || !foundDrink) {
      toast.error('Veuillez sélectionner un produit de chaque type.', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  
    const menuName = selectMenuOptions.find(
      (option) => option.id === selectedTypeMenu
    )?.label;

    const menuImage = selectMenuOptions.find(
      (option) => option.id === selectedTypeMenu
    )?.image;

    const menuPrice = MENU_PRICES[menuName.replace(' ', '_').toUpperCase()];
    const menu_id = Date.now()

    const menu = {
      id: menu_id,
      name: menuName,
      image: "menu/" + menuImage + ".jpg",
      price: `${menuPrice}`,
      quantity: 1,

      products: [
        foundStarter,
        foundMain,
        foundDessert,
        foundDrink,
      ].filter(Boolean).map(product => ({ ...product, quantity: 1 })),
    };
  
    const cart = JSON.parse(window.localStorage.getItem("cart")) || {};
  
    if (cart[menu_id]) {
      cart[menu_id].produits.forEach(product => product.quantity += 1);
    } else {
      cart[menu_id] = menu;
    }
  
    window.localStorage.setItem("cart", JSON.stringify(cart));
    updateCartItems();
  
    toast.success(`Le ${menuName} a bien été ajouté au panier.`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
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
          [theme.breakpoints.down("md")]: {
            marginTop: "50px",
            textAlign: "center",
            fontSize: "1.6rem",
          },
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
                    (menu) => menu.id_product_categories === 1
                  ),
                  "Entrées"
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
                    (menu) => menu.id_product_categories === 2
                  ),
                  "Plats"
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
                    (menu) => menu.id_product_categories === 3
                  ),
                  "Desserts"
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
                    (menu) => menu.id_product_categories === 4
                  ),
                  "Boissons"
                )}
              </Box>
            </Box>
          </>
        ) : (
          "il n'y a pas de produits"
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CustomButton
          text="Valider"
          height="40px"
          width="120px"
          padding="0 20px 0 20px"
          margin="32px"
          onClick={addToLocalStorage}
        ></CustomButton>
      </Box>

      {/* bouton retour en version desktop */}
      {displayBackButton && (
        <Box
          sx={{
            position: "fixed",
            bottom: "10px",
            left: "50px",
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

      <ToastContainer position="top-right" />
    </>
  );
};
export default Menu;
