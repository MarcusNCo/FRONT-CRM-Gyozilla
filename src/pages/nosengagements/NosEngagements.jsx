import { React } from 'react'
import './NosEngagements.css'
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import example1 from '../../images/example1.jpg'
import team from '../../images/example.jpg'
import example2 from '../../images/example2.jpg'
import boissons from '../../images/boissons.jpg'
import plats from '../../images/plats.jpg'
import desserts from '../../images/desserts.jpg'

const NosEngagements = () => {
  return (
    <Container sx={{ mb: 5, mt: 5 }}>
      <Typography class="t1" variant="h1" align="center" sx={{ mt: 5, mb: 3 }}>
        Nos engagements
      </Typography>
      {/* ------------------------- 1ère partie de la page ------------------------ */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            class="t2"
            align="center"
            sx={{ mt: 5, mb: 5 }}
          >
            Nous vous accueillons avec un plaisir infini
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" class="t4">
            Un établissement adapté à tout profil
          </Typography>
          <Typography variant="body1" class="body1">
            Que vous veniez seul, en famille, ou pour un dîner romantique, vous
            trouverez forcément une table qui vous correspond. Chez Gyozilla,
            nous avons pensé à tous les cas de figure.{' '}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" class="t4">
            Un service rapide et efficace
          </Typography>
          <Typography variant="body1" class="body1">
            Nous estimons que même avec un emploi du temps chargé, vous avez le
            droit de venir vous régaler chez Gyozilla. C'est pourquoi le service
            est organisé de telle sorte que vous puissiez manger même dans un
            court laps de temps.{' '}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" class="t4">
            Une ambiance dépaysante
          </Typography>
          <Typography variant="body1" class="body1">
            Le but de Gyozilla est de faire voyager chaque client grâce à sa
            cuisine asiatique. Pour renforcer cette immersion, un décor atypique
            est disposé dans nos enseignes en + de thèmes musicaux trés
            appréciés des pays asiatiques qui viendront vous caresser les
            oreilles.{' '}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" class="t4">
            Un personnel attentif à vos besoins et à votre écoute
          </Typography>
          <Typography variant="body1" class="body1">
            Nos cuisiniers connaissent les attentes des clients et donnent le
            meilleur d'eux-même. Par ailleurs, nos serveurs ont un profil en
            cohésion avec nos valeurs, vous adresseront toujours le sourire et
            prendront en compte vos remarques et questions.{' '}
          </Typography>
        </Grid>
      </Grid>
      {/* ------------------------------------------------------------------------- */}
      {/* ------------------------- 2ème partie de la page ------------------------ */}
      <Grid container>
        <Typography variant="h2" class="t2" style={{ alignSelf: 'center' }}>
          Toute notre équipe travaille avec joie pour vous satisfaire
        </Typography>
        <Grid item xs={12} class="team">
          <CardMedia
            class="around"
            component="img"
            height="140"
            image={example1}
            alt="une préparation en cuisine"
          />{' '}
          <CardMedia
            class="imgTeam"
            component="img"
            height="140"
            image={team}
            alt="une équipe du restaurant"
          />{' '}
          <CardMedia
            class="around"
            component="img"
            height="140"
            image={example2}
            alt="quelques plats du restaurant soigneusement pris en photo"
          />{' '}
        </Grid>
      </Grid>
      {/* ------------------------------------------------------------------------- */}
      {/* ------------------------- 3ème partie de la page ------------------------ */}
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" class="t2" align="center">
              La qualité est garantie pour chacun des produits
            </Typography>
            <Typography class="body1">
              Nous accordons une grande importance à toutes les étapes de
              préparation de nos produits. Que ce soit les fournisseurs des
              ingrédients, le respect des normes d'hygiène ou encore la façon
              dont le service est géré, nous veillons à ce que tout soit exécuté
              avec le plus grand soin.
            </Typography>
          </Grid>
        </Grid>
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
              <h4 class="t4">Nos plats</h4>
              <p class="body1">
                Les plats que nous proposons sont variés mais tous préparés avec
                amour. Du plus doux au plus épicé, il y aura de quoi satisfaire
                chaque personne.
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
              <h4 class="t4">Nos boissons</h4>
              <p class="body1">
                Les boissons proviennent directement d'Asie, en partenariat
                exclusif avec "Chang-Ting". Vous serez étonnés du plaisir qu'un
                simple liquide vous procurera.
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
              <h4 class="t4">Nos desserts</h4>
              <p class="body1">
                Nos mets les plus délicats ne sont pas uniquement salés. En
                effet, vous prendrez un plaisir fou en dégustant nos desserts
                faits maison aussi savoureux les uns que les autres.
              </p>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Container>
  )
}

export default NosEngagements
