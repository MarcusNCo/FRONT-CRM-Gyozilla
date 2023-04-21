import React, { useEffect, useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import "./Menu.css";
import { getAllProductByMenu } from "../../utils/api-call/getAllProductByMenu";
import { Box, useTheme } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import CustomCard from "../../components/card/CustomCard";
import { Card } from "@mui/material";

const Menu = () => {
  const [value, setValue] = useState(null);
  const [productsByMenu, setProductsByMenu] = useState([]);
  const [error, setError] = useState(null);
  const [selectedTypeMenu, setSelectedTypeMenu] = useState(1);

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
    { id: 1, label: "Menu Enfant", value: 1 },
    { id: 2, label: "Menu Petit Prix", value: 2 },
    { id: 3, label: "Menu Decouverte", value: 3 },
    { id: 4, label: "Menu Gourmand", value: 4 },
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
  console.log(productsByMenu);
  return (
    <>
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
        {productsByMenu?.length > 0
          ? productsByMenu.map((item) => {
              return <Box key={item.id} style={{ position: "relative" }}></Box>;
            })
          : "il n'y a pas de produits"}
      </Box>
    </>
  );
};
export default Menu;
