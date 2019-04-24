import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const NotFoundPage = ({ pageContext }) => (
  <StaticQuery
    query={graphql`
      query NotFoundPage {
        allContentfulSettings(filter: { node_locale: { eq: "fr" } }) {
          edges {
            node {
              title
              mainNavigation {
                id
                title
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout
        withHeaderBackground
        mainNavigation={data.allContentfulSettings.edges[0].node.mainNavigation}
        pageContext={pageContext}
      >
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )}
  />
)

export default NotFoundPage
