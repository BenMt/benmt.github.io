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
        allContentfulResumePage(filter: { node_locale: { eq: "en" } }) {
          edges {
            node {
              title
              subtitle
              technicalTitle
              workTitle
              sideProjectTitle
              sideProjectContent {
                sideProjectContent
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ResumePage
        data={data.allContentfulResumePage.edges[0].node}
        works={data.allContentfulWork.edges}
        {...props}
      />
    )}
  />
)

export default ResumeEnPage
