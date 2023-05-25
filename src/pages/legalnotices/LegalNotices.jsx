import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

const LegalNotices = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 71px)",
        "@media (max-width:700px)": {
          minHeight: "calc(100vh - 56px)",
        },
        margin: "2rem",
        padding: "1rem",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Mentions Légales
      </Typography>
      <Typography variant="body1" gutterBottom>
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance en l'économie numérique, il est précisé aux utilisateurs du
        site Gyozilla l'identité des différents intervenants dans le cadre de sa
        réalisation et de son suivi.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Edition du site
      </Typography>
      <Typography variant="body1" gutterBottom>
        Le présent site, accessible à l’URL www.gyozilla.fr (le « Site »), est
        édité par : <br />
        GYOZILLA INC , société au capital de 1000 euros, inscrite au R.C.S. de
        AMIENS sous le numéro RCS AMIENS B 118 218 712, dont le siège social est
        situé au 70 rue des Jacobins 80000 Amiens, représenté(e) par Keenu
        Reeves dûment habilité(e)
        <br />
        Le numéro individuel TVA de l’éditeur est : FR 69 123456789.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Hébergement
      </Typography>
      <Typography variant="body1" gutterBottom>
        Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann - BP
        80157 - 59053 Roubaix Cedex 1, (contact téléphonique ou email : 1007).
      </Typography>

      <Typography variant="h6" gutterBottom>
        Directeur de publication
      </Typography>
      <Typography variant="body1" gutterBottom>
        Le Directeur de la publication du Site est Keenu Reeves.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Nous contacter
      </Typography>
      <Typography variant="body1" gutterBottom>
        Par téléphone : +33610101010 <br />
        Par email : contact@gyozilla.fr <br />
        Par courrier : 70 rue des Jacobins 80000 Amiens
      </Typography>
    </Box>
  );
};

export default LegalNotices;
