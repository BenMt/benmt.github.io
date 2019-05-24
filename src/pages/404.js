import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Box, Text } from 'rebass'

import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/Seo'

export const NotFoundPage = ({ location, pageContext, lang, data }) => (
  <Layout
    withHeaderBackground
    currentPathname={location.pathname}
    pageContext={pageContext}
    title="404"
  >
    <SEO title={data.title} lang={lang} />
    <Wrapper>
      <Box pt="5rem" />
      <Text>{data.text && data.text.text}</Text>

      <Box pt="5rem" />

      <Box pt="5rem" />
    </Wrapper>
  </Layout>
)

const NotFoundFrPage = props => (
  <StaticQuery
    query={graphql`
      query NotFoundFrPage {
        allContentful404Page(filter: { node_locale: { eq: "fr" } }) {
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
        lang="fr"
        {...props}
      />
    )}
  />
)

export default NotFoundFrPage
