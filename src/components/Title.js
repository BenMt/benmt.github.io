import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  margin: 0;
  color: ${props => props.color};
`

const Title = ({ children, ...props }) => (
  <StyledTitle {...props}>{children}</StyledTitle>
)

Title.propTypes = {
  children: PropTypes.node.isRequired
}

export default Title
