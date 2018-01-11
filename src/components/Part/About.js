import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-translate'
import styled from 'styled-components'

import Section from '../Section'
import Wrapper from '../Wrapper'
import Flexbox from '../Flexbox'

const SectionStyled = styled(Section)`
  padding: 4em 8em;
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
  font-size: 3em;
`

const Subtitle = styled.h2`
  text-align: left;
  color: #fff;
  font-size: 2em;
`

const Text = styled.p`
  flex: 1;
`

const SeparatorVertical = styled.div`
  width: 1px;
  height: 200px;
  background: #000;
  position: relative;
  margin: 0 2em;
`

const About = ({ t, ...props }) => (
  <SectionStyled {...props}>
    <Wrapper>
      <Content>
        <Title>{t('title')}</Title>
        <Text>{t('description')}</Text>
      </Content>
      <Flexbox flexDirection="row">
        <Text>{t('sydney')}</Text>
        <SeparatorVertical />
        <Text>{t('sideproject')}</Text>
      </Flexbox>
    </Wrapper>
  </SectionStyled>
)

About.propTypes = {
  t: PropTypes.func.isRequired
}

export default translate('About')(About)
