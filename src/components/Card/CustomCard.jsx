import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./CustomCard.css";
import { Box } from "@mui/system";
import AddCardIcon from "@mui/icons-material/AddCard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CartContext from "../../utils/context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CustomCard = ({
  id,
  title,
  name,
  description,
  image,
  price,
  id_product_categories,
  id_menus,
  buttonCardText,
  onButtonCardClick,
  width,
  height,
  border,
  backgroundColor,
  backgroundColorContent,
  backgroundSize,
  widthContent,
  heightContent,
  heightActions,
  widthActions,
  backgroundColorActions,
  justifyContentCard,
  alignItemsCard,
  styleTitle,
  styleParagraph,
  variantButton,
  isProduct,
  zIndex,
}) => {
  let dbImage = "";
  if (image !== undefined) {
    dbImage = "https://api-gyozilla.onrender.com/" + image;
  }

  const [quantity, setQuantity] = useState(1);
  const { updateCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const product = {
      id: id,
      name: name,
      image: image,
      price: price,
      quantity,
    };
    const cart = JSON.parse(window.localStorage.getItem("cart")) || {};

    if (cart[product.id]) {
      cart[product.id].quantity += quantity;
    } else {
      cart[product.id] = product;
    }

    window.localStorage.setItem("cart", JSON.stringify(cart));
    updateCartItems();

    toast.success(
      `${quantity} ${name} ${
        quantity === 1 ? "a bien été ajouté" : "ont bien été ajoutés"
      } au panier`,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  return (
    <>
      <Card
        id={id}
        onClick={() => {
          if (!isProduct) {
            onButtonCardClick();
          }
        }}
        className="card-product"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: justifyContentCard,
          alignItems: alignItemsCard,
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          zIndex: zIndex,
          border: "none",
          cursor: "pointer",
          position: "relative",
          boxShadow:
            "rgba(0, 0, 0, 0.55) 15px 10px 20px 2px, rgba(0, 0, 0, 0.25) 5px 5px 20px 2px",
        }}
      >
        <CardContent
          style={{
            width: widthContent,
            height: heightContent,
            backgroundColor: backgroundColorContent,
            padding: "0",
          }}
        >
          {title && (
            <Box
              sx={{
                backgroundColor: "#5F8D85",
                opacity: "0.8",
                padding: "5px 5px 5px 10px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "5px 5px 0 0",
                width: "100%",
                height: "fit-content",
              }}
            >
              <Typography variant={"h7b"}>{title}</Typography>
            </Box>
          )}
        </CardContent>
        <CardContent
          sx={{
            flexGrow: 1,
            width: "100%",
            padding: "0",
            paddingBottom: "0 !important",
            backgroundImage: `url(${dbImage})`,
            backgroundSize: backgroundSize,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
          onClick={() => {
            if (isProduct) {
              const newProduct = {
                id: id,
                name: name,
                description: description,
                price: price,
                image: image,
                category: id_product_categories,
                menu: id_menus,
              };
              const newProductList = [...productList, newProduct];
              setProductList(newProductList);
              navigate(`/products/${name}`, {
                state: {
                  productList: newProductList,
                },
              });
            }
          }}
        ></CardContent>

        {isProduct && (
          <Box
            sx={{
              width: "100%",
              height: "50px",
              position: "absolute",
              bottom: "-50px",
              left: 0,
              backgroundColor: "#5F8D85",
              opacity: "0.6",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "5px",
            }}
            className="displayBox"
          >
            <RemoveIcon
              sx={{ backgroundColor: "black", borderRadius: "50%" }}
              fontSize="medium"
              onClick={decrementQuantity}
            ></RemoveIcon>
            <Typography variant="h7bnw">{quantity}</Typography>
            <AddIcon
              sx={{ backgroundColor: "black", borderRadius: "50%" }}
              fontSize="medium"
              onClick={incrementQuantity}
            ></AddIcon>
            <AddCardIcon
              onClick={addToCart}
              sx={{ color: "black" }}
              fontSize="large"
            ></AddCardIcon>
          </Box>
        )}
      </Card>
    </>
  );
};

export default CustomCard;
