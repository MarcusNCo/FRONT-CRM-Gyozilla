import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Divider, Typography } from '@mui/material'
import CustomButton from '../../components/button/CustomButton'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import CartContext from '../../utils/context/CartContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductDetails = () => {
  const location = useLocation()
  const [quantity, setQuantity] = useState(1)
  const [productInfo, setProductInfo] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
    menu: '',
  })
  const [total, setTotal] = useState(productInfo.price)
  const { updateCartItems } = useContext(CartContext)
  const navigate = useNavigate()
  const [displayBackButton, setDisplayBackButton] = useState(true)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  const addToCart = () => {
    const product = {
      id: productInfo.id,
      name: productInfo.name,
      image: productInfo.image,
      price: productInfo.price,
      quantity,
    }
    const cart = JSON.parse(window.localStorage.getItem('cart')) || {}

    if (cart[product.id]) {
      cart[product.id].quantity += quantity
    } else {
      cart[product.id] = product
    }

    window.localStorage.setItem('cart', JSON.stringify(cart))
    updateCartItems()

    toast.success(
      `${quantity} ${productInfo.name} ${
        quantity === 1 ? 'a bien été ajouté' : 'ont bien été ajoutés'
      } au panier`,
      {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      },
    )
  }

  useEffect(() => {
    if (location.state && location.state.productList) {
      setProductInfo(location.state.productList[0])
    }
  }, [location.state])

  useEffect(() => {
    setTotal(quantity * productInfo.price)
  }, [quantity, productInfo.price])

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

  return (
    <>
      <Box
        sx={{
          minHeight: 'calc(100vh - 71px)',
          color: 'black',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          '@media (max-width: 900px)': {
            flexDirection: 'column',
            minHeight: 'calc(100vh - 56px)',
          },
        }}
      >
        {productInfo.image && (
          <Box
            component="img"
            sx={{
              height: 'fit-content',
              maxWidth: '400px',
              maxHeight: '400px',
              '@media (max-width: 900px)': {
                width: '80%',
                height: 'fit-content',
              },
              objectFit: 'cover',
            }}
            alt={`Image du produit "${productInfo.name}"`}
            src={'https://api-gyozilla.onrender.com/' + productInfo.image}
          />
        )}
        <Box
          sx={{
            width: '400px',
            height: '400px',
            '@media (max-width: 900px)': {
              width: '100%',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-evenly',
            justifyContent: 'space-evenly',
            padding: '10px',
            borderRadius: '0 0 10px 10px',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
          }}
        >
          <Typography variant="h6g">{productInfo.name}</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: 'fit-content',
            }}
          >
            <Typography
              sx={{
                width: '200px',
                fontSize: '1.2rem',
                backgroundColor: '#5F8D85',
                borderRadius: '5px 0',
                paddingLeft: '10px',
                marginBottom: '10px',
              }}
            >
              Description du produit
            </Typography>
            <Typography variant="h7bnw">{productInfo.description}</Typography>
            <Typography variant="h7bnw">
              Prix à l'unité : {productInfo.price}€
            </Typography>
          </Box>
          <Divider sx={{ borderBottom: 1, borderColor: '#00000050' }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100px',
              justifySelf: 'end',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}
            >
              <Button onClick={decrementQuantity}>-</Button>
              <Typography variant="h7bnw">
                Nombre de produit : {quantity}
              </Typography>
              <Button onClick={incrementQuantity}>+</Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                }}
                variant="h7b"
              >
                Total: {total}€
              </Typography>
              <Button
                sx={{ alignSelf: 'center', width: 'fit-content' }}
                onClick={addToCart}
              >
                Ajouter au panier
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
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
      <ToastContainer position="top-right" />
    </>
  )
}

export default ProductDetails
