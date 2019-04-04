import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  width: 100%;
  height: ${props => props.size || '400px'};
  z-index: -1;
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.color || '#292929'};
  opacity: ${props => (props.opacity ? props.opacity : '0.92')};
`

const Background = ({ image, alignImg, ...otherProps }) => (
  <Wrapper {...otherProps}>
    <Img fluid={image} imgStyle={{ objectPosition: alignImg || 'center' }} />
    <Mask />
  </Wrapper>
)
export default Background
