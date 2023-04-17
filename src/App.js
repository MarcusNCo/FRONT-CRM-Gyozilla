import './App.css'
import Products from './pages/products/Products'
import { ThemeProvider } from '@mui/material'
import defaultTheme from './utils/theming/theme'
import Footer from './template/footer/Footer'
import Header from './template/header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
// import NosEngagements from './pages/nosengagements/NosEngagements'
import ContactForm from './pages/contact/ContactForm'
import Log from './pages/log/Login'
import CreateUser from './pages/createuser/CreateUser'
import Profil from './pages/profil/Profil'

function App() {

  
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Log />} />
            <Route exact path="/profil" element={<Profil />} />
            <Route exact path="/createuser" element={<CreateUser />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/nosengagements" element={<NosEngagements />} /> */}
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
