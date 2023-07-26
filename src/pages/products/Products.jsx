import React, { useEffect, useMemo, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { Badge, Fab, IconButton, Typography } from '@mui/material'
import { useTheme } from '@mui/system'
import { Pagination } from '@mui/material'
import { getAllProducts } from '../../utils/api-call/getAllProducts'
import CustomCard from '../../components/card/CustomCard'
import CustomListItemProducts from '../../components/customlistitem/CustomListItemProducts'
import CustomButton from '../../components/button/CustomButton'

import styles from './Products.module.css'

import nouveautes from '../../images/badge nouveautesFichier 125.png'

import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Products = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(0)
  const [first, setFirst] = useState(0)
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState(0)
  const [selectedTypeRepas, setSelectedTypeRepas] = useState(0)
  const [displayBackButton, setDisplayBackButton] = useState(true)
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const rows = 10

  const navigate = useNavigate()

  const handlePageChange = (event, page) => {
    setFirst((page - 1) * rows)
  }

  const TYPE_REPAS = {
    ENTREES: 1,
    PLATS: 2,
    DESSERTS: 3,
    BOISSONS: 4,
  }

  const categories = [
    {
      id: 1,
      name: 'Nouveautés',
      description: 'Découvrez nos nouveautés',
      image: 'image/badge-nouveautes.png',
    },
    {
      id: 2,
      name: 'Menus',
      description: 'Découvrez nos menus',
      image: 'image/nouveautes.jpg',
    },
    {
      id: 3,
      name: 'Entrées',
      description: 'Découvrez nos entrées',
      image: 'image/entrees.jpg',
    },
    {
      id: 4,
      name: 'Plats',
      description: 'Découvrez nos plats',
      image: 'image/plats.jpg',
    },
    {
      id: 5,
      name: 'Desserts',
      description: 'Découvrez nos desserts',
      image: 'image/desserts.jpg',
    },
    {
      id: 6,
      name: 'Boissons',
      description: 'Découvrez nos boissons',
      image: 'image/boissons.jpg',
    },
  ]

  const handleListItemClick = (event, index) => {
    setSelectedTypeRepas(index)
    setActiveCategory(null)
  }

  const handleBackClick = () => {
    if (selectedTypeRepas === null || selectedTypeRepas === 0) {
      navigate(-1)
      setActiveCategory(null)
    } else {
      setSelectedTypeRepas(null)
      setActiveCategory(null)
    }
  }

  const handleCardClick = (category) => {
    if (category.id === 2) {
      navigate('/menu')
    }
    setSelectedTypeRepas(category.id)
    setActiveCategory(category.id)
  }

  const checkNew = (item) => {
    const today = new Date()
    const lastWeek = new Date(today)
    lastWeek.setDate(lastWeek.getDate() - 7)
    return (
      new Date(item.createdAt) >= lastWeek && new Date(item.createdAt) <= today
    )
  }

  //Dans BDD => product.productCategory.id 1:Entrees 2:Plats 3:Desserts 4:Boissons 5:Nouveautes
  // ListItem 1:Nouveautes 2:Les Menus 3:Entrees 4:Plats 5:Desserts 6:Boissons
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedTypeRepas === null || selectedTypeRepas === 0) {
        return true
      } else if (selectedTypeRepas === 1) {
        const newProduct = checkNew(product)
        if (!newProduct) {
          setLoading(false)
        }
        return checkNew(product)
      } else if (selectedTypeRepas === 3) {
        return product.productCategory.id === TYPE_REPAS.ENTREES
      } else if (selectedTypeRepas === 4) {
        return product.productCategory.id === TYPE_REPAS.PLATS
      } else if (selectedTypeRepas === 5) {
        return product.productCategory.id === TYPE_REPAS.DESSERTS
      } else if (selectedTypeRepas === 6) {
        return product.productCategory.id === TYPE_REPAS.BOISSONS
      } else {
        return null
      }
    })
  }, [
    selectedTypeRepas,
    products,
    TYPE_REPAS.ENTREES,
    TYPE_REPAS.PLATS,
    TYPE_REPAS.DESSERTS,
    TYPE_REPAS.BOISSONS,
  ])

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setError("Il n'y a aucune nouveauté pour le moment.")
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [loading])

  useEffect(() => {
    setFirst(0)

    if (selectedTypeRepas === 2) {
      navigate('/menu')
    }
  }, [selectedTypeRepas, navigate])

  useEffect(() => {
    if (location.state && location.state.successMessage) {
      toast.success(location.state.successMessage, {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      location.state.successMessage = null
    }
  }, [location])

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data)
        setError(null)
      })
      .catch((error) => {
        setProducts([])
        setError(error)
      })
  }, [])

  useEffect(() => {
    const initialTypeRepas = location.state?.typeRepas || 0
    const initialTypeRepasBdd = location.state?.typeRepas - 2 || 0

    setSelectedTypeRepas(initialTypeRepas)
    setActiveCategory(initialTypeRepasBdd)
  }, [location.state])

  useEffect(() => {
    const handleScroll = () => {
      const maxScrollPosition =
        document.documentElement.scrollHeight - window.innerHeight
      if (window.pageYOffset > maxScrollPosition - 200) {
        setDisplayBackButton(false)
      } else {
        setDisplayBackButton(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setDisplayedProducts(filteredProducts.slice(first, first + rows))
  }, [filteredProducts, first, rows])

  return (
    <>
      <ToastContainer preventDuplicates={false} />
      {!(selectedTypeRepas === null || selectedTypeRepas === 0) && (
        <Pagination
          count={Math.max(1, Math.ceil(filteredProducts.length / rows))}
          page={first / rows + 1}
          onChange={handlePageChange}
          size="large"
          style={{
            marginTop: '50px',
            margin: '50px auto 0 auto',
          }}
        />
      )}
      <Box
        sx={{
          display: 'flex',
          margin: '0',
          minHeight:
            selectedTypeRepas !== null && selectedTypeRepas !== 0
              ? 'calc(100vh - 71px - 87px)'
              : 'calc(100vh - 71px)',
          '@media (max-width:700px)': {
            minHeight: 'calc(100vh - 56px)',
          },
        }}
      >
        <Box>
          <CustomListItemProducts
            selected={selected}
            onClick={handleListItemClick}
            setSelected={setSelected}
            className={styles.suppCard}
            activeCategory={activeCategory}
          />
          {/* bouton retour en version desktop */}
          {displayBackButton && (
            <Box
              sx={{
                position: 'fixed',
                bottom: '10px',
                left: '50px',
                '@media (max-width:700px)': {
                  display: 'none',
                },
              }}
            >
              <CustomButton
                text="Retour"
                height="40px"
                width="120px"
                padding="0 20px 0 20px"
                margin="32px"
                startIcon={<KeyboardReturnIcon />}
                onClick={handleBackClick}
              ></CustomButton>
            </Box>
          )}
        </Box>
        <Box
          style={{
            flexWrap: 'wrap',
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-evenly',
            margin: '30px auto 0 auto',
          }}
        >
          {selectedTypeRepas === null || selectedTypeRepas === 0 ? (
            // Afficher les cartes de catégorie ici
            categories.map((category) => {
              return (
                <>
                  <CustomCard
                    description={category.description}
                    title={category.name}
                    buttonCardText="Voir les produits"
                    variantButton={'contained'}
                    onButtonCardClick={() => handleCardClick(category)}
                    width="400px"
                    height="250px"
                    image={category.image}
                    backgroundSize="100% auto"
                    isProduct={false}
                  ></CustomCard>
                </>
              )
            })
          ) : displayedProducts.length === 0 ? (
            <Box
              sx={{
                display: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {loading ? (
                <CircularProgress color="success" />
              ) : selectedTypeRepas === 1 && !loading && error ? (
                <Typography variant="hboxb">{error}</Typography>
              ) : (
                <CircularProgress color="success" />
              )}
            </Box>
          ) : (
            displayedProducts.map((item) => {
              const isNew = checkNew(item)
              return (
                <Box
                  style={{ position: 'relative' }}
                  sx={{
                    ':hover': {
                      transform: ' scale(1.02)',
                      transition: 'all 0.2s ease-in-out',
                    },
                  }}
                >
                  <CustomCard
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    buttonCardText="Details"
                    variantButton={'contained'}
                    width="300px"
                    height="300px"
                    title={item.name}
                    isProduct={true}
                    id_product_categories={item.id_product_categories}
                    id_menus={item.id_menus}
                    backgroundSize="contain"
                  />
                  {isNew && (
                    <Badge
                      className={styles.badge}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      badgeContent={
                        <img
                          src={nouveautes}
                          alt="Nouveautés"
                          height={'100px'}
                          style={{
                            position: 'absolute',
                            top: '-380px',
                            right: '-360px',
                            transformOrigin: 'top right',
                          }}
                        />
                      }
                    ></Badge>
                  )}
                </Box>
              )
            })
          )}
        </Box>
      </Box>

      {/* bouton retour en version mobile */}
      <Box
        sx={{
          [theme.breakpoints.down('sm')]: {
            display: 'flex',
          },
          [theme.breakpoints.up('sm')]: {
            display: 'none',
          },
        }}
      >
        <Fab
          size="small"
          onClick={handleBackClick}
          style={{
            color: '#FFF',
            backgroundColor: '#F8A500',
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
          aria-label="return"
        >
          <KeyboardReturnIcon />
        </Fab>
      </Box>
    </>
  )
}

export default Products
