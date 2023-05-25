import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/context/UserContext";
import { getAllOrdersByCustomer } from "../../utils/api-call/getAllOrdersByCustomer";
import { CircularProgress, Divider, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const { user } = useContext(UserContext);
  const id = user.id;

  useEffect(() => {
    getAllOrdersByCustomer(id)
      .then((response) => {
        const ordersWithGroupedProducts = response.data.data.map((order) => {
          const groupedProducts = {};
          console.log(order.order_lines);
          order.order_lines.forEach((lineItem) => {
            const menuReference = lineItem.menu_reference || "noMenu";

            if (!groupedProducts[menuReference]) {
              groupedProducts[menuReference] = {
                menu: lineItem.products.menu
                  ? lineItem.products.menu.name
                  : "noMenu",
                price: lineItem.products.menu
                  ? lineItem.products.menu.price
                  : lineItem.products.price,
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
        console.log(ordersWithGroupedProducts);
        setOrders(ordersWithGroupedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setLoading(false);
      });
  }, [id]);

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
              borderRadius: "0 0 20px 0",
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
