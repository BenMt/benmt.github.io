import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ResumeContent from '../components/ResumeContent'

export const ResumePage = ({ location, pageContext, data, works }) => (
  <Layout
    withHeaderBackground
    currentPathname={location.pathname}
    pageContext={pageContext}
  >
    <SEO keywords={[]} />
    <ResumeContent works={works} data={data} />
  </Layout>
)

const ResumeFrPage = props => (
  <StaticQuery
    query={graphql`
      query ResumeFrPage {
        allContentfulWork(
          filter: { node_locale: { eq: "fr" } }
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
        allContentfulResumePage(filter: { node_locale: { eq: "fr" } }) {
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

export default ResumeFrPage
