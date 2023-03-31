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
import Login from './pages/log/Login'
import UserContextProvider from './utils/context/userContext'

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <UserContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/nosengagements" element={<NosEngagements />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer />
        </Router>
        </UserContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
