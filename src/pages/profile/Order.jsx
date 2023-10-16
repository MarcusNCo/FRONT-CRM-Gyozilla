/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/context/UserContext";
import { getAllOrdersByCustomer } from "../../utils/api-call/getAllOrdersByCustomer";
import {
  CircularProgress,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const { user } = useContext(UserContext);

  const MENU_PRICES = {
    "Menu Enfant": 8,
    "Menu Petit Prix": 12,
    "Menu Découverte": 18,
    "Menu Gourmand": 25,
  };

  useEffect(() => {
    getAllOrdersByCustomer(user.id)
      .then((response) => {
        const sortedOrders = response.data.data.sort((a, b) => new Date(b.date_order) - new Date(a.date_order));
        
        const ordersWithGroupedProducts = sortedOrders.map((order) => {
          const groupedProducts = {};
          order.order_lines.forEach((lineItem) => {
            const menuReference = lineItem.menu_reference || "noMenu";
            if (!groupedProducts[menuReference]) {
              groupedProducts[menuReference] = {
                menu: menuReference !== "noMenu" ? lineItem.products.menu.name : "noMenu",
                price: menuReference !== "noMenu" ? MENU_PRICES[lineItem.products.menu.name] : lineItem.products.price,
                products: [],
              };
            }
            groupedProducts[menuReference].products.push({
              name: lineItem.products.name,
              quantity: lineItem.quantity,
              price: lineItem.products.price,
            });
          });
          return { ...order, groupedProducts };
        });
        setOrders(ordersWithGroupedProducts);
        setLoading(false);
      })
      .catch((error) => {
        //console.log(error.response.data.message);
        setLoading(false);
      });
  }, [user.id, loading]);
  

  if (loading) {
    return (
      <>
        <CircularProgress
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        />
      </>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "30px",
          [theme.breakpoints.down("sm")]: {
            marginLeft: "0",
          },
        }}
      >
        {orders.map((order, orderIndex) => (
          <Box
            key={`order-${orderIndex}`}
            sx={{
              width: "fit-content",
              margin: "50px 20px 50px 20px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              padding: "0 0 10px 0",
              display: "flex",
              flexDirection: "column",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}
          >
            <Typography
              variant="h9bwpm"
              color="initial"
              sx={{
                backgroundColor: "#5F8D8580",
                paddingLeft: "10px",
                marginBottom: "10px",
                padding: "5px 10px 5px 10px",
                textAlign: "center",
              }}
            >
              Votre commande du{" "}
              {format(new Date(order.date_order), "dd/MM/yyyy ", {
                locale: fr,
              })}
              ({order.order_status.name})
            </Typography>
            {Object.values(order.groupedProducts).map((group, groupIndex) =>
              group.menu !== "noMenu" ? (
                <Box
                  key={`group-${groupIndex}`}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 10px 0 10px",
                  }}
                >
                  <Typography variant="h9bwpm" color="initial">
                    {group.menu} à {group.price}€
                  </Typography>
                  {group.products.map((product, productIndex) => (
                    <Typography
                      variant="h9bwpm"
                      color="initial"
                      key={`product-${groupIndex}-${productIndex}`}
                    >
                      - {product.name}
                    </Typography>
                  ))}
                </Box>
              ) : (
                group.products.map((product, productIndex) => (
                  <Box
                    key={`product-${productIndex}`}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "0 10px 0 10px",
                    }}
                  >
                    <Typography variant="h9bwpm" color="initial">
                      {product.quantity} {product.name} à {product.price}€
                    </Typography>
                  </Box>
                ))
              )
            )}
            <Divider sx={{ borderColor: "#00000030", paddingTop: "10px" }} />
            <Typography
              variant="h9bwpm"
              color="initial"
              sx={{ padding: "10px 10px 0 10px" }}
            >
              {order.order_type.name}, pour un total de {order.total_price}€
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Order;
