import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  Box,
  Typography,
  Button,
  CardMedia,
  Stepper,
  Step,
  StepLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import "./Stepper.css";
import { useNavigate } from "react-router-dom";
import { createOrder, createOrderLine } from "../../utils/api-call/order";
import { UserContext } from "../../utils/context/UserContext";
import CartContext from "../../utils/context/CartContext";
import CustomButton from "../button/CustomButton";

const steps = [
  "Confirmer la commande",
  "Choix du type de commande",
  "Finalisation de la commande",
];

export default function HorizontalLinearStepper() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const { user, isLogged } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [deliveryType, setDeliveryType] = useState("");
  const { dispatch } = useContext(CartContext);
  const theme = useTheme();

  const saveOrder = async () => {
    try {
      const totalPrice = getTotal();
      const token = window.localStorage.getItem("token");
      const date = new Date().toISOString().split("T")[0];

      let ordertype = 0;
      switch (deliveryType) {
        case "Click & Collect":
          ordertype = 1;
          break;
        case "Livraison à domicile":
          ordertype = 2;
          break;
        case "Consommation sur place":
          ordertype = 3;
          break;
        default:
          ordertype = 1;
          break;
      }

      const orderValues = {
        date_order: date,
        total_price: totalPrice,
        id_status: 1,
        id_franchises: 1,
        id_customers: user.id,
        id_order_types: ordertype,
      };

      const orderResponse = await createOrder(orderValues, token);
      const orderId = orderResponse.data["data"].id;
      const cart = JSON.parse(window.localStorage.getItem("cart")) || {};

      for (const itemId in cart) {
        const item = cart[itemId];
        if(item.name.toUpperCase().includes("MENU")) { // Si l'article est un menu
          for (const product of item.products) {
            const orderLineValues = {
              id_orders: orderId,
              id_products: product.id,
              quantity: product.quantity,
              menu_reference: Number(String(itemId).slice(4)),
            };
            await createOrderLine(orderLineValues, token);
          }
        } else { // Si l'article n'est pas un menu
          const orderLineValues = {
            id_orders: orderId,
            id_products: item.id,
            quantity: item.quantity,
          };
          await createOrderLine(orderLineValues, token);
        }
      }
      dispatch({ type: "CLEAR" });
    } catch (error) {
      console.error("Erreur lors de l'enregistrement de la commande :", error);
    }
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      if (isLogged) {
        saveOrder();
      }
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      const cartParsed = JSON.parse(cartData);
      setCartItems(Object.values(cartParsed));
    }
  }, []);

  const getImage = (image) => {
    let dbImage;
    if (image !== undefined) {
      dbImage = "https://api-gyozilla.onrender.com/" + image;
    }
    return dbImage;
  };

  const handleDeliveryTypeChange = (event) => {
    setDeliveryType(event.target.value);
  };

  const getTotal = useCallback(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const handleBackClick = () => {
    navigate("/profile", {
      state: {
        profile: 2,
      },
    });
  };

  const renderStepContent = (step) => {
    switch (step) {
      // CONFIRMATION DE LA COMMANDE
      case 0:
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <Box
              sx={{
                marginTop: "20px",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "600px",
                textAlign: "center",
                height: "auto",
                backgroundColor: "#5F8D8550",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h7g"
                sx={{
                  width: "100%",
                  borderBottom: "2px solid #5F8D85",
                  marginBottom: "20px",
                  padding: "5px",
                }}
              >
                Votre commande
              </Typography>
              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <CardMedia
                    className="around"
                    component="img"
                    image={getImage(item.image)}
                    alt={item.name}
                    sx={{
                      height: "140px",
                      width: "140px",
                      marginLeft: "50px",
                      borderRadius: "10px",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                      flexGrow: "1",
                      marginLeft: "50px",
                    }}
                  >
                    <Typography variant="h7g" color="initial">
                      {item.name}
                    </Typography>

                    <Typography variant="body1" color="initial">
                      Prix: {item.price}€
                    </Typography>

                    <Typography variant="body1" color="initial">
                      Quantité: {item.quantity}
                    </Typography>

                    {item.products && item.products.length > 0 && (
                      <Typography variant="body1" color="initial" component="div">
                        Produits du menu:
                        <List sx={{ paddingTop: "0", paddingBottom: "0", }}>
                          {item.products.map((product) => (
                            <ListItem sx={{  
                              fontFamily: "Garamond",
                              fontWeight: "400",
                              fontSize: "1rem",
                              lineHeight: "1.5",
                              paddingLeft: "0",
                              paddingBottom: "0",
                            }} 
                            key={product.id}>- {product.name}</ListItem>
                          ))}
                        </List>
                      </Typography>
                    )}
                  </Box>
                </Box>
              ))}

              <Typography
                variant="hbox"
                color="#5F8D85"
                sx={{
                  width: "100%",
                  borderTop: "1px solid #000",
                  padding: "10px 0 10px 0",
                }}
              >
                Total: {getTotal()}€
              </Typography>
            </Box>
          </Box>
        );
      // CHOIX DU TYPE DE LA COMMANDE
      case 1:
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <Box
              sx={{
                marginTop: "20px",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "50%",
                textAlign: "center",
                height: "auto",
                backgroundColor: "#5F8D8550",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h7g"
                sx={{
                  width: "100%",
                  borderBottom: "2px solid #5F8D85",
                  marginBottom: "20px",
                  padding: "5px",
                }}
              >
                Choix du type de commande
              </Typography>
              <Box>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="delivery-type"
                    name="delivery-type"
                    value={deliveryType}
                    onChange={handleDeliveryTypeChange}
                  >
                    <FormControlLabel
                      value="Click & Collect"
                      control={<Radio />}
                      label="Click & Collect"
                      sx={{ color: "black" }}
                    />
                    <FormControlLabel
                      value="Livraison à domicile"
                      control={<Radio />}
                      label="Livraison à domicile"
                      sx={{ color: "black" }}
                    />
                    <FormControlLabel
                      value="Consommation sur place"
                      control={<Radio />}
                      label="Consommation sur place"
                      sx={{ color: "black" }}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Box>
        );
      // FINALISATION DE LA COMMANDE
      case 2:
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <Box
              sx={{
                marginTop: "20px",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "50%",
                textAlign: "center",
                height: "auto",
                backgroundColor: "#5F8D8550",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h7g"
                sx={{
                  width: "100%",
                  borderBottom: "2px solid #5F8D85",
                  marginBottom: "20px",
                  padding: "5px",
                }}
              >
                Récapitulatif de la commande
              </Typography>
              <Typography variant="h7b" color="initial">
                Type de commande: {deliveryType}
              </Typography>
              <Typography
                variant="h7b"
                color="initial"
                sx={{ marginTop: "20px", marginBottom: "10px" }}
              >
                Articles commandés :
              </Typography>
              <List>
                {cartItems.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemText
                      sx={{ color: "black" }}
                      primary={`${item.name} - Quantité: ${item.quantity} - Prix: ${item.price}€`}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography
                variant="h7b"
                color="initial"
                sx={{ marginBottom: "10px" }}
              >
                Total: {getTotal()}€
              </Typography>
            </Box>
          </Box>
        );
      default:
        return "Étape inconnue";
    }
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 71px)",
        "@media (max-width:700px)": {
          minHeight: "calc(100vh - 56px)",
        },
        width: "80%",
        margin: "20px auto 20px auto",
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {/* Dernière box de remerciement pour la commande */}
            <Box sx={{ flex: "1 1 auto", textAlign: "center" }}>
              <Typography
                sx={{ mt: 2, mb: 1, color: "black", fontSize: "1.2rem" }}
              >
                Merci d'avoir passé commande chez nous !<br />
                Retrouvez vos informations de la commande sur votre compte.
              </Typography>
              <CustomButton
                text="Accéder au compte"
                height="40px"
                width="220px"
                padding="0 20px 0 20px"
                margin="32px"
                onClick={handleBackClick}
              ></CustomButton>
            </Box>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {renderStepContent(activeStep)}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              onClick={
                activeStep === 0 ? () => navigate("/products") : handleBack
              }
              sx={{ mr: 1 }}
            >
              Retour
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleNext}
              disabled={activeStep === 1 && deliveryType === ""}
            >
              {activeStep === steps.length - 1 ? "Valider" : "Continuer"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
