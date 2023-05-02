import { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Account from './Account'
import Fidelity from './Fidelity';
import Order from './Order';

const Profile = () => {

    const handleMenuItemClick = (index) => {
        setSelectedMenuItemIndex(index);
    };

    const menuItems = [
        {
            text: 'Mon compte',
            icon: <AccountCircleIcon />,
            content: <Account />,
        },
        {
            text: 'Ma fidelité',
            icon: <LoyaltyIcon />,
            content: <Fidelity />,
        },
        {
            text: 'Mes commandes',
            icon: <ShoppingBasketIcon />,
            content: <Order />,
        },
    ];

    const [selectedMenuItemIndex, setSelectedMenuItemIndex] = useState(0); // index initial

    return (
        <div className='account'>
            <Box
                sx={{
                    width: "20%",
                    height: "90vh",
                    backgroundColor: '#739b94',
                    zIndex: 0,
                }}>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem
                            sx={{
                                color: 'white',
                                fontWeight: '600',
                                '&:hover': {
                                    textDecoration: 'none'
                                },
                                backgroundColor: index === selectedMenuItemIndex ? 'rgb(248, 165, 0.4)' : 'transparent', // Ajouter un style personnalisé pour l'élément sélectionné
                            }}
                            key={index}
                            onClick={() => handleMenuItemClick(index)}
                            disablePadding>
                            <ListItemButton>
                                <ListItemIcon sx={{
                                    color: 'white'
                                }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText sx={{
                                    color: 'white',
                                }} primary={
                                    <Typography sx={{
                                        fontWeight: 600,
                                    }}>{item.text}
                                    </Typography>} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={{
                width: "80%",
                height: "90vh",
                backgroundColor: 'black',
            }}>
                {menuItems[selectedMenuItemIndex].content}
            </Box>
        </div>
    )
}

export default Profile;
