import './App.css'
import {
  ThemeProvider,
} from '@mui/material'
import defaultTheme from './utils/theming/theme'
import Footer from './template/footer/Footer'
import Header from './template/header/Header'
import { useContext } from 'react'
import { UserContext } from './utils/context/userContext'
import Products from './pages/products/Products'
import Login from './pages/log/Login'

function App() {

  const [user, setUser, isLogged, handleLogin, handleLogout ] = useContext(UserContext);

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
      <Header />
      {isLogged ? <Products/> : <Login/>}
      <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
