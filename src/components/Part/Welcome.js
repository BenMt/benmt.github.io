import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-translate'
import styled from 'styled-components'

import Section from '../Section'
import Wrapper from '../Wrapper'
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
  z-index: 1;
`

const Title = styled.h1`
  text-align: left;
  color: #fff;
`

const Subtitle = styled.h2`
  text-align: left;
  color: #fff;
  font-size: 2em;
`

const Welcome = ({ t }) => (
  <SectionStyled background={bakgroundImage}>
    <Wrapper>
      <Content>
        <Title>{t('job')}</Title>
        <Separator />
        <Subtitle>{t('name')}</Subtitle>
      </Content>
    </Wrapper>
    <Mask />
  </SectionStyled>
)

Welcome.propTypes = {
  t: PropTypes.func.isRequired
}

export default translate('Welcome')(Welcome)
