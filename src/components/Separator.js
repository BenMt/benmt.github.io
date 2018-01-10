import React from 'react'
import styled from 'styled-components'

const SeparatorStyled = styled.div`
  width: 200px;
  height: 2px;
  background: #fff;
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

const Separator = () => (
  <SeparatorStyled>
    <SeparatorInside />
  </SeparatorStyled>
)

export default Separator
