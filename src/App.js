import './App.css'
import Products from './pages/products/Products'
import { ThemeProvider } from '@mui/material'
import defaultTheme from './utils/theming/theme'
import Footer from './template/footer/Footer'
import Header from './template/header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NosEngagements from './pages/nosengagements/NosEngagements'
import ContactForm from './pages/contact/ContactForm'
import Log from './pages/log/Login'
import { useContext } from 'react'
import { UserContext } from './utils/context/userContext'
import Login from './pages/log/Login'

function App() {
  const [user, setUser, isLogged, handleLogin, handleLogout] = useContext(UserContext);
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Header />
          {isLogged ? <Products/> : <Login/>}
          <Routes>
            <Route exact path="/" element={<Log />} />
            <Route exact path="/Home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/nosengagements" element={<NosEngagements />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
