import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { ResumePage } from './parcours'

const ResumeEnPage = props => (
  <StaticQuery
    query={graphql`
      query ResumeEnPage {
        allContentfulWork(
          filter: { node_locale: { eq: "en" } }
          sort: { fields: date, order: DESC }
        ) {
          edges {
            node {
              id
              title
              date
              tag
              subtitle {
                subtitle
              }
              description {
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ResumePage data={data.allContentfulWork.edges} {...props} />
    )}
  />
)

export default ResumeEnPage
