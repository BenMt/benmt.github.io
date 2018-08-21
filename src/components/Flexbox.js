import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  position: relative;
  height: ${props => props.height};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-wrap: ${props => props.flexWrap};
  flex: ${props => props.flex};
`

const Flexbox = ({ children, ...otherProps }) => (
  <Box {...otherProps}>{children}</Box>
)

Flexbox.propTypes = {
  children: PropTypes.node.isRequired
}

export default Flexbox
