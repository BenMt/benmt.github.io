import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

export default ({ children, ...otherProps }) => (
  <Wrapper {...otherProps}>{children}</Wrapper>
)
