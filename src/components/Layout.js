import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Box } from 'rebass'

import GlobalStyle from '../utils/styles'
import theme from '../utils/theme'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Layout {
        contentfulSettings {
          title
          mainNavigation {
            id
            title
            url
          }
          background {
            fluid(quality: 90) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header mainNavigation={data.contentfulSettings.mainNavigation} />

          <Box role="main">{children}</Box>
          <Footer mainNavigation={data.contentfulSettings.mainNavigation} />
        </>
      </ThemeProvider>
    )}
  />
)

export default Layout
