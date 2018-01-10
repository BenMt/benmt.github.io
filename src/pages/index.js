import React from 'react'
import { ThemeProvider } from 'styled-components'

import Absolute from '../components/Absolute'
import Navigation from '../components/Navigation'
import Welcome from '../components/Part/Welcome'
import About from '../components/Part/About'
import Work from '../components/Part/Work'
import Contact from '../components/Part/Contact'

const theme = {
  color: { main: '#f56d45', mainHover: '#fd8866' }
}

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Navigation />
      <Absolute>
        <Welcome />
        <About />
        <Work />
        <Contact />
      </Absolute>
    </div>
  </ThemeProvider>
)

export default IndexPage
