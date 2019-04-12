import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Flex } from 'rebass'

const Container = styled.header`
  width: 100%;
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: ${props => (props.isCurrent ? 'underline' : 'none')};
  padding: 1rem;

  &:hover {
    color: ${props => props.theme.color.main};
  }
`

const Header = ({ currentPathname, mainNavigation }) => (
  <Container>
    <Flex
      role="navigation"
      color="#fff"
      alignItems="flex-end"
      justifyContent="center"
    >
      {mainNavigation.map(navElement => (
        <StyledLink
          key={navElement.id}
          to={navElement.url}
          isCurrent={currentPathname === navElement.url}
          role="link"
        >
          {navElement.title}
        </StyledLink>
      ))}
    </Flex>
  </Container>
)

export default Header
