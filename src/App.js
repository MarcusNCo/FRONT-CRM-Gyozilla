import "./App.css";
import Products from "./pages/products/Products";
import { ThemeProvider } from "@mui/material";
import defaultTheme from "./utils/theming/theme";
import Footer from "./template/footer/Footer";
import Header from "./template/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NosEngagements from "./pages/nosengagements/NosEngagements";
import ContactForm from "./pages/contact/ContactForm";
import CreateUser from "./pages/createuser/CreateUser";
import Profile from "./pages/profile/Profile";
import Login from "./pages/log/Login";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import UserContextProvider from "./utils/context/UserContext";
import ResetPassword from "./pages/reset-password/ResetPassword";
import Verify from "./pages/verify/Verify";
import ProductDetails from "./pages/productdetails/ProductDetails";
import Menu from "./pages/menu/Menu";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <UserContextProvider>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/createuser" element={<CreateUser />} />
              <Route
                exact
                path="/forgot-password"
                element={<ForgotPassword />}
              />
              <Route exact path="/reset-password" element={<ResetPassword />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/nosengagements" element={<NosEngagements />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route exact path="/sign-in" element={<CreateUser />} />
              <Route exact path="/verify/:token" element={<Verify />} />
            </Routes>
            <Footer />
          </Router>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
