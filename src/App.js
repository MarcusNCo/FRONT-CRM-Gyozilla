import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import defaultTheme from "./utils/theming/theme";
import Footer from "./template/footer/Footer";
import Header from "./template/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes";
import React from "react";
import UserContextProvider from "./utils/context/UserContext";
import ScrollToTop from "./components/scrolltop/ScrollTop";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("votre_clé_publique_stripe_ici");

const App = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <ThemeProvider theme={defaultTheme}>
          <UserContextProvider>
            <Router>
              <ScrollToTop />
              <Header />
              <RoutesConfig />
              <Footer />
            </Router>
          </UserContextProvider>
        </ThemeProvider>
      </Elements>
    </>
  );
};

export default App;
