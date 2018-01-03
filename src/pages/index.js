import React from 'react'

import Intro from '../components/Part/Intro'
import Status from '../components/Part/Status'

const IndexPage = () => (
  <div css={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
    <Intro />
    <Status />
  </div>
)

export default IndexPage
