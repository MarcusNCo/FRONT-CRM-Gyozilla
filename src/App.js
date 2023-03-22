import './App.css'
import logo from './images/Sans_titre-1_105_copie.png'
import Products from './pages/products/Products'
import Log from './pages/log/Log'
import CustomButton from './components/button/CustomButton'
import { useState } from 'react'
import CustomCard from './components/Card/CustomCard'
import { Alert, Badge, ThemeProvider, useTheme } from '@mui/material'
import defaultTheme from './utils/theming/theme'
import MailIcon from '@mui/icons-material/Mail'
import Footer from './components/footer/Footer';

function App() {
  const [test, setTest] = useState('state initial')
  const [test2, setTest2] = useState('state initial du bouton card')

  const handleClick = () => {
    setTest('changement de state initial')
  }
  const handleCardButtonClick = () => {
    setTest2('changement de state initial du bouton card')
  }
  console.log(test, test2)
  const theme = useTheme()
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Alert severity="warning">waouaauauauauauauauuaua</Alert>
        <Badge badgeContent={4}>
          <MailIcon color="action" />
        </Badge>
        {/* <Log /> */}
        <Products />
        <CustomButton variant={'annule'} text="coucou" onClick={handleClick} />
        <CustomButton
          variant="outlined"
          text="re coucou"
          style={{ color: 'blue' }}
        />
        <CustomCard
          width="50%"
          height={'100%'}
          title="Titre de la card"
          description="lorem ipsum uudsbifuq fuhsufqsidf uifqGQSD GIUNUI UFIU  U UFUDSGWGFBhfg iugnui ugs"
          buttonCardText="Details de la Card"
          onButtonCardClick={handleCardButtonClick}
          backgroundColor="grey"
          styleTitle={'h5'}
        ></CustomCard>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
