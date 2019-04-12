import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ContactContent from '../components/ContactContent'

const ContactPage = props => (
  <StaticQuery
    query={graphql`
      query ContactEnPage {
        allContentfulSettings(filter: { node_locale: { eq: "en" } }) {
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
        allContentfulContactPage(filter: { node_locale: { eq: "en" } }) {
          edges {
            node {
              title
              subtitle
              content
              location
            }
          }
        }
      }
    `}
    render={data => (
      <Layout
        withHeaderBackground
        currentPathname={props.location.pathname}
        mainNavigation={data.allContentfulSettings.edges[0].node.mainNavigation}
      >
        <SEO keywords={[]} />
        <ContactContent data={data.allContentfulContactPage.edges[0].node} />
      </Layout>
    )}
  />
)

export default ContactPage
