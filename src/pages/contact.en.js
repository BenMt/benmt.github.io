import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { ContactPage } from './contact'

const ContactEnPage = props => (
  <StaticQuery
    query={graphql`
      query ContactEnPage {
        allContentfulContactPage(filter: { node_locale: { eq: "en" } }) {
          edges {
            node {
              metaTitle
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
        lang="en"
        {...props}
      />
    )}
  />
)

export default ContactEnPage
