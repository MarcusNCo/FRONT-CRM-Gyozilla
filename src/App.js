import './App.css'
import {
  ThemeProvider,
} from '@mui/material'
import defaultTheme from './utils/theming/theme'
import Footer from './template/footer/Footer'
import Header from './template/header/Header'
import { useEffect, useState } from 'react'
import Products from './pages/products/Products'
import Login from './pages/log/Login'
import jwtDecode from 'jwt-decode'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token) {
      const decodeToken = jwtDecode(token);
      console.log('user',decodeToken);
      setUser(decodeToken);
      setLoggedIn(true);
    }
  },[isLoggedIn]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
      <Header />
      {isLoggedIn ? <Products /> : <Login />}
      <p>Votre adresse e-mail est : {user && user.username}</p>
      <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
