import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import Absolute from '../components/Absolute'
import Navigation from '../components/Navigation'
import Welcome from '../components/Part/Welcome'
import About from '../components/Part/About'
import Work from '../components/Part/Work'
import Contact from '../components/Part/Contact'

import theme from '../utils/style/theme'

const StyledAbsolute = styled(Absolute)`
  @media (max-width: 30em) {
    margin-bottom: 60px;
  }
`

const IndexPage = ({ lang = 'en' }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Navigation />
      <StyledAbsolute>
        <Welcome id="welcome" lang={lang} />
        <About id="about" />
        <Work id="work" />
        <Contact id="contact" />
      </StyledAbsolute>
    </div>
  </ThemeProvider>
)

IndexPage.propTypes = {
  lang: PropTypes.string.isRequired
}

export default IndexPage
