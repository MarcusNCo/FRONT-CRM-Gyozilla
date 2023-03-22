import { createTheme } from '@mui/material'
import { green, purple, red } from '@mui/material/colors'

const theme = createTheme({
  components: {
    //        Style des Alert        //
    MuiAlert: {
      styleOverrides: {
        standard: {
          color: 'green',
        },
        standardWarning: {
          color: 'blue',
        },
      },
    },
    //        Style des inputs        //
    MuiInput: {
      styleOverrides: {
        backgroundColor: '#ffrr12',
      },
    },
    //        Style des boutons        //
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#F8A500',
          backgroundColor: '#EAEAEA',
          border: '1px solid #F8A500',
          '&:hover': {
            color: '#EAEAEA',
            backgroundColor: '#F8A500',
            border: '1px solid #EAEAEA',
          },
        },
        outlined: {
          color: '#F8A500',
          backgroundColor: '#EAEAEA',
          border: '1px solid #F8A500',
        },
        contained: {
          color: '#EAEAEA',
          backgroundColor: '#F8A500',
          border: '1px solid #EAEAEA',
          '&:hover': {
            color: '#F8A500',
            backgroundColor: '#EAEAEA',
            border: '1px solid #F8A500',
          },
        },
        annule: {
          backgroundColor: 'red',
          color: 'green',
          border: '1px solid yellow',
        },
      },
    },
  },
  //        Style des typographies        //
  typography: {
    h5: {
      color: '#F8A500',
      fontSize: '4rem',
    },
    subTitle: {
      color: '#5F8D85',
      fontSize: '2rem',
    },
    p: {
      color: '#182A27',
      fontSize: '1rem',
    },
  },
  palette: {
    title: {
      main: '#F8A500',
    },
    subTitle: {
      main: '#5F8D85',
    },
    paragraph: {
      main: '#182A27',
    },
  },
  status: {
    success: green[500],
    error: red[500],
  },
})

export default theme
