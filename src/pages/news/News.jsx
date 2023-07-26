import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getAllNews, getNew } from '../../utils/api-call/news'
import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../components/button/CustomButton'

import './News.css'

const News = () => {
  const { id } = useParams()
  const [news, setNews] = useState(null)
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => {
    const fetchNews = async () => {
      if (id) {
        const response = await getNew(id)
        setNews(response.data)
      } else {
        const response = await getAllNews()
        setNews(response.data)
      }
    }
    fetchNews()
  }, [id])

  const handleBackClick = () => {
    navigate(-1)
  }

  if (!news) {
    return (
      <>
        <Box
          sx={{
            minHeight: 'calc(100vh - 71px)',
            '@media (max-width:700px)': {
              minHeight: 'calc(100vh - 56px)',
            },
            display: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress color="success" />
        </Box>
      </>
    )
  }

  if (id) {
    return (
      <>
        <Box
          sx={{
            minHeight: 'calc(100vh - 71px)',
            padding: '20px 50px 20px 50px',
            '@media (max-width:700px)': {
              minHeight: 'calc(100vh - 56px)',
              padding: '50px 20px 20px 20px',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ textAlign: 'center', marginBottom: '50px' }}>
            <Typography variant="hboxg">{news.name}</Typography>
          </Box>
          <Box
            component="img"
            sx={{
              height: '400px',
              width: '600px',
              objectFit: 'cover',
              borderRadius: '10px',
              marginBottom: '50px',
              '@media (max-width:700px)': {
                width: '100%',
                height: 'fit-content',
              },
            }}
            alt="Photographie d'article"
            src={`https://api-gyozilla.onrender.com/${news.image}`}
          />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h7bnw">{news.description}</Typography>
          </Box>
        </Box>
        {/* bouton retour en version desktop */}
        <Box
          sx={{
            position: 'fixed',
            top: '57px',
            left: '10px',
            [theme.breakpoints.down('sm')]: {
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
      </>
    )
  } else {
    const newsArray = Array.isArray(news) ? news : [news]
    return (
      <>
        <Box sx={{ marginTop: '50px', textAlign: 'center' }}>
          <Typography variant="h7b" color="initial">
            Toutes nos actualités ici !
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{
            minHeight: 'calc(100vh - 71px)',
            '@media (max-width:700px)': {
              minHeight: 'calc(100vh - 56px)',
            },
            padding: '50px',
            justifyContent: 'center',
            width: 'unset',
            marginLeft: 'unset',
          }}
        >
          {newsArray.map((item) => (
            <Grid
              item
              lg={4}
              md={5}
              key={item.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: '0 !important',
                padding: '20px 50px 0 50px !important',
              }}
              className={'zoomEffect'}
            >
              <Link to={`/news/${item.id}`} style={{ textDecoration: 'none' }}>
                <Paper
                  elevation={5}
                  style={{
                    borderRadius: '20px',
                    width: '334px',
                    height: 'fit-content',
                  }}
                >
                  <img
                    src={`https://api-gyozilla.onrender.com/${item.image}`}
                    style={{
                      width: '334px',
                      height: '234px',
                      borderRadius: '20px 20px 0 0',
                    }}
                    alt="Actualités"
                  />
                  <Box
                    sx={{
                      padding: '10px 10px 10px 10px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h7bb" color="initial">
                      {item.name}
                    </Typography>
                  </Box>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </>
    )
  }
}

export default News
