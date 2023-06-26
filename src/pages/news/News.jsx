<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import './News.css'
import { getAllNews } from '../../utils/api-call/getAllNews'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import {
  List,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import boissons from '../../images/boissons.jpg'
import plats from '../../images/plats.jpg'
import desserts from '../../images/desserts.jpg'
import actuexample from '../../images/actuexample.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const News = () => {
  const classes = useStyles()

  const [news, setNews] = useState([])
  const [error, setError] = useState(null)
  const [selectedListItem, setSelectedListItem] = useState(0)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    getAllNews()
      .then((res) => {
        console.log(res.data)
        setNews(res.data)
        setError(null)
      })
      .catch((error) => {
        setNews([])
        setError(error)
      })
  }, [])
  console.log(news)

  return (
    // <>
    //   {news.map((item, index) => (
    //     <div
    //       key={index}
    //       className={
    //         selectedListItem === index ? classes.selectedItem : classes.listItem
    //       }
    //       onClick={() => setSelectedListItem(index)}
    //     >
    //       <h3>{item.title}</h3>
    //       <p>{item.description}</p>
    //     </div>
    //   ))}
    // </>

    <div className={classes.root}>
      <Grid container direction="column" spacing={3}>
        {/* --------------------------------------Titre de la page actualités----------------------------------- */}
        <Grid item>
          <Paper className={classes.paper}>
            <h1>Découvrez les actualités de GYOZILLA</h1>
          </Paper>
        </Grid>
        {/* ---------------------------------------------------------------------------------------------------- */}

        {/* ---------------------Cards qui redirigent vers Nouveautés/Bons plans/Coin famille------------------- */}
        <Grid item>
          <Paper className={classes.paper}>
            <Box
              className="boxStyle"
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Card className="cardStyle" sx={{ minWidth: 375, height: 300 }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image={plats}
                    alt="quelques plats du restaurant"
                  />
                  <h4 class="t4">Nouveautés</h4>
                  <p class="body1">
                    Les plats que nous proposons sont variés mais tous préparés
                    avec amour. Du plus doux au plus épicé, il y aura de quoi
                    satisfaire chaque personne.
                  </p>
                </CardContent>
              </Card>
              <Card className="cardStyle" sx={{ minWidth: 375, height: 300 }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image={boissons}
                    alt="quelques boissons du restaurant"
                  />
                  <h4 class="t4">Bons plans !</h4>
                  <p class="body1">
                    Les boissons proviennent directement d'Asie, en partenariat
                    exclusif avec "Chang-Ting". Vous serez étonnés du plaisir
                    qu'un simple liquide vous procurera.
                  </p>
                </CardContent>
              </Card>
              <Card className="cardStyle" sx={{ minWidth: 375, height: 300 }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image={desserts}
                    alt="quelques desserts du restaurant"
                  />
                  <h4 class="t4">Coin famille</h4>
                  <p class="body1">
                    Nos mets les plus délicats ne sont pas uniquement salés. En
                    effet, vous prendrez un plaisir fou en dégustant nos
                    desserts faits maison aussi savoureux les uns que les
                    autres.
                  </p>
                </CardContent>
              </Card>
            </Box>
          </Paper>
        </Grid>
        {/* ---------------------------------------------------------------------------------------------------- */}

        {/* -----------------------------------------Bannière d'accueil----------------------------------------- */}
        <Grid item>
          <Paper className={classes.paper}>
            <CardMedia
              class="welcome"
              component="img"
              height="140"
              image={actuexample}
              alt="une équipe du restaurant"
            />{' '}
            <CardMedia />
          </Paper>
        </Grid>
        {/* ---------------------------------------------------------------------------------------------------- */}

        {/* ----------------------------------------Article d'actualités---------------------------------------- */}
        <Grid item>
          <Paper className={classes.paper}>
            <Box
              className="boxStyle"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              {news.map((item, index) => (
                <div
                  key={index}
                  className={
                    selectedListItem === index
                      ? classes.selectedItem
                      : classes.listItem
                  }
                  onClick={() => setSelectedListItem(index)}
                >
                  <Card
                    className="cardStyle"
                    sx={{ minWidth: 375, height: 300 }}
                  >
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt="une image associée à l'article"
                      />
                      <h4 class="t4">{item.title}</h4>
                      <p class="body1">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Box>
          </Paper>
        </Grid>
        {/* ---------------------------------------------------------------------------------------------------- */}
      </Grid>
    </div>
  )
}

export default News
=======
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllNews, getNew } from "../../utils/api-call/news";
import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton";

import "./News.css";

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const fetchNews = async () => {
      if (id) {
        const response = await getNew(id);
        setNews(response.data);
      } else {
        const response = await getAllNews();
        setNews(response.data);
      }
    };
    fetchNews();
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!news) {
    return (
      <>
        <Box
          sx={{
            minHeight: "calc(100vh - 71px)",
            "@media (max-width:700px)": {
              minHeight: "calc(100vh - 56px)",
            },
            display: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="success" />
        </Box>
      </>
    );
  }

  if (id) {
    return (
      <>
        <Box
          sx={{
            minHeight: "calc(100vh - 71px)",
            padding: "20px 50px 20px 50px",
            "@media (max-width:700px)": {
              minHeight: "calc(100vh - 56px)",
              padding: "50px 20px 20px 20px",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ textAlign: "center", marginBottom: "50px" }}>
            <Typography variant="hboxg">{news.name}</Typography>
          </Box>
          <Box
            component="img"
            sx={{
              height: "400px",
              width: "600px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "50px",
              "@media (max-width:700px)": {
                width: "100%",
                height: "fit-content",
              },
            }}
            alt="Photographie d'article"
            src={`https://api-gyozilla.onrender.com/${news.image}`}
          />
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h7bnw">{news.description}</Typography>
          </Box>
        </Box>
        {/* bouton retour en version desktop */}
        <Box
          sx={{
            position: "fixed",
            top: "57px",
            left: "10px",
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          <CustomButton
            text="Retour"
            height="40px"
            width="120px"
            padding="0 20px 0 20px"
            margin="32px"
            startIcon={<KeyboardReturnIcon />}
            onClick={handleBackClick}
          ></CustomButton>
        </Box>
      </>
    );
  } else {
    const newsArray = Array.isArray(news) ? news : [news];
    return (
      <>
        <Box sx={{ marginTop: "50px", textAlign: "center" }}>
          <Typography variant="h7b" color="initial">
            Toutes nos actualités ici !
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{
            minHeight: "calc(100vh - 71px)",
            "@media (max-width:700px)": {
              minHeight: "calc(100vh - 56px)",
            },
            padding: "50px",
            justifyContent: "center",
            width: "unset",
            marginLeft: "unset",
          }}
        >
          {newsArray.map((item) => (
            <Grid
              item
              lg={4}
              md={5}
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingLeft: "0 !important",
                padding: "20px 50px 0 50px !important",
              }}
              className={"zoomEffect"}
            >
              <Link to={`/news/${item.id}`} style={{ textDecoration: "none" }}>
                <Paper
                  elevation={5}
                  style={{
                    borderRadius: "20px",
                    width: "334px",
                    height: "fit-content",
                  }}
                >
                  <img
                    src={`https://api-gyozilla.onrender.com/${item.image}`}
                    style={{
                      width: "334px",
                      height: "234px",
                      borderRadius: "20px 20px 0 0",
                    }}
                    alt="Actualités"
                  />
                  <Box
                    sx={{
                      padding: "10px 10px 10px 10px",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h7bb" color="initial">
                      {item.name}
                    </Typography>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
};

export default News;
>>>>>>> 379495d7df5fc79e1c3d66f7117ae47c5f09158d
