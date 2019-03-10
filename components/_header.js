import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import { useUser } from './UserProvider'

import {
  AppBar,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useTheme, makeStyles } from '@material-ui/styles'

import OBITextIcon from './OBITextIcon'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: '1',
  },
  header: {
    position: 'relative',
    width: 'auto',
    display: 'grid',
    backgroundColor: '#fff',
    color: `${theme.palette.primary.main}`,
  },
  navMenu: {
    margin: '0',
    marginLeft: '2rem',
    padding: '0',
    display: 'flex',
    justifySelf: 'end',
    fontSize: '1.5rem',
  },
  navMenuItem: {
    display: 'inline-block',
    marginRight: '2rem',
  },
  menuItem: {
    color: `${theme.palette.primary.main}`,
  },
  arrow: {
    fontSize: '10px',
    textAlign: 'center',
    fontFamily: 'wingdings',
    marginLeft: '5px',
    display: 'inline',
  },
  toolbarTitle: {
    color: `${theme.palette.secondary.main}`,
    overflow: 'visible',
  },
}))

const Header = props => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const { user, setUser } = useUser()

  const logout = event => {
    axios
      .get(`${process.env.APIS.identity}/logout`)
      .then((res, rej) => {
        if (res.status >= 400) {
          rej(new Error('logout error'))
        }
        //logout success
      })
      .catch(console.log)
      .finally(() => setUser())
  }

  const navLinks = {
    Home: '/',
    'My Family': '/my-family',
    'My Medical History': '/medical-history',
  }

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = event => {
    setAnchorEl(null)
  }

  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <OBITextIcon className={classes.toolbarTitle} />
        <Hidden smDown>
          <ul className={classes.navMenu}>
            {Object.keys(navLinks).map((k, index) => (
              <li key={index} className={classes.navMenuItem}>
                <Link className={classes.menuItem} to={navLinks[k]}>
                  {k}
                </Link>
              </li>
            ))}
          </ul>
          <div className={classes.grow} />
          <div className={[classes.navMenu, classes.navMenuItem].join(' ')}>
            {/* eventually this will change to a drop down menu with 'Profile', 'Settings', 'Log Out' if you are logged in */}
            {user ? (
              <Link className={classes.menuItem} onClick={logout} to='/'>
                {user.name}
                <p className={classes.arrow}>&#x25BD;</p>
              </Link>
            ) : (
              <a
                className={classes.menuItem}
                href={`${process.env.APIS.identity}/login`}
              >
                Login
                <p className={classes.arrow}>&#x25BD;</p>
              </a>
            )}
          </div>
        </Hidden>
        <Hidden smUp>
          {/* mobile devices get the expanding sandwich icon */}
          <div className={classes.grow} />
          <IconButton onClick={handleClickMenu} className={classes.navMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {Object.keys(navLinks).map((k, index) => (
              <MenuItem key={index} onClick={handleClose}>
                <Link className={classes.menuItem} to={navLinks[k]}>
                  {k}
                </Link>
              </MenuItem>
            ))}
            <MenuItem>
              {/* @todo: the following is used twice, so probably should extract it to its own component */}
              {user ? (
                <Link className={classes.menuItem} onClick={logout} to='/'>
                  {user.name}
                  <p className={classes.arrow}>&#x25BD;</p>
                </Link>
              ) : (
                <a
                  className={classes.menuItem}
                  href={`${process.env.APIS.identity}/login`}
                >
                  Login
                  <p className={classes.arrow}>&#x25BD;</p>
                </a>
              )}
            </MenuItem>
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default Header
