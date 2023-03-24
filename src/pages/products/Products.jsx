import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../utils/getAllProducts'
import CircularProgress from '@mui/material/CircularProgress'
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
import './Products.css'
import CustomCard from '../../components/card/CustomCard'

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
    <div className="products" style={{ flexWrap: 'wrap' }}>
      {products.length === 0 ? (
        <CircularProgress />
      ) : (
        products.map((item) => {

          return (
            // <Card key={item.id}>
            //   <CardContent>
            //     <Typography gutterBottom variant="h5" component="div">
            //       {item.name}
            //     </Typography>
            //     <Typography variant="p">{item.description}</Typography>
            //   </CardContent>
            //   <Button variant="outlined">Commander</Button>
            // </Card>
            <CustomCard
              description={item.description}
              title={item.name}
              image={item.image}
              id={item.id}
              buttonCardText="Details"
              variantButton={'contained'}
              width="250px"
              height="250px"
            ></CustomCard>
          )
        })
      )}
    </div>
  )
}

export default Products
