import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../utils/getAllProducts'
import CircularProgress from '@mui/material/CircularProgress'
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
import './Products.css'
import CustomCard from '../../components/card/CustomCard'
import ListItemProducts from '../../components/CustomListItem/CustomListItemProducts'

const Products = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [selectedListItem, setSelectedListItem] = useState(0)
  const categories = [
    { id: 3, name: 'Entrées', description: 'Découvrez nos entrées' },
    { id: 4, name: 'Plats', description: 'Découvrez nos plats' },
    { id: 5, name: 'Desserts', description: 'Découvrez nos desserts' },
  ]

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
  console.log(selectedListItem)
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
      return true
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
  console.log(filteredProducts)
  return (
    <div className="container" style={{ display: 'flex' }}>
      <ListItemProducts onClick={handleListItemClick} />
      <div className="products" style={{ flexWrap: 'wrap' }}>
        {selectedListItem === null || selectedListItem === 0 ? (
          // Afficher les cartes de catégorie ici
          categories.map((category) => {
            return (
              <CustomCard
                key={category.id}
                description={category.description}
                title={category.name}
                buttonCardText="Voir les produits"
                variantButton={'contained'}
                onButtonCardClick={() => setSelectedListItem(category.id)}
              ></CustomCard>
            )
          })
        ) : filteredProducts.length === 0 ? (
          <CircularProgress />
        ) : (
          filteredProducts.map((item) => {
            return (
              <CustomCard
                key={item.id}
                description={item.description}
                image={item.image}
                buttonCardText="Details"
                variantButton={'contained'}
                width="250px"
                height="250px"
                title={item.name}
              ></CustomCard>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Products
