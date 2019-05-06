import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Flex, Box, Text } from 'rebass'
import Img from 'gatsby-image'

import Spacer from './Spacer'
import Wrapper from './Wrapper'
import HomeJumbotron from './HomeJumbotron'

import { ReactComponent as Hozana } from '../assets/icons/logo-hozana.svg'

const HomeContent = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        fairfax: file(relativePath: { eq: "logo-fairfax.png" }) {
          childImageSharp {
            fixed(width: 190) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cec: file(relativePath: { eq: "logo-cec.jpg" }) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        talium: file(relativePath: { eq: "logo-talium.png" }) {
          childImageSharp {
            fixed(width: 190) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={files => (
      <>
        {console.log(data)}
        <HomeJumbotron title={data.title} siteTitle={data.subtitle} />
        <Box bg="#fff">
          <Wrapper>
            <Spacer size="5em" />
            <Text>{data.aboutContent && data.aboutContent.aboutContent}</Text>
            <Spacer />
            <Flex justifyContent="flex-end">
              <Link to="/contact">Me contacter</Link>
            </Flex>
            <Spacer size="3rem" />

            <Text as="h2">{data.clientsTitle}</Text>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection={['column', 'row']}
              css={{ filter: 'grayscale(1) opacity(0.6)' }}
            >
              <Box flex="1">
                <Img fixed={files.talium.childImageSharp.fixed} />
              </Box>
              <Box flex="1">
                <Img fixed={files.fairfax.childImageSharp.fixed} />
              </Box>
              <Box flex="1">
                <Hozana />
              </Box>
              <Box flex="1">
                <Img fixed={files.cec.childImageSharp.fixed} />
              </Box>
            </Flex>

            <Flex justifyContent="flex-end">
              <Link to="/parcours">En savoir plus sur mon parcours</Link>
            </Flex>

            <Spacer size="5em" />
          </Wrapper>
        </Box>
      </>
    )}
  />
)

export default HomeContent
