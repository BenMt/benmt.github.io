import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Flex } from 'rebass'

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
`

const Header = ({ siteTitle, mainNavigation }) => (
  <Container>
    <Flex m="1em" color="#fff" alignItems="flex-end" justifyContent="center">
      {/* <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1> */}
      {mainNavigation.map(navElement => (
        <StyledLink key={navElement.id} to={navElement.url} role="link">
          {navElement.title}
        </StyledLink>
      ))}
    </Flex>
  </Container>
)

export default Header
