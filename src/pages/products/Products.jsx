import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../utils/getAllProducts'
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllProducts()
            .then((res) => {
                setProducts(res.data);
                setError(null);
            })
            .catch((error) => {
                setProducts([]);
                setError(error);
            });
        }, []);
    return (
        <div class="products">
            {
                products.length === 0 ? (
                    <CircularProgress/>
                ) : products.map((item)=>{
                    return (
                        <Card sx={{ maxWidth: 345, background: "grey", border: '1px solid black', margin: '2px' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <Button sx={{background: 'black', color: 'white', border: '1px solid white'}} variant="outlined">Commander</Button>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default Products