import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-scroll'

import ArrowDownIcon from 'react-icons/lib/ti/arrow-down'

import Section from '../Section'
import Mask from '../Mask'
import Separator from '../Separator'
import bakgroundImage from '../../assets/img/mac-apple-desk.jpg'

const SectionStyled = styled(Section)`
  padding: 8em;
  @media (max-width: 30em) {
    padding: 4em;
  }
`

const Content = styled.div`
  position: relative;
  top: 25%;
  z-index: 1;
`

const Title = styled.h1`
  text-align: left;
  font-size: 5em;
  color: #fff;
  @media (max-width: 50em) {
    font-size: 3.5em;
  }
  @media (max-width: 30em) {
    font-size: 3em;
  }
`

const Subtitle = styled.h2`
  text-align: left;
  color: #fff;
  font-size: 2em;
  @media (max-width: 50em) {
    font-size: 1.8em;
  }
`

const ScrollBottom = styled(Link)`
  display: block;
  width: 50px;
  height: 50px;
  margin: 2em auto 0;
  font-size: 3em;
  color: #fff;
  background-color: ${props => props.theme.color.main};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    opacity: 0.8;
  }
  svg {
    height: 100%;
  }
  @media (max-width: 50em) {
    display: none;
  }
`

const Welcome = ({ author, translations, ...props }) => (
  <SectionStyled background={bakgroundImage} fullHeight {...props}>
    <Content>
      <Title>{translations.job.short}</Title>
      <Separator width="200px" />
      <Subtitle>{author.name}</Subtitle>
      <ScrollBottom to="about" smooth="easeInOutQuad" duration={1000}>
        <ArrowDownIcon style={{ verticalAlign: 'top' }} />
      </ScrollBottom>
    </Content>
    <Mask opacity="0.85" />
  </SectionStyled>
)

Welcome.propTypes = {
  author: PropTypes.shape({}).isRequired,
  translations: PropTypes.shape({}).isRequired
}

export default Welcome
