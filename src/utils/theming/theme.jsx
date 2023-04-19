import { createTheme } from '@mui/material'
import { green, red } from '@mui/material/colors'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'
const bp = createBreakpoints({
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    mmd: 1125,
    lg: 1390,
    xl: 1536,
  },
})
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
          fontSize: '1.2rem !important',
        },
      },
    },
    //        Style des inputs        //
    MuiInput: {
      styleOverrides: {
        root: {
          // backgroundColor: '#EAEAEA',
          color: '#F8A500',
          borderRadius: '1px',
          width: '20vw',
          marginTop: '50rem',
        },
      },
    },
    //        Style des Badges        //
    MuiBadge: {
      styleOverrides: {
        standard: {
          color: 'white',
          backgroundColor: '#F8A500'
        },
      },
    },
    //        Style des icones SVG       //
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
        },
      },
    },
    //        Style des cards        //
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          border: '1px solid black',
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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            color: 'white',
            backgroundColor: '#F8A500',
          },
          '&.active': {
            backgroundColor: '#F8A50050',
            borderRight: '2px solid #F8A500',
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: '#F8A500',
          alignSelf: 'center',
          justifySelf: 'center',
          fontSize: '2rem',
          [bp.down('lg')]: {
            fontSize: '1.8rem',
            padding: '8px',
          },
          [bp.down('mmd')]: {
            fontSize: '1.5rem',
            padding: '4px',
          },
          [bp.down('md')]: {
            fontSize: '1rem',
            padding: '0px',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: '1.0rem',
          [bp.down('lg')]: {
            fontSize: '0.8rem',
            padding: '8px',
          },
          [bp.down('md')]: {
            fontSize: '0.5rem',
            padding: '0px',
          },
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
          padding: '10px 5px 10px 5px',
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
      marginBottom: '10px',
    },
    h6: {
      color: '#F8A500',
      fontSize: '2.5rem',
      fontFamily: 'Garamond',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    hbox: {
      color: '#F8A500',
      fontSize: '1.5rem',
      fontFamily: 'Garamond',
      fontWeight: 'bold',
    },
    hboxb: {
      color: '#000000',
      fontSize: '1.5rem',
      fontFamily: 'Garamond',
      fontWeight: 'bold',
    },
    h7: {
      color: '#F8A500',
      fontSize: '1.2rem',
      fontFamily: 'Garamond',
      fontWeight: 'bold',
    },
    h7b: {
      color: '#000000',
      fontSize: '1.2rem',
      fontFamily: 'Garamond',
      fontWeight: 'bold',
    },
    h7w: {
      color: '#EAEAEA',
      fontSize: '1.0rem',
    },
    h8b: {
      color: '#000000',
      fontSize: '0.9rem',
      fontFamily: 'Garamond',
      fontWeight: 'bold',
    },
    subTitle: {
      color: '#5F8D85',
      fontSize: '2rem',
      fontFamily: 'Garamond',
    },
    p: {
      color: '#EAEAEA',
      fontSize: '0.9rem',
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
