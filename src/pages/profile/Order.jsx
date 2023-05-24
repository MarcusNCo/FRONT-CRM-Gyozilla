import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/context/UserContext";
import { getAllOrdersByCustomer } from "../../utils/api-call/getAllOrdersByCustomer";
import { CircularProgress, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const id = user.id;

  useEffect(() => {
    getAllOrdersByCustomer(id)
      .then((response) => {
        setOrders(response.data.data);
        console.log(response.data.data);
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
        }}
      >
        {orders.map((item) => (
          <Box
            sx={{
              width: "fit-content",
              margin: "50px 20px 50px 20px",
              borderRadius: "0 0 20px 0",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              padding: "0 0 10px 0",
              display: "flex",
              flexDirection: "column",
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
              {format(new Date(item.date_order), "dd/MM/yyyy ", {
                locale: fr,
              })}
              ({item.order_status.name})
            </Typography>
            {item.order_lines.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 10px 0 10px",
                }}
              >
                <Typography variant="h9bwpm" color="initial">
                  - {item.quantity} {item.products.name} à {item.products.price}
                  €
                </Typography>
              </Box>
            ))}
            <Divider sx={{ borderColor: "#00000030", paddingTop: "10px" }} />
            <Typography
              key={item.id}
              variant="h9bwpm"
              color="initial"
              sx={{ padding: "10px 10px 0 10px" }}
            >
              {item.order_type.name}, pour un total de {item.total_price}€
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Order;
