import React from 'react'

import { Grid, Paper, Typography } from '@material-ui/core'

/*
provided by the internet somewhere but not gonna use it probably
import MuiLink from '@material-ui/core/Link'
import ProTip from '../src/ProTip'
*/

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    border: '2px solid green',
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  intro: {
    margin: theme.spacing(1, 6, 4),
  },
  module: {
    width: '15rem',
    height: '20rem',
  },
  box: {
    border: '1px solid blue',
  },
  gridContainer: {
    width: '100%',
    margin: '5% auto',
    border: '1px dotted green',
  },
}))

export default function Index() {
  const classes = useStyles()

  return (
    <Paper className={classes.paper} elevation={8}>
      <Grid item xs className={classes.intro}>
        <Typography variant='h1' gutterBottom>
          process.env.NODE_ENV: {process.env.NODE_ENV}
        </Typography>
        <Typography variant='h2'>
          process.env.GRAPHQL_YOGA_ENDPOINT: {process.env.GRAPHQL_YOGA_ENDPOINT}
          process.env.STUFF: {process.env.STUFF}
          process.env.NEXT_SERVER_TEST_1: {process.env.NEXT_SERVER_TEST_1}
          process.env.NEXT_STATIC_TEST_1: {process.env.NEXT_STATIC_TEST_1}
          process.env.customKey: {process.env.customKey}
        </Typography>
        <div>Some other text.</div>
      </Grid>
    </Paper>
  )
}
