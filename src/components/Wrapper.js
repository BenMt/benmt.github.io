import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const WrapperStyled = styled.div`
  max-width: 880px;
  padding: 0 6em;
  margin: 0 auto;
  @media (max-width: 30em) {
    padding: 0 2em;
  )
`

const Wrapper = ({ children }) => <WrapperStyled>{children}</WrapperStyled>

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
