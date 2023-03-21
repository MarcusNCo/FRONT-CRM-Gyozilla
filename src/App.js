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
      <Badge badgeContent={4}>
        <MailIcon color="action" />
      </Badge>
      <Alert>waouaauauauauauauauuaua</Alert>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <Log /> */}
        <Products />
        <CustomButton
          variant="contained"
          text="coucou"
          color={'secondary'}
          onClick={handleClick}
        />
        <CustomCard
          sizeTitle="h5"
          width="50%"
          height={'100%'}
          title="Titre de la card"
          description="lorem ipsum uudsbifuq fuhsufqsidf uifqGQSD GIUNUI UFIU  U UFUDSGWGFBhfg iugnui ugs"
          buttonCardText="Details de la Card"
          onButtonCardClick={handleCardButtonClick}
          backgroundColor="red"
          colorParagraph={'blue'}
          colorTitle={'toto'}
        ></CustomCard>
      </div>
    </ThemeProvider>
  )
}

export default App
