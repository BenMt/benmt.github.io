import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const StyledGatsbyLink = styled(GatsbyLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.main};
  }
`

const Link = ({ isExternal, children, ...otherProps }) => (
  <StyledGatsbyLink as={isExternal && 'a'} color="#fff" {...otherProps}>
    {children}
  </StyledGatsbyLink>
)

export default Link
