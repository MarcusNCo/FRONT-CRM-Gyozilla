import './App.css'
import {
  ThemeProvider,
} from '@mui/material'
import defaultTheme from './utils/theming/theme'
import Footer from './template/footer/Footer'
import Header from './template/header/Header'
import UserContextProvider, { userContext } from './utils/context/userContext'
import Profile from './pages/profile/Profile'
import Products from './pages/products/Products'
import Login from './pages/log/Login'
import { useContext } from 'react'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
      <Header />
      <UserContextProvider>
        <Profile />
      </UserContextProvider>
      <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
