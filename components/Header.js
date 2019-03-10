import React, { useState } from 'react'
import Nav from './Nav'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

import axios from 'axios'

import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  SvgIcon,
  Toolbar,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import { makeStyles } from '@material-ui/styles'
import teaIcon from '../images/indie-tea-logo.png'

Router.onRouteChangeStart = () => {
  console.log('onRouteChangeStart triggered')
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  console.log('onRouteChangeComplete triggered')
  NProgress.done()
}

Router.onRouteChangeError = () => {
  console.log('onRouteChangeError triggered')
  NProgress.done()
}

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: '1',
  },
  header: {
    position: 'relative',
    width: 'auto',
    width: 'auto',
    display: 'grid',
    display: 'grid',
    backgroundColor: '#fff',
    color: '#000',
  },
  logo: {
    color: 'black',
    width: '140px',
    [theme.breakpoints.up('md')]: {
      width: '170px',
    },
  },
  navMenu: {
    margin: '0',
    marginLeft: '2rem',
    padding: '0',
    display: 'flex',
    justifySelf: 'end',
    [theme.breakpoints.down(1000)]: {
      fontSize: '1.05rem',
    },
    [theme.breakpoints.up(1000)]: {
      fontSize: '1.25rem',
    },
  },
  item: {
    display: 'inline-block',
    marginRight: '1.5rem',
  },
  button: {
    margin: '2% .5rem',
  },
  link: {
    color: `${theme.palette.primary.main}`,
  },
}))

const Header = ({ router }) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)

  /* @todo: logout function */

  /* can be abstracted to its own file @todo */
  const navLinks = {
    Home: '/',
    Teas: '/teas', //menu, Teas by Region
    Sale: '/sale',
    'Staff Picks': '/staff-picks',
    About: '/about',
  }

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = event => {
    setAnchorEl(null)
  }

  return (
    <>
      <Hidden smDown implementation='css'>
        <AppBar className={classes.header} elevation={4}>
          <Toolbar>
            {/* Material UI's Hidden component causes a brief flicker 
            when rendered on the server side.
          */}
            <Nav />
            <div className={classes.grow} />
            <div
              className={[classes.navMenu].join(' ')}
              style={{ display: 'inline-block' }}
            >
              <Button variant='outlined' className={classes.button}>
                Sign Up
              </Button>
              <Button
                href='/login'
                variant='outlined'
                className={classes.button}
              >
                Login
              </Button>
              <IconButton
                color='primary'
                className={classes.button}
                aria-label='Add to shopping cart'
              >
                <ShoppingCartIcon />
              </IconButton>{' '}
            </div>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden smUp>
        {/* small screen */}
        <div>small screen (todo)</div>
      </Hidden>
    </>
  )
}

export default Header
