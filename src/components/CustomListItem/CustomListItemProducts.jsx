import * as React from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'

export default function ListItemProducts({ onClick }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Card style={{ width: '80vw', height: '50vh', display: 'flex' }}>
      <CardContent>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader id="nested-list-subheader">La Carte</ListSubheader>
          }
        >
          <ListItemButton onClick={(e) => onClick(e, 1)}>
            <ListItemText primary="Nouveautés" />
          </ListItemButton>
          <ListItemButton onClick={(e) => onClick(e, 2)}>
            <ListItemText primary="Les Menus" />
          </ListItemButton>
          <ListItemButton onClick={(e) => onClick(e, 3)}>
            <ListItemText primary="Entrées" />
          </ListItemButton>
          <ListItemButton onClick={(e) => onClick(e, 4)}>
            <ListItemText primary="Plats" />
          </ListItemButton>
          <ListItemButton onClick={(e) => onClick(e, 5)}>
            <ListItemText primary="Desserts" />
          </ListItemButton>
          <ListItemButton onClick={(e) => onClick(e, 6)}>
            <ListItemText primary="Boissons" />
          </ListItemButton>
        </List>
      </CardContent>
    </Card>
  )
}
