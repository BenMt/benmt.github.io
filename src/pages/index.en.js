import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import HomePage from './index'

const HomeEnPage = props => (
  <StaticQuery
    query={graphql`
      query HomeEnPage {
        allContentfulHomePage(filter: { node_locale: { eq: "en" } }) {
          edges {
            node {
              metaTitle
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
      <HomePage
        data={data.allContentfulHomePage.edges[0].node}
        lang="en"
        {...props}
      />
    )}
  />
)

export default HomeEnPage
