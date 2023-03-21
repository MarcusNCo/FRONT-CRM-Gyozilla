import { Grid, Typography, IconButton, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from '@mui/material/styles/styled';

const FooterContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#242928',
  color: '#CDE8E7',
  padding: theme.spacing(4),
  minHeight: '200px',
  [theme.breakpoints.down('sm')]: {
    minHeight: '300px',
  },
}));

const Divider = styled('hr')({
  backgroundColor: '#000',
  height: '1px',
  margin: '40px 0',
});

const SocialIcons = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Icon = styled(IconButton)({
  fontSize: '28px',
  margin: '0 10px',
});

const Facebook = styled(FacebookIcon)({
  color: '#CDE8E7',
});

const Instagram = styled(InstagramIcon)({
  color: '#CDE8E7',
});

const Twitter = styled(TwitterIcon)({
  color: '#CDE8E7',
});

const Logo = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const LogoImg = styled('img')({
  height: '60px',
  color: 'inherit',
});

const AppIcons = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0',
});

const AppIcon = styled('img')({
  height: '32px',
  margin: '0 10px',
  color: 'inherit',
});

const LinkContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const Link = styled(Button)({
  color: '#CDE8E7',
  margin: '10px 20px',
  '&:hover': {
    color: '#fff',
  },
});

const ContactButton = styled(Button)({
  margin: '10px',
});

const BottomText = styled(Typography)({
  marginTop: '20px',
  fontSize: '12px',
  textAlign: 'center',
});

function Footer() {
  return (
    <FooterContainer>
      <Grid container spacing={4}>
        <Grid item xs={6} sm={4}>
          <Typography variant="h6" align="center">
            Retrouvez-nous sur les réseaux
          </Typography>
          <SocialIcons>
            <Icon>
              <Facebook />
            </Icon>
            <Icon>
              <Instagram />
            </Icon>
            <Icon>
              <Twitter />
            </Icon>
          </SocialIcons>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Logo>
            <LogoImg src="./src/images/gyozilla-ecriture.png" alt="Logo" />
          </Logo>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography variant="h6" align="center">
            Télécharger l'application sur votre smartphone
          </Typography>
          <AppIcons>
            <AppIcon src="../../src/images/appstore-300x101.png" alt="Apple" />
            <AppIcon src="../../images/Play_Store.png" alt="Android" />
          </AppIcons>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LinkContainer>
            <Link href="#">La carte</Link>
            <Link href="#">Nos engagements</Link>
            <Link href="#">Actualités</Link>
          </LinkContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LinkContainer>
            <Link href="#">Recrutement</Link>
            <Link href="#">Mentions légales</Link>
            <ContactButton variant="outlined">Contactez-nous</ContactButton>
          </LinkContainer>
        </Grid>
      </Grid>
      <BottomText>
        GYOZILLA, 2022. Pour votre santé, mangez au moins cinq fruits et légumes par jour.{' '}
        <Link href="https://www.mangerbouger.fr/" target="_blank" rel="noopener">
          www.mangerbouger.fr
        </Link>
      </BottomText>
    </FooterContainer>
  );
}

export default Footer;