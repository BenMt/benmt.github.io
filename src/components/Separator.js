import React from 'react'
import styled from 'styled-components'

const SeparatorStyled = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || '2px'};
  background: ${props => props.color || '#fff'};
  position: relative;
  margin-top: 20px;
`

const SeparatorInside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: ${props => props.height || '2px'};
  background: ${props => props.theme.color.main};
`

const Separator = ({ noInside, ...props }) => (
  <SeparatorStyled {...props}>
    {!noInside && <SeparatorInside />}
  </SeparatorStyled>
)

Separator.defaultProps = {
  noInside: false
}

export default Separator
