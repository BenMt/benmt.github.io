import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Box, Heading, Text } from 'rebass'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Wrapper from '../components/Wrapper'
import Spacer from '../components/Spacer'
import ContactJumbotron from '../components/ContactJumbotron'

const Link = styled.a`
  color: ${props => props.theme.color.main};
  text-decoration: none;
`

const ContactPage = () => (
  <StaticQuery
    query={graphql`
      query ContactPage {
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

        <ContactJumbotron
          siteTitle={data.contentfulSettings.title}
          background={data.contentfulSettings.background.fluid}
        />
        <Box bg="#fff">
          <Wrapper>
            <Box>
              <Spacer size="5em" />
              <Heading>Benoit Maigret - Freelance Frontend Developer</Heading>
              <Text as="small">Based in Mulhouse (France)</Text>
              <Spacer />
              <Text>
                You'd like to contact me, talk about your project, just send me
                an email to <em>hello[at]benoitmaigret.com</em> or you can find
                me on{' '}
                <Link
                  href="."
                  role="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Link>
                ,{' '}
                <Link
                  href="."
                  role="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>{' '}
                or{' '}
                <Link
                  href="."
                  role="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </Text>
              <Spacer size="5rem" />
            </Box>
          </Wrapper>
        </Box>
      </Layout>
    )}
  />
)

export default ContactPage
