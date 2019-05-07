import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import HomeContent from '../components/HomeContent'

export const HomePage = ({ location, pageContext, lang, data }) => (
  <Layout
    withHeaderBackground
    currentPathname={location.pathname}
    pageContext={pageContext}
    title={data.title}
    subtitle={data.subtitle}
  >
    <SEO title={data.metaTitle} lang={lang} />

    <HomeContent data={data} />
  </Layout>
)

const HomeFrPage = props => (
  <StaticQuery
    query={graphql`
      query HomeFrPage {
        allContentfulHomePage(filter: { node_locale: { eq: "fr" } }) {
          edges {
            node {
              metaTitle
              title
              subtitle
              aboutContent {
                aboutContent
              }
              clientsTitle
              contactText
              contactUrl
              resumeText
              resumeUrl
            }
          }
        }
      }
    `}
    render={data => (
      <HomePage
        data={data.allContentfulHomePage.edges[0].node}
        lang="fr"
        {...props}
      />
    )}
  />
)

export default HomeFrPage
