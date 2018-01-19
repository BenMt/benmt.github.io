import React from 'react'
import styled from 'styled-components'

const SeparatorStyled = styled.div`
  width: ${props => props.width || 'auto'};
  height: 2px;
  background: ${props => (props.dark ? '#000' : '#fff')};
  position: relative;
  margin-top: 20px;
`

const SeparatorInside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 2px;
  background: ${props => props.theme.color.main};
`

const Separator = ({ ...props }) => (
  <SeparatorStyled {...props}>
    <SeparatorInside />
  </SeparatorStyled>
)

export default Separator
