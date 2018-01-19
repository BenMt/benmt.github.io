import React from 'react'
import PropTypes from 'prop-types'
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

const Separator = ({ noInside, ...props }) => (
  <SeparatorStyled {...props}>
    {!noInside && <SeparatorInside />}
  </SeparatorStyled>
)

Separator.propTypes = {
  noInside: PropTypes.bool
}

Separator.defaultProps = {
  noInside: false
}

export default Separator
