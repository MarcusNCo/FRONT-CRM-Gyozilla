import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Divider } from "@mui/material";

export default function CustomListItemProducts({
  onClick,
  selected,
  setSelected,
  className,
  activeCategory,
}) {
  const [open, setOpen] = useState(false);

  const handleClick = (e, number) => {
    setOpen(!open);
    onClick(e, number);
    setSelected(number);
  };

  return (
    <Card
      style={{
        maxWidth: "230px",
        height: "fit-content",
        textAlign: "center",
        border: "none",
        color: "#000000",
        borderRadius: "10px",
        boxShadow:
          "0px 25px 20px -20px rgba(0, 0, 0, 0.45), 25px 0 20px -20px rgba(0, 0, 0, 0.45)",
      }}
      className={className}
    >
      <CardContent sx={{ padding: "0" }}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader id="nested-list-subheader">La Carte</ListSubheader>
          }
        >
          <ListItemButton
            selected={selected === 1 || activeCategory === 1}
            className={selected === 1 || activeCategory === 1 ? "active" : null}
            onClick={(e) => handleClick(e, 1)}
          >
            <ListItemText sx={{ textAlign: "center" }} primary="Nouveautés" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            selected={selected === 2 || activeCategory === 2}
            className={selected === 2 || activeCategory === 2 ? "active" : null}
            onClick={(e) => handleClick(e, 2)}
          >
            <ListItemText sx={{ textAlign: "center" }} primary="Les Menus" />
          </ListItemButton>
          <Divider />

          <ListItemButton
            selected={selected === 3 || activeCategory === 3}
            className={selected === 3 || activeCategory === 3 ? "active" : null}
            onClick={(e) => handleClick(e, 3)}
          >
            <ListItemText sx={{ textAlign: "center" }} primary="Entrées" />
          </ListItemButton>
          <Divider />

          <ListItemButton
            selected={selected === 4 || activeCategory === 4}
            className={selected === 4 || activeCategory === 4 ? "active" : null}
            onClick={(e) => handleClick(e, 4)}
          >
            <ListItemText sx={{ textAlign: "center" }} primary="Plats" />
          </ListItemButton>
          <Divider />

          <ListItemButton
            selected={selected === 5 || activeCategory === 5}
            className={selected === 5 || activeCategory === 5 ? "active" : null}
            onClick={(e) => handleClick(e, 5)}
          >
            <ListItemText sx={{ textAlign: "center" }} primary="Desserts" />
          </ListItemButton>
          <Divider />

          <ListItemButton
            selected={selected === 6 || activeCategory === 6}
            className={selected === 6 || activeCategory === 6 ? "active" : null}
            onClick={(e) => handleClick(e, 6)}
          >
            <ListItemText sx={{ textAlign: "center" }} primary="Boissons" />
          </ListItemButton>
        </List>
      </CardContent>
    </Card>
  );
}
