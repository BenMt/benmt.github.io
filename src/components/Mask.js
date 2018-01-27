import React from 'react'
import styled from 'styled-components'

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #292929;
  opacity: ${props => (props.opacity ? props.opacity : '0.7')};
`

export default ({ ...otherProps }) => <Mask {...otherProps} />
