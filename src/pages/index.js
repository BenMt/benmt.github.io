import React from 'react'
import { ThemeProvider } from 'styled-components'

import Absolute from '../components/Absolute'
import Navigation from '../components/Navigation'
import Welcome from '../components/Part/Welcome'
import About from '../components/Part/About'
import Work from '../components/Part/Work'

const theme = {
  color: { main: '#f56d45' }
}

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Navigation />
      <Absolute>
        <Welcome />
        <About />
        <Work />
      </Absolute>
    </div>
  </ThemeProvider>
)

export default IndexPage
