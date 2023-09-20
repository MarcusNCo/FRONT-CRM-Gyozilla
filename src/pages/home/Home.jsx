import Box from "@mui/material/Box";
import React, { useEffect, useRef, useState } from "react";

import backgroundImageHome from "../../images/gyozilla_restaurant.webp";
import backgroundImageHomeMobile from "../../images/gyozilla_restaurant_mobile.webp";
import logo from "../../images/logo texteLogo horizontal ecriture2_Logo horizontal ecriture.png";
import nouveautes from "../../images/badgeHome/badge-nouveautes.png";
import bonPlans from "../../images/badgeHome/badge-bonPlans.png";
import coinFamille from "../../images/badgeHome/badge-coinFamille.png";
import logoPrez from "../../images/logoHeader.png";

import "./Home.css";

import { Container, Grid, IconButton, Paper, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link, useNavigate } from "react-router-dom";

import { getLastThreeNews } from "../../utils/api-call/news";
import CustomButton from "../../components/button/CustomButton";

const Home = () => {
  const [src, setSrc] = useState(backgroundImageHome);
  const [allNews, setAllNews] = useState([]);
  const navigate = useNavigate();
  const cardHomepages = [
    {
      id: 1,
      name: "nouveautes",
      image: nouveautes,
      url: "/products",
    },
    {
      id: 2,
      name: "bons plans",
      image: bonPlans,
      url: "/products",
    },
    {
      id: 3,
      name: "coin famille",
      image: coinFamille,
      url: "/products",
    },
  ];

  useEffect(() => {
    getLastThreeNews()
      .then((res) => {
        setAllNews(res.data);
      })
      .catch((error) => {
        setAllNews([]);
        console.log(error)
      });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width <= 992) {
        setSrc(backgroundImageHomeMobile);
      } else {
        setSrc(backgroundImageHome);
      }
    });
    return () => window.removeEventListener("resize", null);
  }, []);

  const productDetailsRef = useRef(null);
  const handleArrowClick = () => {
    productDetailsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const newsNavigation = () => {
    navigate("/news");
  };

  return (
    <>
      <Box className="backgroundHome">
        {/* Image background */}

        <img
          src={src}
          alt="backgroundImageHome"
          style={{ objectFit: "cover" }}
        />

        {/* Logo */}
        <img src={logo} alt="Logo" className="logoEcriture" />

        {/* Icône de flèche vers le bas */}
        <IconButton
          className="arrowBottom"
          aria-label="Flèche vers le bas"
          color="inherit"
          onClick={handleArrowClick}
          sx={{
            marginTop: "16px",
            position: "absolute",
            left: "50%",
            bottom: "0.5rem",
            transform: "translate(-50%)",
            width: "150px",
            "@media (max-width: 600px)": {
              marginTop: "0",
              bottom: "5%",
              transform: "translate(-50%, -5%)",
            },
          }}
        >
          <KeyboardDoubleArrowDownIcon
            sx={{ color: "#F8A500", height: "4rem", width: "4rem" }}
            className="move-up-down"
          />
        </IconButton>
      </Box>
      <Container ref={productDetailsRef} sx={{ marginBottom: "100px" }}>
        <Grid
          container
          className="gridContainer"
          spacing={5}
          sx={{ justifyContent: "center" }}
        >
          {cardHomepages.map((cardHomePage) => {
            return (
              <Grid
                item
                lg={4}
                md={4}
                key={cardHomePage.id}
                className={"zoomEffect"}
              >
                <Link to={cardHomePage.url}>
                  <Paper elevation={5} style={{ borderRadius: "20px" }}>
                    <img
                      src={cardHomePage.image}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "20px",
                      }}
                      alt="Cartes du Home"
                    />
                  </Paper>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#38373C",
          padding: "2rem",
          marginBottom: "100px",
        }}
      >
        <Box className="logoPrez">
          <img
            src={logoPrez}
            alt="Logo de gyozilla"
            style={{ width: "calc(40vw + 5vh)" }}
          />
        </Box>
        <Box className="titlePrez">
          <h3 style={{ color: "#CDE8E7", textAlign: "center", margin: "1rem" }}>
            Premier Fast - Food Asiatique sur Amiens
          </h3>
        </Box>
        <Box className="textPrez">
          <p style={{ color: "#CDE8E7", textAlign: "center", margin: "1rem" }}>
            GYOZILLA est un fast-food asiatique, situé à Amiens. Venez découvrir
            la gastronomie japonaise et chinoise sur place ou tout simplement
            depuis chez vous. Nos livreurs sont équipés d'un terminal de
            paiement par CB. Modes de paiement acceptés : Carte Bancaire,
            espèces et Ticket Restaurant. Nous n'acceptons pas les chèques.
          </p>
        </Box>
      </Box>

      <Container sx={{ marginBottom: "50px" }}>
        <Grid
          container
          className="gridContainer"
          spacing={5}
          sx={{
            justifyContent: "center",
          }}
        >
          {allNews.map((news) => {
            return (
              <Grid item lg={4} md={4} key={news.id} className={"zoomEffect"}>
                <Link to={`news/${news.id}`} style={{ textDecoration: "none" }}>
                  <Paper
                    elevation={5}
                    style={{
                      borderRadius: "20px",
                      height: "fit-content",
                    }}
                  >
                    <img
                      src={`${process.env.REACT_APP_URL_API}${news.image}`}
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                        borderRadius: "20px 20px 0 0",
                      }}
                      alt="Actualités"
                    />
                    <Box
                      sx={{
                        padding: "10px",
                        textAlign: "center",
                        height: "75px",
                      }}
                    >
                      <Typography variant="h7bb" color="initial">
                        {news.name}{" "}
                      </Typography>
                    </Box>
                  </Paper>
                </Link>
              </Grid>
            );
          })}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            text="Voir les actualités"
            height="40px"
            width="fit-content"
            padding="0 20px 0 20px"
            margin="32px"
            onClick={newsNavigation}
          ></CustomButton>
        </Box>
      </Container>
    </>
  );
};

export default Home;
