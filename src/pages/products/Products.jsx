import React, { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Fab } from "@mui/material";
import { useTheme } from "@mui/system";

import { getAllProducts } from "../../utils/api-call/getAllProducts";
import CustomCard from "../../components/card/CustomCard";
import CustomListItemProducts from "../../components/customlistitem/CustomListitemProducts";
import CustomButton from "../../components/button/CustomButton";

import styles from "./Products.module.css";

import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedTypeRepas, setSelectedTypeRepas] = useState(0);
  const [selected, setSelected] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);

  const theme = useTheme();

  const navigate = useNavigate();

  const TYPE_REPAS = {
    ENTREES: 1,
    PLATS: 2,
    DESSERTS: 3,
    BOISSONS: 4,
  };

  const categories = [
    {
      id: 1,
      name: "Nouveautés",
      description: "Découvrez nos nouveautés",
      image: "badgeHome/badge-nouveautes.png",
    },
    {
      id: 2,
      name: "Menus",
      description: "Découvrez nos menus",
      image: "badgeHome/badge-nouveautes.png",
    },
    {
      id: 3,
      name: "Entrées",
      description: "Découvrez nos entrées",
      image: "entrees.jpg",
    },
    {
      id: 4,
      name: "Plats",
      description: "Découvrez nos plats",
      image: "plats.jpg",
    },
    {
      id: 5,
      name: "Desserts",
      description: "Découvrez nos desserts",
      image: "desserts.jpg",
    },
    {
      id: 6,
      name: "Boissons",
      description: "Découvrez nos boissons",
      image: "boissons.jpg",
    },
  ];

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data);
        setError(null);
      })
      .catch((error) => {
        setProducts([]);
        setError(error);
      });
  }, []);

  const handleListItemClick = (event, index) => {
    setSelectedTypeRepas(index);
    setActiveCategory(null);
  };

  const handleBackClick = () => {
    if (selectedTypeRepas === null || selectedTypeRepas === 0) {
      navigate(-1);
      setActiveCategory(null);
    } else {
      setSelectedTypeRepas(null);
      setActiveCategory(null);
    }
  };

  const handleCardClick = (category) => {
    setSelectedTypeRepas(category.id);
    setActiveCategory(category.id);
  };

  //Dans BDD => product.productCategory.id 1:Entrees 2:Plats 3:Desserts 4:Boissons 5:Nouveautes
  // ListItem 1:Nouveautes 2:Les Menus 3:Entrees 4:Plats 5:Desserts 6:Boissons
  const filteredProducts = products.filter((product) => {
    if (selectedTypeRepas === null || selectedTypeRepas === 0) {
      return true;
    } else if (selectedTypeRepas === 1) {
      const today = new Date();
      const lastWeek = new Date(today);
      lastWeek.setDate(lastWeek.getDate() - 7);

      return (
        new Date(product.createdAt) >= lastWeek &&
        new Date(product.createdAt) <= today
      );
    } else if (selectedTypeRepas === 2) {
      return true;
    } else if (selectedTypeRepas === 3) {
      return product.productCategory.id === TYPE_REPAS.ENTREES;
    } else if (selectedTypeRepas === 4) {
      return product.productCategory.id === TYPE_REPAS.PLATS;
    } else if (selectedTypeRepas === 5) {
      return product.productCategory.id === TYPE_REPAS.DESSERTS;
    } else if (selectedTypeRepas === 6) {
      return product.productCategory.id === TYPE_REPAS.BOISSONS;
    } else {
      return null;
    }
  });

  return (
    <>
      <Box style={{ display: "flex", margin: "0" }}>
        <CustomListItemProducts
          selected={selected}
          onClick={handleListItemClick}
          setSelected={setSelected}
          className={styles.suppCard}
          activeCategory={activeCategory}
        />
        <Box
          style={{
            flexWrap: "wrap",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            margin: "0 auto 0 auto",
          }}
        >
          {selectedTypeRepas === null || selectedTypeRepas === 0 ? (
            // Afficher les cartes de catégorie ici
            categories.map((category) => {
              return (
                <CustomCard
                  key={category.id}
                  description={category.description}
                  title={category.name}
                  buttonCardText="Voir les produits"
                  variantButton={"contained"}
                  onButtonCardClick={() => handleCardClick(category)}
                  width="250px"
                  height="250px"
                  image={category.image}
                ></CustomCard>
              );
            })
          ) : filteredProducts.length === 0 ? (
            <CircularProgress
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            />
          ) : (
            filteredProducts.map((item) => {
              return (
                <CustomCard
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  image={item.image}
                  buttonCardText="Details"
                  variantButton={"contained"}
                  width="250px"
                  height="250px"
                  title={item.name}
                ></CustomCard>
              );
            })
          )}
        </Box>
      </Box>

      {/* bouton retour en version desktop */}
      <Box
        sx={{
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        }}
      >
        <CustomButton
          text="Retour"
          height="40px"
          width="100px"
          padding="0 20px 0 20px"
          margin="32px"
          startIcon={<KeyboardReturnIcon />}
          onClick={handleBackClick}
        ></CustomButton>
      </Box>

      {/* bouton retour en version mobile */}
      <Box
        sx={{
          [theme.breakpoints.down("sm")]: {
            display: "flex",
          },
          [theme.breakpoints.up("sm")]: {
            display: "none",
          },
        }}
      >
        <Fab
          size="small"
          onClick={handleBackClick}
          style={{
            color: "#FFF",
            backgroundColor: "#F8A500",
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
          aria-label="return"
        >
          <KeyboardReturnIcon />
        </Fab>
      </Box>
    </>
  );
};

export default Products;
