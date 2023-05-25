import { Box } from "@mui/material";
import { getAllHiring } from "../../utils/api-call/hiring";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import CustomButton from "../../components/button/CustomButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Recrutement = () => {
  const [hiring, setHiring] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllHiring()
      .then((res) => {
        setHiring(res.data);
        setError(null);
      })
      .catch((error) => {
        setHiring([]);
        setError(error);
      });
  }, []);

  return (
    <>
      <Box sx={{ 
        minHeight: "calc(100vh - 71px)",
        "@media (max-width:700px)": {
          minHeight: "calc(100vh - 56px)",
        },
        }}>
        <Box sx={{ marginTop: "50px", textAlign: "center" }}>
          <Typography variant="hboxg">
            Postes à pourvoir
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {hiring.length > 0 ? (
            hiring.map((item) => {
              return (
                <>
                  <Box
                    sx={{
                      width: "400px",
                      height: "400px",
                      padding: "10px",
                      fontSize: "1.0rem",
                      position: "relative",
                      margin: "50px 0 50px 0",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                      "@media (max-width:700px)": {
                        width: "80%",
                        height: "fit-content",
                        paddingBottom: '60px',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#000000",
                        borderRadius: "5px",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h7"
                        sx={{ padding: "10px 0 10px 10px" }}
                      >
                        Publié le{" "}
                        {format(new Date(item.createdAt), "dd/MM/yyyy ", {
                          locale: fr,
                        })}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 0 10px 0",
                      }}
                    >
                      <LocationOnIcon />
                      <Typography variant="body1" color="initial">
                        {item.city}
                      </Typography>
                    </Box>
                    <Box sx={{ padding: "10px 0 10px 0" }}>
                      <Typography variant="body1" color="initial">
                        <strong>Intitulé du poste : </strong>
                        {item.name}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="initial">
                      <strong>Description du poste : </strong>
                      <br />
                      {item.description}
                    </Typography>

                    <Box
                      sx={{
                        bottom: "0",
                        left: "50%",
                        position: "absolute",
                        transform: "translate(-50%)",
                      }}
                    >
                      <CustomButton
                        text="Postuler"
                        height="40px"
                        width="120px"
                        padding="0 20px 0 20px"
                        margin="8px"
                      ></CustomButton>
                    </Box>
                  </Box>
                </>
              );
            })
          ) : (
            <Box
              sx={{
                height: "calc(100vh - 71px - 86px)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="hboxnb" color="initial">
                Il n'y a aucun nouveau poste pour le moment.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Recrutement;
