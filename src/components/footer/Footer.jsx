import { Grid, Typography, IconButton, Button, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from '@mui/material/styles/styled';
import logo from '../../images/gyozilla-ecriture.png'
import android from '../../images/appstore-300x101.png'
import apple from '../../images/Play_Store.png'
import './Footer.css'
import CustomButton from '../button/CustomButton';

const Footer = (props) => {

  const FooterContainer = styled('div')(({ theme }) => ({
    backgroundColor: '#242928',
    color: '#CDE8E7',
    padding: '16px',
    minHeight: '100px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '400px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }));

  const Divider = styled('hr')({
    backgroundColor: '#000',
    width: '100%',
    border: '1px black solid',
    opacity: '30%',
    margin: '0',
  });

  const SocialIcons = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const Icon = styled(IconButton)({
    margin: '0 10px',
  });

  const Facebook = styled(FacebookIcon)({
    color: '#CDE8E7',
    width: '40px',
    height: '30px',
  });

  const Instagram = styled(InstagramIcon)({
    color: '#CDE8E7',
    width: '40px',
    height: '30px',
  });

  const Twitter = styled(TwitterIcon)({
    color: '#CDE8E7',
    width: '40px',
    height: '30px',
  });

  const Logo = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const LogoImg = styled('img')({
    height: '40px',
    color: 'inherit',
  });

  const AppIcons = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
  });

  const AppIcon = styled('img')({
    height: '40px',
    margin: '0 10px',
    color: 'inherit',
  });

  const LinkContainer = styled('div')({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  });

  const BottomText = styled(Typography)(({ theme }) => ({
    fontSize: '0.6rem',
    textAlign: 'center',
    margin: '10px 0 0 0 !important',
    [theme.breakpoints.down('sm')]: {
      margin: '30px 0 0 0 !important',
    },
  }));


  return (
    <FooterContainer sx={{ marginTop: '20px' }} >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h7" align="center">
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
        <Grid item xs={12} sm={4} sx={{
            '@media (max-width: 600px)': {
              display: 'none',
            },
          }}
        >
          <Logo>
            <LogoImg src={logo} alt="Logo" />
          </Logo>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Typography variant="h7" align="center">
            Télécharger l'application sur votre smartphone
          </Typography>
          <AppIcons>
            <AppIcon src={android} alt="Apple" />
            <AppIcon src={apple} alt="Android" />
          </AppIcons>
        </Grid>
        <Divider />
        <Grid item xs={12} sm={6} >
          <LinkContainer>
            <Link href="#" underline="none" sx={{ margin: '0 10px 0 10px', color: '#CDE8E7' }} >La carte</Link>
            <Link href="#" underline="none" sx={{ margin: '0 10px 0 10px', color: '#CDE8E7' }} >Nos engagements</Link>
            <Link href="#" underline="none" sx={{ margin: '0 10px 0 10px', color: '#CDE8E7' }} >Actualités</Link>
          </LinkContainer>
        </Grid>
        <Grid item xs={12} sm={6} className="toRight">
          <LinkContainer className="toRight">
            <Link href="#" underline="none" sx={{ margin: '0 10px 0 10px', color: '#CDE8E7' }} >Recrutement</Link>
            <Link href="#" underline="none" sx={{ margin: '0 10px 0 10px', color: '#CDE8E7' }} >Mentions légales</Link>
            <CustomButton text="Contactez-nous" variant="contained" />
          </LinkContainer>
        </Grid>
      </Grid>
      <BottomText>
        GYOZILLA, 2022. Pour votre santé, mangez au moins cinq fruits et légumes par jour.
        <Link href="https://www.mangerbouger.fr/" target="_blank" rel="noopener" sx={{ margin: '0 !important', padding: '0 0 0 5px !important', fontSize: '0.6rem' }}>
          www.mangerbouger.fr
        </Link>
      </BottomText>
    </FooterContainer>
  );
}

export default Footer;