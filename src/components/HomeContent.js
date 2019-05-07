import React from 'react'
import Markdown from 'react-markdown'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Flex, Box, Text } from 'rebass'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Spacer from './Spacer'
import Wrapper from './Wrapper'
import theme from '../utils/theme'

import { ReactComponent as Hozana } from '../assets/icons/logo-hozana.svg'

const StyledLink = styled(Link)`
  font-family: ${theme.font.secondary};
  background-color: ${theme.color.main};
  border-radius: 50px;
  color: #fff;
  padding: 0.5rem 1.5rem;
`

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
        <Box bg="#fff">
          <Wrapper>
            <Spacer size="5em" />
            <Markdown
              source={data.aboutContent && data.aboutContent.aboutContent}
              renderers={{
                strong: props => <strong>{props.children}</strong>
              }}
            />

            <Spacer />

            <Flex justifyContent="center">
              <StyledLink to={data.contactUrl}>{data.contactText}</StyledLink>
            </Flex>
            <Spacer size="5rem" />

            <Text as="h2">{data.clientsTitle}</Text>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection={['column', 'row']}
              css={{ filter: 'grayscale(1) opacity(0.6)' }}
            >
              <Box flex="1" mr={[0, '1rem']}>
                <Img fixed={files.talium.childImageSharp.fixed} />
              </Box>
              <Box flex="1" mx={[0, '1rem']}>
                <Img fixed={files.fairfax.childImageSharp.fixed} />
              </Box>
              <Box
                flex="1"
                mx={[0, '1rem']}
                width="200px"
                css={{ minWidth: '200px' }}
              >
                <Hozana />
              </Box>
              <Box flex="1" mx={[0, '1rem']}>
                <Img fixed={files.cec.childImageSharp.fixed} />
              </Box>
            </Flex>

            <Spacer />
            <Flex justifyContent="center">
              <StyledLink to={data.resumeUrl}>{data.resumeText}</StyledLink>
            </Flex>

            <Spacer size="5em" />
          </Wrapper>
        </Box>
      </>
    )}
  />
)

export default HomeContent
