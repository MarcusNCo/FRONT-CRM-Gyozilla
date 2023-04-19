import React from 'react'
import './News.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import {
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
  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Paper className={classes.paper}>
            <h1>Découvrez les actualités de GYOZILLA</h1>
          </Paper>
        </Grid>
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
        <Grid item>
          <Paper className={classes.paper}>Block 3</Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>Block 4</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default News
