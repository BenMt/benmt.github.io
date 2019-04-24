import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from 'rebass'

import GlobalStyle from '../utils/styles'
import theme from '../utils/theme'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, currentPathname, pageContext }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header currentPathname={currentPathname} langKey={pageContext.langKey} />

      <Box role="main">{children}</Box>
      <Footer langKey={pageContext.langKey} />
    </>
  </ThemeProvider>
)

export default Layout
