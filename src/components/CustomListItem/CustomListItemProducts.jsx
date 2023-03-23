import * as React from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'

const MyCard = styled(Card)({
  minWidth: 275,
  height: '100%',
})

export default function ListItemProducts() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <MyCard>
      <CardContent>
        <List
          sx={{ height: '100%', width: '100%' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              La Carte
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Nouveautés" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Les Menus" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Bons Plans" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Entrées" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Plats" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Desserts" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Boissons" />
          </ListItemButton>
        </List>
      </CardContent>
    </MyCard>
  )
}
