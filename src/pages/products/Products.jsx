import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../utils/getAllProducts";
import CircularProgress from "@mui/material/CircularProgress";
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
import "./Products.css";
import CustomCard from "../../components/card/CustomCard";
// import ListItemProducts from "../../components/customlistitem/CustomListItemProducts";
import CustomListItemProducts from "../../components/customlistitem/CustomListItemProducts";
import CustomButton from "../../components/button/CustomButton";
// import { Fab, IconButton } from "@mui/material";
import { Fab } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedListItem, setSelectedListItem] = useState(0);
  const [selected, setSelected] = useState(0);
  const categories = [
    { id: 3, name: "Entrées", description: "Découvrez nos entrées" },
    { id: 4, name: "Plats", description: "Découvrez nos plats" },
    { id: 5, name: "Desserts", description: "Découvrez nos desserts" },
  ];

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        console.log(res);
        setProducts(res.data);
        setError(null);
      })
      .catch((error) => {
        setProducts([]);
        setError(error);
      });
  }, []);

  const handleListItemClick = (event, index) => {
    setSelectedListItem(index);
  };
  //Dans BDD => product.productCategory.id 1:Entrees 2:Plats 3:Desserts 4:Boissons 5:Nouveautes
  // ListItem 1:Nouveautes 2:Les Menus 3:Entrees 4:Plats 5:Desserts 6:Boissons
  const filteredProducts = products.filter((product) => {
    if (selectedListItem === null || selectedListItem === 0) {
      return true;
    } else if (selectedListItem === 1) {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      return (
        new Date(product.createdAt) >= yesterday &&
        new Date(product.createdAt) <= today
      );
    } else if (selectedListItem === 2) {
      return true;
    } else if (selectedListItem === 3) {
      return product.productCategory.id === 1;
    } else if (selectedListItem === 4) {
      return product.productCategory.id === 2;
    } else if (selectedListItem === 5) {
      return product.productCategory.id === 3;
    } else if (selectedListItem === 6) {
      return product.productCategory.id === 4;
    } else {
      return null;
    }
  });
  return (
    <div>
      <div className="container" style={{ display: "flex" }}>
        <CustomListItemProducts
          selected={selected}
          onClick={handleListItemClick}
          setSelected={setSelected}
          className="custom-list-item"
        />
        <div
          className="products"
          style={{
            flexWrap: "wrap",
            width: "100vw",
            justifyContent: "space-evenly",
          }}
        >
          {selectedListItem === null || selectedListItem === 0 ? (
            // Afficher les cartes de catégorie ici
            categories.map((category) => {
              return (
                <CustomCard
                  key={category.id}
                  description={category.description}
                  title={category.name}
                  buttonCardText="Voir les produits"
                  variantButton={"contained"}
                  onButtonCardClick={() => setSelectedListItem(category.id)}
                  width="250px"
                  height="250px"
                ></CustomCard>
              );
            })
          ) : filteredProducts.length === 0 ? (
            <CircularProgress />
          ) : (
            filteredProducts.map((item) => {
              return (
                <CustomCard
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
        </div>
      </div>
      
      {/* bouton retour en version desktop */}
      <CustomButton
        text="Retour"
        height="40px"
        startIcon={<KeyboardReturnIcon />}
      ></CustomButton>

      {/* bouton retour en version mobile */}
      <Fab 
        size="small"
        style={{
          color:"#FFF", 
          backgroundColor:"#F8A500",
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
        aria-label="return">
        <KeyboardReturnIcon />
      </Fab>
    </div>
  );
};

export default Products;
