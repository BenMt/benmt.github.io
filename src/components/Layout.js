import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from 'rebass'

import GlobalStyle from '../utils/styles'
import theme from '../utils/theme'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, currentPathname, mainNavigation }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header
        mainNavigation={mainNavigation}
        currentPathname={currentPathname}
      />

      <Box role="main">{children}</Box>
      <Footer mainNavigation={mainNavigation} />
    </>
  </ThemeProvider>
)

export default Layout
