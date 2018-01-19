import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin-bottom: ${props => (props.size ? props.size : '3em')};
`

const Spacer = ({ ...props }) => <Div {...props} />

export default Spacer
