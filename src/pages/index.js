import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Box, Text, Heading } from 'rebass'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Wrapper from '../components/Wrapper'
import Spacer from '../components/Spacer'
import HomeJumbotron from '../components/HomeJumbotron'

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulSettings {
          title
          mainNavigation {
            id
            title
            url
          }
          background {
            fluid(quality: 90) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    `}
    render={data => (
      <Layout withHeaderBackground>
        <SEO keywords={[]} />

        <HomeJumbotron
          siteTitle={data.contentfulSettings.title}
          background={data.contentfulSettings.background.fluid}
        />

        <Box bg="#fff">
          <Wrapper>
            <Spacer />
            <Heading>About me</Heading>
            <Text>
              Je suis développeur web spécialisé front-end. Passionné par le
              milieu web, j'aime mon métier et la possibilité de pouvoir
              collaborer dans des projets ambitieux et humains. Après quelques
              années en agence, je me suis lancé en tant que freelance en 2014.
            </Text>
            <Spacer />
          </Wrapper>
        </Box>
      </Layout>
    )}
  />
)

export default HomePage
