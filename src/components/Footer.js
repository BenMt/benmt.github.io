import React from 'react'
import styled, { withTheme } from 'styled-components'
// import { Link } from 'gatsby'
import { Box, Flex, Text, Link as ExternalLink } from 'rebass'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

import Link from './Link'
import Wrapper from './Wrapper'

const StyledLink = styled.a`
  font-size: 0.8rem;
  color: #fff;
  text-decoration: none;
  padding: 0.2rem;
`

const Icon = styled.div`
  display: flex;
  font-size: 2rem;
  @media (max-width: 50em) {
    font-size: 2.2rem;
  }
  @media (max-width: 30em) {
    font-size: 3rem;
  }
`

const Footer = ({ mainNavigation, theme }) => (
  <Box bg={theme.color.dark}>
    <Wrapper>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex color="#fff" alignItems="center" justifyContent="flex-start">
          {mainNavigation.map(navElement => (
            <Link key={navElement.id} to={navElement.url} role="link">
              {navElement.title}
            </Link>
          ))}
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <StyledLink
            href="https://www.gatsbyjs.org"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            Made with Gatsby
          </StyledLink>

          <StyledLink
            href="https://www.gatsbyjs.org"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            Source on Github
          </StyledLink>
        </Flex>
        <Flex alignItems="center">
          <Icon>
            <Link
              isExternal
              href="https://github.com/BenMt"
              color="#fff"
              target="_BLANK"
            >
              <FaGithub />
            </Link>
            <Link
              isExternal
              href="https://twitter.com/benoitmaigret"
              color="#fff"
              target="_BLANK"
            >
              <FaTwitter />
            </Link>
            <Link
              isExternal
              href="https://www.linkedin.com/in/benoitmaigret/"
              color="#fff"
              target="_BLANK"
            >
              <FaLinkedin />
            </Link>
          </Icon>
        </Flex>
      </Flex>
    </Wrapper>
  </Box>
)

export default withTheme(Footer)
