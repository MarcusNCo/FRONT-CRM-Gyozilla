<<<<<<< HEAD
<<<<<<< HEAD
import logo from './assets/images/Sans_titre-1_105_copie.png'
import './App.css'
import Header from '../src/template/header/Header'
=======
=======
>>>>>>> d2a66d49310736271b49cb81f38cd164cdaf78ec
import './App.css'
import logo from './images/Sans_titre-1_105_copie.png'
import Products from './pages/products/Products'
import Log from './pages/log/Log'
import CustomButton from './components/button/CustomButton'
import { useState } from 'react'
import CustomCard from './components/Card/CustomCard'
import {
  Alert,
  Badge,
  ThemeProvider,
  useTheme,
  FormControl,
  Divider,
} from '@mui/material'
import defaultTheme from './utils/theming/theme'
import MailIcon from '@mui/icons-material/Mail'
<<<<<<< HEAD
>>>>>>> 27f5eb7f5d443a1b7ac3710a2ee5f2295e59638e
=======
import CustomInput from './components/input/CustomInput'
import Footer from './template/footer/Footer'
import Header from './template/header/Header'
import CustomListItem from './components/CustomListItem/CustomListItem'
import CardWithList from './components/CustomListItem/CustomListItem copy'
import MenuBurger from './components/menu burger/MenuBurger'
>>>>>>> d2a66d49310736271b49cb81f38cd164cdaf78ec

function App() {
  const [test, setTest] = useState('state initial')
  const [test2, setTest2] = useState('state initial du bouton card')

  const handleClick = () => {
    setTest('changement de state initial')
  }
  const handleCardButtonClick = () => {
    setTest2('changement de state initial du bouton card')
  }

  const [valueInput, setvalueInput] = useState()
  const handleChangeInput = (e) => {
    console.log(e)
    setvalueInput(e.target.value)
  }
  console.log(test, test2)
  const theme = useTheme()
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="App">
      <Header />
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
    </div>
=======
=======
>>>>>>> d2a66d49310736271b49cb81f38cd164cdaf78ec
    <ThemeProvider theme={defaultTheme}>
      <Header />
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
        <CustomButton
          // variant={'annule'}
          text="coucou"
          onClick={handleClick}
          color="red"
          backgroundColor="blue"
        />
        <CustomButton variant="text" text="re coucou" />
        <CustomCard
          width="80%"
          height={'100%'}
          title="Titre de la card"
          description="lorem ipsum uudsbifuq fuhsufqsidf uifqGQSD GIUNUI UFIU  U UFUDSGWGFBhfg iugnui ugs"
          buttonCardText="Details de la Card"
          onButtonCardClick={handleCardButtonClick}
          styleTitle={'h5'}
        ></CustomCard>
        <Divider />
        <FormControl>
          <CustomInput
            //placeholder="Mot de passe"
            type="password"
            secure="true"
            value={valueInput}
            label="Mot de passe"
            htmlFor="toto1"
            id="toto1"
            onChange={handleChangeInput}
          />
        </FormControl>
        <CustomListItem />
        <CardWithList />
        <MenuBurger />
        <Footer />
      </div>
    </ThemeProvider>
<<<<<<< HEAD
>>>>>>> 27f5eb7f5d443a1b7ac3710a2ee5f2295e59638e
=======
>>>>>>> d2a66d49310736271b49cb81f38cd164cdaf78ec
  )
}

export default App
