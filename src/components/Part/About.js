import React from 'react'
import PropTypes from 'prop-types'
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
  @media (max-width: 30em) {
    font-size: 2.5em;
  }
`

const Subtitle = styled.h2`
  font-size: 2em;
  margin-top: 0;
  @media (max-width: 30em) {
    font-size: 1.8em;
  }
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

const NowFlexbox = styled(Flexbox)`
  flex-direction: row;
  padding: 2em 6em;
  background-color: #efefef;
  @media (max-width: 50em) {
    flex-direction: column;
  }
  @media (max-width: 30em) {
    padding: 2em;
  }
`

const Now = styled.p`
  text-align: center;
  font-size: 2em;
  margin: 0 1em;
  font-style: italic;
  @media (max-width: 50em) {
    width: 100%;
    margin: 1em 0 2em;
  }
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
  @media (max-width: 30em) {
    margin-left: 0;
  }
`
const Image = styled.img`
  margin: auto;
`

const About = ({ translations, ...props }) => (
  <SectionStyled {...props}>
    <Wrapper>
      <Content>
        <StyledTitle>{translations.job.long}</StyledTitle>
        <Subtitle>{translations.location}</Subtitle>
        <Spacer />
        <Text>{translations.about.description}</Text>
        <Spacer size="6em" />
      </Content>
    </Wrapper>
    <NowFlexbox>
      <Flexbox flexDirection="row" alignItems="center">
        <Now>{translations.about.now}</Now>
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
          <NowText>{translations.about.sydney}</NowText>
        </Flexbox>
        <StyledSeparator noInside />
        <Flexbox
          flexDirection="row"
          flex="1"
          alignItems="center"
          style={{ margin: '1.8em 0' }}
        >
          <ImgContainer>
            <Image style={{ width: '4em' }} src={KProject} alt="K icon" />
          </ImgContainer>
          <NowText>{translations.about.sideproject}</NowText>
        </Flexbox>
      </Flexbox>
    </NowFlexbox>
    <Spacer size="6em" />
    <Wrapper>
      <SkillsTitle>{translations.about.skills}</SkillsTitle>
      <Separator dark width="200px" />
      <Spacer />
      <SkillsSubTitle>Front-end</SkillsSubTitle>
      <p>
        <strong>HTML</strong>, <strong>CSS</strong> (BEM methodology, CSS
        Modules, inline styles, SASS), <strong>JavaScript</strong> (ES6),{' '}
        <strong>React</strong>, <strong>Redux</strong>, <strong>Webpack</strong>
      </p>
      <Spacer />
      <SkillsSubTitle>{translations.about.other}</SkillsSubTitle>
      <p>
        <strong>Wordpress</strong>, <strong>Shopify</strong>,{' '}
        <strong>NodeJS</strong>, <strong>PHP</strong> (CodeIgniter),{' '}
        <strong>Git</strong> (Github), <strong>Heroku</strong>,{' '}
        <strong>Unix</strong>, <strong>Atom</strong>,{' '}
        <strong>Agile Scrum</strong>
      </p>
      <Spacer />
      <SkillsSubTitle>{translations.about.junior}</SkillsSubTitle>
      <p>
        <strong>Reason Ml</strong>, <strong>Vue.js</strong>,{' '}
        <strong>GraphQL</strong>
      </p>
    </Wrapper>
  </SectionStyled>
)

About.propTypes = {
  translations: PropTypes.shape({}).isRequired
}

export default About
