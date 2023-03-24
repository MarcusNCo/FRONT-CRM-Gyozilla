import React, { useEffect, useState } from 'react'
// import TextField from '@mui/material/TextField'
// import List from './Components/List'
import './Header.css'
import Logo from './../../assets/images/gyozillalog.png'
import mobileLogo from './../../assets/images/gyozillalogo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
// import Switch from '@mui/material/Switch'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import FormGroup from '@mui/material/FormGroup'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
// import RiceBowlIcon from '@mui/icons-material/RiceBowl'
import RamenDiningIcon from '@mui/icons-material/RamenDining'
import CoPresentIcon from '@mui/icons-material/CoPresent'
import PinDropIcon from '@mui/icons-material/PinDrop'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material'
// import { SafetyDividerOutlined } from '@mui/icons-material'
import CustomInput from '../../components/input/CustomInput'
// import { Form } from 'formik'
// import { margin } from '@mui/system'

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [mobileVersion, setMobileVersion] = useState(false)
  console.log('openDrawer', openDrawer, 'mobileversion', mobileVersion)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setOpenDrawer(open)
    setMobileVersion(true)
  }

  useEffect(() => {
    if (openDrawer) {
      setMobileVersion(true)
    }

    return () => {
      setMobileVersion(false)
      // setOpenDrawer(false)
    }
  }, [])

  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const list = () => (
    <List>
      <a href="">
        <ListItem button onClick={toggleDrawer(false)}>
          <RamenDiningIcon />
          <ListItemText primary="La carte" style={{ marginLeft: '10px' }} />
        </ListItem>
      </a>
      <Divider />
      <a href="">
        <ListItem button onClick={toggleDrawer(false)}>
          <CoPresentIcon />
          <ListItemText
            primary="Nos engagements"
            style={{ marginLeft: '10px' }}
          />
        </ListItem>
      </a>
      <Divider />
      <a href="">
        <ListItem button onClick={toggleDrawer(false)}>
          <ContactMailIcon />
          <ListItemText
            primary="Contactez-nous"
            style={{ marginLeft: '10px' }}
          />
        </ListItem>
      </a>
      <Divider />
      <a href="">
        <ListItem button onClick={toggleDrawer(false)}>
          <PinDropIcon />
          <ListItemText
            primary="Trouver un resto"
            style={{ marginLeft: '10px' }}
          />
        </ListItem>
      </a>
      <Divider />
    </List>
  )
  const [valueInput, setvalueInput] = useState('')
  const handleChangeInput = (e) => {
    console.log(e)
    setvalueInput(e.target.value)
  }
  return (
    <div>
      {/* // -------------------- Mobile version -------------------------- */}
      <div className="headerMobile">
        <Box sx={{ flexGrow: 1 }}>
          {/* <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={auth}
                  onChange={handleChange}
                  aria-label="login switch"
                />
              }
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup> */}
          <AppBar position="static" sx={{ backgroundColor: '#739B94' }}>
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}
              <div>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={openDrawer}
                  onClose={toggleDrawer(false)}
                >
                  {list()}
                </Drawer>
              </div>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img
                  id="mobileLogo"
                  src={mobileLogo}
                  style={{
                    objectFit: 'cover',
                    position: 'relative',
                    width: '25%',
                  }}
                />
              </Typography>
              {auth && (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  {/* <a href="#" style={{ marginTop: '30px' }}> */}
                  <ShoppingCartIcon
                    style={{ color: 'white', marginTop: '12px' }}
                  />
                  {/* </a> */}
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      {/* // -------------------------------------------------------------- */}

      {/* // ----------------------- Web version -------------------------- */}
      <div className="headerWeb">
        <div className="header-left">
          <a id="gyozilla" href="#home">
            {' '}
            <img src={Logo} />{' '}
          </a>
          <a className="menu" href="#menuCard">
            La carte
          </a>
          <a className="menu" href="#commitments">
            Nos engagements
          </a>
          <a className="menu" href="#contact">
            Contactez-nous
          </a>
        </div>
        <div className="containSearch">
          <CustomInput
            htmlFor="toto"
            id="toto"
            variant="standard"
            label="Que cherchez-vous"
            onChange={handleChangeInput}
            value={valueInput}
          />
          {/* <Form /> */}
          {/* <List /> */}
        </div>
        <div className="header-right">
          <a className="containIcon" href="#">
            <LocationOnIcon
              className="logIcon"
              style={{ fontSize: 35, color: '#739B94' }}
            />
          </a>
          <a className="containIcon" href="#">
            <ShoppingCartIcon
              className="logIcon"
              style={{ fontSize: 35, color: '#739B94' }}
            />
          </a>
          <a className="containIcon" href="#">
            <AccountCircleIcon
              className="logIcon"
              style={{ fontSize: 35, color: '#739B94' }}
            />
          </a>
        </div>
      </div>
      {/* // -------------------------------------------------------------- */}
    </div>
  )
}

export default Header
