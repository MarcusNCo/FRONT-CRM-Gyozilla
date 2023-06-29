import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import defaultTheme from "./utils/theming/theme";
import Footer from "./template/footer/Footer";
import Header from "./template/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import UserContextProvider from "./utils/context/usercontext";
import RoutesConfig from "./routes";
import React from "react";

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <UserContextProvider>
          <Router>
            <Header />
            <RoutesConfig />
            <Footer />
          </Router>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
