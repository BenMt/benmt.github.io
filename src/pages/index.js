import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import HomeContent from '../components/HomeContent'

export const HomePage = ({ location, pageContext, data }) => (
  <Layout
    withHeaderBackground
    currentPathname={location.pathname}
    pageContext={pageContext}
    title={data.title}
    subtitle={data.subtitle}
  >
    <SEO keywords={[]} />
    {console.log(data)}
    <HomeContent data={data} />
  </Layout>
)

const HomeFrPage = props => (
  <StaticQuery
    query={graphql`
      query HomeFrPage {
        allContentfulHomePage(filter: { node_locale: { eq: "fr" } }) {
          edges {
            node {
              title
              subtitle
              aboutContent {
                aboutContent
              }
              clientsTitle
            }
          }
        }
      }
    `}
    render={data => (
      <HomePage data={data.allContentfulHomePage.edges[0].node} {...props} />
    )}
  />
)

export default HomeFrPage
