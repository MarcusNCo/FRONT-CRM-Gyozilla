import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../utils/getAllProducts'
import CircularProgress from '@mui/material/CircularProgress'
import './Products.css'
import CustomCard from '../../components/Card/CustomCard'
import ListItemProducts from '../../components/CustomListItem/CustomListItemProducts'

const Products = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [selectedListItem, setSelectedListItem] = useState(0)

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

  const handleListItemClick = (event, index) => {
    setSelectedListItem(index)
  }

  const filteredProducts = products.filter((product) => {
    if (selectedListItem === null || selectedListItem === 0) {
      return true
    } else if (selectedListItem === 1) {
      return product.id_product_categorie === 2
    } else if (selectedListItem === 2) {
      return product.id_product_categorie === 3
    } else if (selectedListItem === 3) {
      return product.id_product_categorie === 4
    }
  })

  return (
    <div className="container">
      <ListItemProducts onClick={handleListItemClick} />
      <div className="products" style={{ flexWrap: 'wrap' }}>
        {filteredProducts.length === 0 ? (
          <CircularProgress />
        ) : (
          filteredProducts.map((item) => {
            return (
              <CustomCard
                key={item.id}
                description={item.description}
                title={item.name}
                buttonCardText="Details"
                variantButton={'contained'}
              ></CustomCard>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Products
