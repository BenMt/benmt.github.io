import React from 'react'
import { ThemeProvider } from 'styled-components'

import Absolute from '../components/Absolute'
import Navigation from '../components/Navigation'
import Intro from '../components/Part/Intro'
import Status from '../components/Part/Status'

const theme = {
  color: { main: '#f56d45' }
}

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Navigation />
      <Absolute>
        <Intro />
        <Status />
      </Absolute>
    </div>
  </ThemeProvider>
)

export default IndexPage
