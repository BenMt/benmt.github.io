import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import HomeContent from '../components/HomeContent'

const HomePage = ({ location, pageContext }) => (
  <Layout
    withHeaderBackground
    currentPathname={location.pathname}
    pageContext={pageContext}
  >
    <SEO keywords={[]} />

    <HomeContent />
  </Layout>
)

export default HomePage
