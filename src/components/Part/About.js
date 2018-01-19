import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-translate'
import styled from 'styled-components'

import Section from '../Section'
import Title from '../Title'
import Wrapper from '../Wrapper'
import Flexbox from '../Flexbox'
import Spacer from '../Spacer'
import Separator from '../Separator'

import SydneyOpearHouse from '../../assets/img/sydney-opera-house.svg'
import KProject from '../../assets/img/k.svg'

const SectionStyled = styled(Section)`
  padding: 4em 0;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

const StyledTitle = styled(Title)`
  margin-bottom: 0;
`

const Subtitle = styled.h2`
  font-size: 2em;
  margin-top: 0;
`

const SkillsTitle = styled.h2`
  text-align: left;
  margin-bottom: 0;
`

const SkillsSubTitle = styled.h3`
  text-align: left;
`

const Text = styled.p``
const NowText = styled.p`
  font-weight: lighter;
`
const Now = styled.p`
  text-align: center;
  font-size: 2em;
  margin: 0 1em;
  font-style: italic;
`

const StyledSeparator = styled(Separator)`
  margin: 0.5em 2em;
  margin-bottom: 1.8em;
  height: 1px;
  background-color: #ccc;
`
const ImgContainer = styled.div`
  min-width: 80px;
  margin: 0 2em;
  box-sizing: border-box;
`
const Image = styled.img`
  margin: auto;
`

const About = ({ t, ...props }) => (
  <SectionStyled {...props}>
    <Wrapper>
      <Content>
        <StyledTitle>{t('title')}</StyledTitle>
        <Subtitle>{t('location')}</Subtitle>
        <Spacer />
        <Text>{t('description')}</Text>
        <Spacer />
      </Content>
    </Wrapper>
    <Flexbox
      flexDirection="row"
      style={{ padding: '2em 6em', backgroundColor: '#efefef' }}
    >
      <Flexbox flexDirection="row" alignItems="center">
        <Now>{t('now')}</Now>
      </Flexbox>
      <Flexbox flexDirection="column">
        <Flexbox flexDirection="row" flex="1" alignItems="center">
          <ImgContainer>
            <Image
              style={{ width: '5em' }}
              src={SydneyOpearHouse}
              alt="Sydney Opera House icon"
            />
          </ImgContainer>
          <NowText>{t('sydney')}</NowText>
        </Flexbox>
        <StyledSeparator noInside />
        <Flexbox flexDirection="row" flex="1" alignItems="center">
          <ImgContainer>
            <Image style={{ width: '4em' }} src={KProject} alt="K icon" />
          </ImgContainer>
          <NowText>{t('sideproject')}</NowText>
        </Flexbox>
      </Flexbox>
    </Flexbox>
    <Spacer size="6em" />
    <Wrapper>
      <SkillsTitle>{t('skills')}</SkillsTitle>
      <Separator dark width="200px" />
      <Spacer />
      <SkillsSubTitle>Front-end</SkillsSubTitle>
      <p>
        <strong>HTML</strong>, <strong>CSS</strong> (BEM methodology, CSS
        Modules, inline styles, SASS), <strong>JavaScript</strong> (ES6),{' '}
        <strong>React</strong>, <strong>Redux</strong>, <strong>Webpack</strong>
      </p>
      <Spacer />
      <SkillsSubTitle>{t('other')}</SkillsSubTitle>
      <p>
        <strong>Wordpress</strong>, <strong>Shopify</strong>,{' '}
        <strong>NodeJS</strong>, <strong>PHP</strong> (CodeIgniter),{' '}
        <strong>Git</strong> (Github), <strong>Heroku</strong>,{' '}
        <strong>Unix</strong>, <strong>Atom</strong>,{' '}
        <strong>Agile Scrum</strong>
      </p>
      <Spacer />
      <SkillsSubTitle>{t('junior')}</SkillsSubTitle>
      <p>
        <strong>Reason Ml</strong>, <strong>Vue.js</strong>
      </p>
    </Wrapper>
  </SectionStyled>
)

About.propTypes = {
  t: PropTypes.func.isRequired
}

export default translate('About')(About)
