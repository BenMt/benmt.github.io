import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-translate'
import styled from 'styled-components'
import { Link } from 'react-scroll'

import ArrowDownIcon from 'react-icons/lib/ti/arrow-down'

import Section from '../Section'
import Separator from '../Separator'
import bakgroundImage from '../../assets/img/mac-apple-desk.jpg'

const SectionStyled = styled(Section)`
  padding: 8em;
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #292929;
  opacity: 0.8;
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
`

const Subtitle = styled.h2`
  text-align: left;
  color: #fff;
  font-size: 2em;
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
`

const Welcome = ({ t, ...props }) => (
  <SectionStyled background={bakgroundImage} fullHeight {...props}>
    <Content>
      <Title>{t('job')}</Title>
      <Separator width="200px" />
      <Subtitle>{t('name')}</Subtitle>
      <ScrollBottom to="about" smooth="easeInOutQuad" duration={1000}>
        <ArrowDownIcon />
      </ScrollBottom>
    </Content>
    <Mask />
  </SectionStyled>
)

Welcome.propTypes = {
  t: PropTypes.func.isRequired
}

export default translate('Welcome')(Welcome)
