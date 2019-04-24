import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Flex, Text } from 'rebass'

const Container = styled.header`
  width: 100%;
`

const StyledLink = styled.div`
  & > a {
    display: block;
    padding: 0.5rem 1rem;
    color: #fff;
    text-decoration: ${props => (props.isCurrent ? 'underline' : 'none')};

    @media screen and (min-width: 40em) {
      padding: 1rem;
    }

    &:hover {
      color: ${props => props.theme.color.main};
    }
  }
`

const LangContainer = styled.div`
  position: relative;
  @media screen and (min-width: 40em) {
    position: absolute;
    top: 0;
    right: 0;
  }
`

const Header = ({ currentPathname, langKey }) => (
  <StaticQuery
    query={graphql`
      query Header {
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
      <Container>
        <Flex
          role="navigation"
          color="#fff"
          alignItems={['center', 'flex-end']}
          justifyContent="center"
          flexDirection={['column-reverse', 'row']}
        >
          <Flex>
            {data[langKey].edges[0].node.mainNavigation.map(navElement => (
              <StyledLink
                key={navElement.id}
                isCurrent={currentPathname === navElement.url}
              >
                <Link to={navElement.url} role="link">
                  {navElement.title}
                </Link>
              </StyledLink>
            ))}
          </Flex>
          <LangContainer>
            <StyledLink>
              <Link
                to={
                  (currentPathname === '/parcours' ? '/en/resume' : '') ||
                  (currentPathname === '/en/resume' && '/parcours') ||
                  (langKey === 'fr'
                    ? `en${currentPathname}`
                    : currentPathname.replace('en', ''))
                }
                role="link"
              >
                <Text fontSize="0.8rem" css={{ lineHeight: '1.65rem' }}>
                  {langKey === 'fr' ? 'English version' : 'Version française'}
                </Text>
              </Link>
            </StyledLink>
          </LangContainer>
        </Flex>
      </Container>
    )}
  />
)

export default Header
