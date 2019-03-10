import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  Component,
} from 'react'

import Header from './Header'
import Footer from './Footer'

import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    border: '1px dotted red',
    width: '90%',
    margin: `${theme.spacing(4)}px auto ${theme.spacing(2)}px`,
    flexGrow: 1,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
}))

const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

const Page = props => {
  const classes = useStyles()

  const [authState, setAuthState] = useState(props.authState)

  useEffect(() => {
    setAuthState(props.authState)
  }, [props.authState])

  return (
    <AuthContext.Provider value={authState}>
      <div className={classes.root}>
        <Header />
        <Container id='main' elevation={1} className={classes.mainContainer}>
          {props.children}
        </Container>
        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export { useAuth, Page }
