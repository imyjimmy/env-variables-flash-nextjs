import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}))

const Footer = () => {
  const classes = useStyles()
  return <footer className={classes.footer}>Footer</footer>
}

export default Footer
