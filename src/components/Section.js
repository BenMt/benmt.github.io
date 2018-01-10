import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const SectionStyled = styled.section`
  position: relative;
  height: ${props => props.fullHeight && '100%'};
  padding: 2em 5em;
  box-sizing: border-box;
  ${props =>
    props.background &&
    css`
      background-image: url(${props.background});
      background-position: 50%;
      background-size: cover;
    `};
`

const Section = ({ children, background, ...otherProps }) => (
  <SectionStyled background={background} {...otherProps}>
    {children}
  </SectionStyled>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string
}

Section.defaultProps = {
  background: ''
}

export default Section
