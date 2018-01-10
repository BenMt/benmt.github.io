import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AbsoluteStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const Absolute = ({ children }) => <AbsoluteStyled>{children}</AbsoluteStyled>

Absolute.propTypes = {
  children: PropTypes.node.isRequired
}

export default Absolute
