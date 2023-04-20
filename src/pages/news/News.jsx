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
