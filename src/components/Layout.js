import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Box } from 'rebass'

import GlobalStyle from '../utils/styles'
import theme from '../utils/theme'
import Header from './Header'
import Footer from './Footer'
import Jumbotron from './Jumbotron'

const Content = styled.div`
  background-color: #fff;

  @media screen and (min-width: 40em) {
    min-height: calc(90vh - 330px);
  }
`

const Layout = ({
  children,
  currentPathname,
  pageContext,
  title,
  subtitle,
  alignImg
}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header currentPathname={currentPathname} langKey={pageContext.langKey} />

      <Box role="main">
        <Jumbotron title={title} subtitle={subtitle} alignImg={alignImg} />
        <Content>{children}</Content>
      </Box>
      <Footer langKey={pageContext.langKey} />
    </>
  </ThemeProvider>
)

export default Layout
