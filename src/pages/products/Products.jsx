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
  //Dans BDD => product.productCategory.id 1:Entrees 2:Plats 3:Desserts 4:Boissons 5:Nouveautes
  // ListItem 1:Nouveautes 2:Les Menus 3:Entrees 4:Plats 5:Desserts 6:Boissons
  const filteredProducts = products.filter((product) => {
    if (selectedListItem === null || selectedListItem === 0) {
      return true
    } else if (selectedListItem === 1) {
      const today = new Date()
      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)

      return (
        new Date(product.createdAt) >= yesterday &&
        new Date(product.createdAt) <= today
      )
    } else if (selectedListItem === 2) {
      return products
    } else if (selectedListItem === 3) {
      return product.productCategory.id === 1
    } else if (selectedListItem === 4) {
      return product.productCategory.id === 2
    } else if (selectedListItem === 5) {
      return product.productCategory.id === 3
    } else if (selectedListItem === 6) {
      return product.productCategory.id === 4
    }
  })
  return (
    <div className="container" style={{ display: 'flex' }}>
      <div>
        <ListItemProducts onClick={handleListItemClick} />
      </div>
      <div className="products" style={{ flexBasis: '80%', flexWrap: 'wrap' }}>
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
