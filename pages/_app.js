import React from 'react'
import App from 'next/app'

import { StylesProvider, ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Meta from '../components/Meta'
import { Page } from '../components/Page'
import theme from '../style/theme'
import CustomCss from '../style/CustomCSS'

const Main = ({ children, apollo }) => {
  // can use hooks here
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <CustomCss />
        <Meta />
        {/* stylings are found in Page, this file is more about the plumbing */}
        <Page>{children}</Page>
      </StylesProvider>
    </ThemeProvider>
  )
}

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Main>
        <Component {...pageProps} />
      </Main>
    )
  }
}

export default MyApp
