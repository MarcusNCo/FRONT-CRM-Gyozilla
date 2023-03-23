import { createTheme } from '@mui/material'
import { green, purple, red } from '@mui/material/colors'

const theme = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        standard: {
          color: 'red',
        },
      },
    },
  },
  palette: {
    title: {
      main: purple[500],
    },
    subTitle: {
      main: green[500],
    },
    paragraph: {
      main: green[500],
    },
  },
  status: {
    success: red[500],
  },
})

export default theme
