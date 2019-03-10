import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#df2626',
    },
    highlight: {
      main: '#6d6e71',
    },
  },
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"'].join(','),
    fontWeightMedium: 500,
    body1: {
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 12,
    },
    button: {
      // an example of how one would provide default styles
      // fontStyle: 'italic',
    },
    h1: {
      fontSize: '2.125rem',
      fontWeight: 400,
      lineHeight: 1.17,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.33,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.7,
    },
    /* Hopefully, nobody ever gets that far */
    h5: {
      fontSize: '1.1rem',
      fontWeight: 450,
      lineHeight: 1.75,
    },
    h6: {
      fontSize: '1.05rem',
      fontWeight: 450,
      lineHeight: 1.8,
    },
  },
})

export default theme
