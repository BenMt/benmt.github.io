import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const WrapperStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Wrapper = ({ children }) => <WrapperStyled>{children}</WrapperStyled>

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
