import React, { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";
import { Box, useTheme } from "@mui/system";
import Typography from "@mui/material/Typography";
import coins from "../../images/coins.png";

const Fidelity = () => {
  const { user, isLogged } = useContext(UserContext);
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 71px)",
          [theme.breakpoints.down("sm")]: {
            minHeight: "unset",
            height: "fit-content",
          },
        }}
      >
        <Box
          sx={{
            minWidth: "60%",
            maxWidth: "600px",
            height: "400px",
            [theme.breakpoints.down("sm")]: {
              borderRadius: "0",
              height: "500px",
            },
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            borderRadius: "16px",
            padding: "0 0 20px 0",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              height: "50px",
              backgroundColor: "#F8A500",
              borderRadius: "16px 16px 0 0",
              [theme.breakpoints.down("sm")]: {
                borderRadius: "0",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h7bnw" color="initial">
              Mes points de Fidélité
            </Typography>
          </Box>

          <Box
            sx={{
              height: "220px",
              display: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isLogged ? (
              user.fidelityPoints != null ? (
                <Box>
                  <Typography variant="h7bnw" color="initial">
                    Vos points : {user.fidelityPoints}
                  </Typography>
                  <Box
                    component="img"
                    sx={{
                      height: 30,
                      width: 30,
                      marginLeft: "5px",
                    }}
                    alt="Points de Fidélité Gyozilla"
                    src={coins}
                  />
                </Box>
              ) : (
                <Typography variant="h7bnw" color="initial">
                  Vous n'avez pas de points
                </Typography>
              )
            ) : (
              <Typography variant="h7bnw" color="initial">
                Points de fidélité introuvable !
              </Typography>
            )}
          </Box>

          <Box
            sx={{ 
              height: "120px", 
              display: "flex", 
              flexDirection: "column",
              [theme.breakpoints.down("sm")]: {
                padding: "0 12px 0 12px",
                height: "fit-content",
              },
            
            }}
          >
            <Typography variant="body1" color="initial">
              50
              <Box
                component="img"
                sx={{
                  height: 30,
                  width: 30,
                  margin: "0 5px 0 5px",
                }}
                alt="Points de Fidélité Gyozilla"
                src={coins}
              />
              = 5€ de réduction déduit de votre prochaine commande
            </Typography>
            <Typography variant="body1" color="initial">
              100
              <Box
                component="img"
                sx={{
                  height: 30,
                  width: 30,
                  margin: "0 5px 0 5px",
                }}
                alt="Points de Fidélité Gyozilla"
                src={coins}
              />
              = 10€ de réduction déduit de votre prochaine commande
            </Typography>
            <Typography variant="body1" color="initial">
              300
              <Box
                component="img"
                sx={{
                  height: 30,
                  width: 30,
                  margin: "0 5px 0 5px",
                }}
                alt="Points de Fidélité Gyozilla"
                src={coins}
              />
              = 50€ de réduction déduit de votre prochaine commande
            </Typography>
            <Typography variant="body1" color="initial">
              600
              <Box
                component="img"
                sx={{
                  height: 30,
                  width: 30,
                  margin: "0 5px 0 5px",
                }}
                alt="Points de Fidélité Gyozilla"
                src={coins}
              />
              = Une caisse de bouteille de MEI KUEI LU offerte
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Fidelity;
