import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { withTheme } from 'styled-components'
import { Link } from 'gatsby'
import { Box, Flex, Text } from 'rebass'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

import Wrapper from './Wrapper'

const CodeLink = styled.a`
  color: #fff;
  text-decoration: none;
`

const SocialLink = styled(CodeLink)`
  display: flex;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  margin: 0 0.2rem;

  &:hover {
    color: ${props => props.theme.color.main};
  }
`

const GatsbyLink = styled(Link)`
  display: flex;
  font-size: 0.9rem;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;

  &:hover {
    color: ${props => props.theme.color.main};
    text-decoration: none;
  }
`

const Footer = ({ theme, langKey }) => (
  <StaticQuery
    query={graphql`
      query Footer {
        en: allContentfulSettings(filter: { node_locale: { eq: "en" } }) {
          edges {
            node {
              title
              job
              source
              mainNavigation {
                id
                title
                url
              }
            }
          }
        }
        fr: allContentfulSettings(filter: { node_locale: { eq: "fr" } }) {
          edges {
            node {
              title
              job
              source
              mainNavigation {
                id
                title
                url
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Box bg={theme.color.dark}>
        <Wrapper>
          <Flex
            flexDirection={['column', 'row']}
            justifyContent="space-between"
            alignItems="center"
            py="0.2rem"
          >
            <Flex
              flex="1"
              color="#fff"
              alignItems="center"
              justifyContent="flex-start"
            >
              {data[langKey].edges[0].node.mainNavigation.map(navElement => (
                <GatsbyLink key={navElement.id} to={navElement.url} role="link">
                  {navElement.title}
                </GatsbyLink>
              ))}
            </Flex>
            <Flex
              flex="1"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              m={['1rem 0', '0']}
            >
              <Text color="#fff" fontSize="0.7rem">
                {`${data[langKey].edges[0].node.title} | ${
                  data[langKey].edges[0].node.job
                }`}
              </Text>
              <Text color="#fff" fontSize="0.7rem">
                <CodeLink
                  href="https://github.com/BenMt/benmt.github.io"
                  target="_BLANK"
                  rel="noopener noreferrer"
                >
                  {data[langKey].edges[0].node.source}
                </CodeLink>
              </Text>
            </Flex>
            <Flex alignItems="center" flex="1" justifyContent="flex-end">
              <SocialLink
                href="https://github.com/BenMt"
                target="_BLANK"
                role="link"
                aria-label="Github"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://twitter.com/benoitmaigret"
                target="_BLANK"
                role="link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/benoitmaigret/"
                target="_BLANK"
                role="link"
                aria-label="LnkedIn"
              >
                <FaLinkedin />
              </SocialLink>
            </Flex>
          </Flex>
        </Wrapper>
      </Box>
    )}
  />
)

export default withTheme(Footer)
