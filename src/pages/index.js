import React from 'react'
import styled from 'styled-components'
import { Heading } from 'rebass'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Wrapper from '../components/Wrapper'

const HomePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Wrapper>
      <Heading>Développeur web</Heading>
    </Wrapper>
  </Layout>
)

export default HomePage
