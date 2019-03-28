import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.color || '#292929'};
  opacity: ${props => (props.opacity ? props.opacity : '0.9')};
`

const Background = ({ image }) => (
  <Wrapper>
    <Img fluid={image} />
    <Mask />
  </Wrapper>
)
export default Background
