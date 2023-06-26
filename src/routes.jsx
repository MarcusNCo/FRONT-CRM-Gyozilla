import Home from './pages/home/Home'
import Login from './pages/log/Login'
import Products from './pages/products/Products'
import { Routes, Route } from 'react-router-dom'
import Verify from './pages/verify/Verify'
import ProductDetails from './pages/productdetails/ProductDetails'
import CreateUser from './pages/createuser/CreateUser'
import Profile from './pages/profile/Profile'
import ForgotPassword from './pages/forgot-password/ForgotPassword'
import ResetPassword from './pages/reset-password/ResetPassword'
import Commitments from './pages/commitments/Commitments'
import Menu from './pages/menu/Menu'
import Order from './pages/order/Order'
import Find from './pages/find/Find'
import Contact from './pages/contact/Contact'
import LegalNotices from './pages/legalnotices/LegalNotices'
import Recrutement from './pages/recrutement/Recrutement'
import News from './pages/news/News'

function RoutesConfig() {
  const routes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/createuser',
      element: <CreateUser />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      path: '/reset-password',
      element: <ResetPassword />,
    },
    {
      path: '/products',
      element: <Products />,
    },
    {
      path: '/products/:id',
      element: <ProductDetails />,
    },
    {
      path: '/menu',
      element: <Menu />,
    },
    {
      path: '/nosengagements',
      element: <Commitments />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/sign-in',
      element: <CreateUser />,
    },
    {
      path: '/verify/:token',
      element: <Verify />,
    },
    {
      path: '/order',
      element: <Order />,
    },
    {
      path: '/find',
      element: <Find />,
    },
    {
      path: '/mentionslegales',
      element: <LegalNotices />,
    },
    {
      path: '/recrutement',
      element: <Recrutement />,
    },
    {
      path: '/news',
      element: <News />,
    },
    {
      path: '/news/:id',
      element: <News />,
    },
  ]

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default RoutesConfig
