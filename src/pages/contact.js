import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ContactContent from '../components/ContactContent'

export const ContactPage = ({ location, pageContext, data }) => (
  <Layout
    withHeaderBackground
    currentPathname={location.pathname}
    pageContext={pageContext}
    title={data.title}
    alignImg="bottom"
  >
    <SEO keywords={[]} />
    <ContactContent data={data} />
  </Layout>
)

const ContactFrPage = props => (
  <StaticQuery
    query={graphql`
      query ContactPage {
        allContentfulContactPage(filter: { node_locale: { eq: "fr" } }) {
          edges {
            node {
              title
              subtitle
              content {
                content
              }
              location
            }
          }
        }
      }
    `}
    render={data => (
      <ContactPage
        data={data.allContentfulContactPage.edges[0].node}
        {...props}
      />
    )}
  />
)

export default ContactFrPage
