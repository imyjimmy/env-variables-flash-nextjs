import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

/* this is how to make common tags take on styling that 
is specified in mui-theme.js */
const styles = theme => ({
  '@global': {
    body: {
      ...theme.typography.body1,
    },
    a: {
      textDecoration: 'none',
      color: '#666',
      '&:focus,&:hover,&:visited,&:active': {
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
      },
    },
    '.MuiButton-outlined': {
      border: '2px solid black',
    },
  },
})

function CustomCss() {
  return null
}

CustomCss.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CustomCss)
