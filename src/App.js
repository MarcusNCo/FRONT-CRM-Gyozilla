import './App.css'
import logo from './images/Sans_titre-1_105_copie.png'
import Products from './pages/products/Products'
import CustomButton from './components/button/CustomButton'
import { useState } from 'react'
import CustomCard from './components/card/CustomCard'
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
import CustomInput from './components/input/CustomInput'
import Footer from './template/footer/Footer'
import Header from './template/header/Header'
import CustomListItem from './components/customListItem/CustomListItem'
import ListItemProducts from './components/customListItem/CustomListItemProducts'
import MenuBurger from './components/menu burger/MenuBurger'

import Login from './pages/log/Login'

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
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* <Alert severity="warning">waouaauauauauauauauuaua</Alert>
        <Badge badgeContent={4}>
          <MailIcon color="action" />
        </Badge>
        <Log />
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
        <ListItemProducts />
        <MenuBurger /> */}
        <Products />
        <Login />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
