import Link from 'next/link'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
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
  link: {
    color: `${theme.palette.primary.main}`,
  },
}))

const Nav = () => {
  const classes = useStyles()

  const navLinks = {
    Home: '/',
  }
  return (
    <ul className={classes.navMenu}>
      {Object.keys(navLinks).map((k, index) => (
        <li key={index} className={classes.item}>
          <Link href={navLinks[k]}>
            <a className={classes.link}>{k}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav
