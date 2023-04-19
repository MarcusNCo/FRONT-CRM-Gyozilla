import * as React from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import { Divider } from '@mui/material'

export default function CustomListItemProducts({
  onClick,
  selected,
  setSelected,
}) {
  const [open, setOpen] = useState(false)

  const handleClick = (e, number) => {
    setOpen(!open)
    onClick(e, number)
    setSelected(number)
  }

  return (
    <Card
      style={{
        maxWidth: '230px',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CardContent>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader id="nested-list-subheader">La Carte</ListSubheader>
          }
        >
          <ListItemButton
            selected={selected === 1 ? true : null}
            className={selected === 1 ? 'active' : null}
            onClick={(e) => handleClick(e, 1)}
          >
            <ListItemText primary="Nouveautés" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            selected={selected === 2 ? true : null}
            className={selected === 2 ? 'active' : null}
            onClick={(e) => handleClick(e, 2)}
          >
            <ListItemText primary="Les Menus" />
          </ListItemButton>
          <Divider />

          <ListItemButton
            selected={selected === 3 ? true : null}
            className={selected === 3 ? 'active' : null}
            onClick={(e) => handleClick(e, 3)}
          >
            <ListItemText primary="Entrées" />
          </ListItemButton>
          <Divider />

          <ListItemButton
            selected={selected === 4 ? true : null}
            className={selected === 4 ? 'active' : null}
            onClick={(e) => handleClick(e, 4)}
          >
            <ListItemText primary="Plats" />
          </ListItemButton>
          <Divider />

          <ListItemButton
            selected={selected === 5 ? true : null}
            className={selected === 5 ? 'active' : null}
            onClick={(e) => handleClick(e, 5)}
          >
            <ListItemText primary="Desserts" />
          </ListItemButton>
          <Divider />

          <ListItemButton
            selected={selected === 6 ? true : null}
            className={selected === 6 ? 'active' : null}
            onClick={(e) => handleClick(e, 6)}
          >
            <ListItemText primary="Boissons" />
          </ListItemButton>
        </List>
      </CardContent>
    </Card>
  )
}
