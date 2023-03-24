import { createTheme } from '@mui/material'
import { green, purple, red } from '@mui/material/colors'

const theme = createTheme({
  components: {

    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '1rem',
          width: '90%',
          background: 'white',
          '& label.Mui-focused': {
            color: '#5F8D85',
          },
          '& label': {
            color: 'black',
            fontFamily: 'Garamond'
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#5F8D85',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'black',
            },
            '&:hover fieldset': {
              borderColor: '#d4af60',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#5F8D85',
            },
          },
        },
      },
    },

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
    //        style des liens footer       //
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#EAEAEA',
          '&:hover': {
            color: '#F8A500',
          },
        },
      },
    },
    //        Style des inputs        //
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#EAEAEA',
          color: '#F8A500',
          borderRadius: '1px',
          width: '20vw',
          marginTop: '50rem',
        },
      },
    },
    //        Style des cards        //
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#EAEAEA',
          border: '1px solid black',
          margin: '2px',
          width: '28vw',
          height: '30vh',
          color: '#F8A500',
          margin: '2rem',
          justifyContent: 'space-between',
          boxShadow:
            '3px 2px 1px -1px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 2px 3px 0px rgba(0,0,0,0.12)',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          width: '20vw',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          color: '#F8A500',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        },
      },
    },
    //        Style des boutons        //
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#F8A500',
          backgroundColor: '#EAEAEA',
          border: '1px solid #F8A500',
          marginTop: '3vh',
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
          marginTop: '3vh',
        },
        contained: {
          color: '#EAEAEA',
          backgroundColor: '#F8A500',
          border: '1px solid #EAEAEA',
          marginTop: '3vh',
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
    fontFamily: 'Garamond',
    h5: {
      color: '#F8A500',
      fontSize: '4rem',
      fontFamily: 'Garamond',
      fontWeight: 'bold',
    },
    subTitle: {
      color: '#5F8D85',
      fontSize: '2rem',
      fontFamily: 'Garamond',
    },
    p: {
      color: '#182A27',
      fontSize: '1rem',
      fontFamily: 'Garamond',
    },
    '@font-face': {
      fontFamily: 'Garamond',
      src: 'url("../fonts/Nunito-Regular.ttf") format("truetype")',
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontDisplay: 'swap',
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
