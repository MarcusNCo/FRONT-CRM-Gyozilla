import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../utils/getAllProducts'
import CircularProgress from '@mui/material/CircularProgress'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import './Products.css'

const Products = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        console.log(res)
        setProducts(res.data)
        setError(null)
      })
      .catch((error) => {
        setProducts([])
        setError(error)
      })
  }, [])
  //console.log(products)
  return (
    <div className="products">
      {products.length === 0 ? (
        <CircularProgress />
      ) : (
        products.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{
                maxWidth: 345,
                background: 'grey',
                border: '1px solid black',
                margin: '2px',
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="p">{item.description}</Typography>
              </CardContent>
              <Button variant="outlined">Commander</Button>
            </Card>
          )
        })
      )}
    </div>
  )
}

export default Products
