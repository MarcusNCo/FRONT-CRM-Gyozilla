import * as React from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Collapse from '@mui/material/Collapse'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const MyDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: 240,
  },
})

export default function MenuBurger() {
  const [open, setOpen] = useState(false)
  const [openLaCarte, setOpenLaCarte] = useState(false)
  const [openActualites, setOpenActualites] = useState(false)
  const [openNosEngagements, setOpenNosEngagements] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClickLaCarte = () => {
    setOpenLaCarte(!openLaCarte)
  }

  const handleClickActualites = () => {
    setOpenActualites(!openActualites)
  }

  const handleClickNosEngagements = () => {
    setOpenNosEngagements(!openNosEngagements)
  }

  return (
    <React.Fragment>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <MyDrawer anchor="left" open={open} onClose={handleClick}>
        <List
          sx={{ width: 240 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Menu
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClickLaCarte}>
            <ListItemText primary="La carte" />
          </ListItemButton>
          <Collapse in={openLaCarte} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Nouveautés" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Entrées" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Plats" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Desserts" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClickActualites}>
            <ListItemText primary="Actualités" />
          </ListItemButton>
          <Collapse in={openActualites} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Les petits nouveaux" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClickNosEngagements}>
            <ListItemText primary="Nos engagements" />
          </ListItemButton>
          <Collapse in={openNosEngagements} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Accueil" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Les équipes" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="La qualité" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </MyDrawer>
    </React.Fragment>
  )
}
