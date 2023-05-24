import Home from "./pages/home/Home";
import Login from "./pages/log/Login";
import Products from "./pages/products/Products";
import { Routes, Route } from "react-router-dom";
import Verify from "./pages/verify/Verify";
import ProductDetails from "./pages/productdetails/ProductDetails";
import CreateUser from "./pages/createuser/CreateUser";
import Profile from "./pages/profile/Profile";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import ResetPassword from "./pages/reset-password/ResetPassword";
import NosEngagements from "./pages/nosengagements/NosEngagements";
import Menu from "./pages/menu/Menu";
import Order from "./pages/order/Order";
import Find from "./pages/find/Find";
import Contact from "./pages/contact/Contact";

function RoutesConfig() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/createuser",
      element: <CreateUser />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/products/:id",
      element: <ProductDetails />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/nosengagements",
      element: <NosEngagements />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/sign-in",
      element: <CreateUser />,
    },
    {
      path: "/verify/:token",
      element: <Verify />,
    },
    {
      path: "/order",
      element: <Order />,
    },
    {
      path: "/find",
      element: <Find />,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default RoutesConfig;
