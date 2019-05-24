import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { NotFoundPage } from './404'

const NotFoundEnPage = props => (
  <StaticQuery
    query={graphql`
      query NotFoundEnPage {
        allContentful404Page(filter: { node_locale: { eq: "en" } }) {
          edges {
            node {
              title

              text {
                text
              }
            }
          }
        }
      }
    `}
    render={data => (
      <NotFoundPage
        data={data.allContentful404Page.edges[0].node}
        lang="en"
        {...props}
      />
    )}
  />
)

export default NotFoundEnPage
