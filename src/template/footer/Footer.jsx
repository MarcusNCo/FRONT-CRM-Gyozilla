import { Grid, Typography, IconButton, Link, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "@mui/material/styles/styled";
import logo from "../../images/gyozilla-ecriture.png";
import android from "../../images/appstore-300x101.png";
import apple from "../../images/Play_Store.png";
import "./Footer.css";
import CustomButton from "../../components/button/CustomButton";

const Footer = (props) => {
  const FooterContainer = styled("div")(({ theme }) => ({
    backgroundColor: "#242928",
    color: "#CDE8E7",
    padding: "16px",
    minHeight: "100px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "400px",
      padding: '0 16px 0 16px'
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }));

  const Divider = styled("hr")({
    backgroundColor: "#000",
    width: "100%",
    border: "1px black solid",
    opacity: "30%",
    margin: "0",
  });

  const SocialIcons = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    marginLeft: '40px',
    marginTop: '10px',
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginLeft: 'unset',
      marginTop: 'unset',
    },
  }));

  const Icon = styled(IconButton)({
    margin: "0 10px",
  });

  const Facebook = styled(FacebookIcon)({
    color: "#CDE8E7",
    width: "40px",
    height: "30px",
  });

  const Instagram = styled(InstagramIcon)({
    color: "#CDE8E7",
    width: "40px",
    height: "30px",
  });

  const Twitter = styled(TwitterIcon)({
    color: "#CDE8E7",
    width: "40px",
    height: "30px",
  });

  const Logo = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const LogoImg = styled("img")({
    height: "40px",
    color: "inherit",
  });

  const AppIcons = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    margin: "20px 0",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  }));

  const AppIcon = styled("img")(({ theme }) => ({
    height: "45px",
    margin: "0 5px",
    color: "inherit",
    [theme.breakpoints.down("md")]: {
      height: "35px",
    },
  }));

  const LinkContainer = styled("div")({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  });

  const BottomText = styled(Typography)(({ theme }) => ({
    fontSize: "0.6rem",
    textAlign: "center",
    margin: "10px 0 0 0 !important",
    [theme.breakpoints.down("sm")]: {
      margin: "30px 0 0 0 !important",
    },
  }));

  const TypographyWrapperLeft = styled(Typography)(({ textAlignment }) => ({
    textAlign: textAlignment,
  }));

  const TypographyWrapperRight = styled(Typography)(({ textAlignment }) => ({
    textAlign: textAlignment,
  }));

  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const textAlignmentLeft = isSmallScreen ? 'center' : 'left';
  const textAlignmentRight = isSmallScreen ? 'center' : 'right';

  return (
    <>
      <footer>
        <FooterContainer>
          <Grid container spacing={1} sx={{ justifyContent: 'space-evenly' }}>
            <Grid item xs={12} sm={4} 
            sx={{ display: 'flex', flexDirection: 'column' }} >
              <TypographyWrapperLeft variant="h7" textAlignment={textAlignmentLeft}>
                Télécharger l'application sur votre smartphone
              </TypographyWrapperLeft>
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
            <Grid
              item
              xs={12}
              sm={3}
              sx={{
                "@media (max-width: 600px)": {
                  display: "none",
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Logo>
                <LogoImg src={logo} alt="Logo" />
              </Logo>
            </Grid>
            <Grid item xs={12} sm={4}
            sx={{ display: 'flex', flexDirection: 'column' }} >
              <TypographyWrapperRight variant="h7" textAlignment={textAlignmentRight}>
                Télécharger l'application sur votre smartphone
              </TypographyWrapperRight>
              <AppIcons>
                <AppIcon src={android} alt="Apple" />
                <AppIcon src={apple} alt="Android" />
              </AppIcons>
            </Grid>
            <Divider />
            <Grid item xs={12} sm={6}>
              <LinkContainer>
                <Link
                  href="#"
                  underline="none"
                  sx={{ margin: "0 10px 0 10px", color: "#CDE8E7" }}
                >
                  La carte
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{ margin: "0 10px 0 10px", color: "#CDE8E7" }}
                >
                  Nos engagements
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{ margin: "0 10px 0 10px", color: "#CDE8E7" }}
                >
                  Actualités
                </Link>
              </LinkContainer>
            </Grid>
            <Grid item xs={12} sm={6} className="toRight">
              <LinkContainer className="toRight">
                <Link
                  href="#"
                  underline="none"
                  sx={{ margin: "0 10px 0 10px", color: "#CDE8E7" }}
                >
                  Recrutement
                </Link>
                <Link
                  href="#"
                  underline="none"
                  sx={{ margin: "0 10px 0 10px", color: "#CDE8E7" }}
                  align="center"
                >
                  Mentions légales
                </Link>
                <CustomButton text="Contactez-nous" variant="contained" height='40px' fontSize='0.8rem' />
              </LinkContainer>
            </Grid>
          </Grid>
          <BottomText 
              sx={{
                fontSize: "0.8rem",
              }}
          >
            GYOZILLA, 2022. Pour votre santé, mangez au moins cinq fruits et légumes
            par jour.
            <Link
              href="https://www.mangerbouger.fr/"
              target="_blank"
              rel="noopener"
              sx={{
                margin: "0 !important",
                padding: "0 0 0 5px !important",
                fontSize: "0.8rem",
              }}
            >
              www.mangerbouger.fr
            </Link>
          </BottomText>
        </FooterContainer>
      </footer>
    </>
  );
};

export default Footer;
