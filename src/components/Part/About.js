import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Section from '../Section'
import Title from '../Title'
import Wrapper from '../Wrapper'
import Flexbox from '../Flexbox'
import Spacer from '../Spacer'
import Separator from '../Separator'

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
  padding: 0 3em;
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
  height: 1px;
  background-color: #ccc;
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
      <Wrapper>
        <Flexbox flexDirection="row" alignItems="center">
          <Now>{translations.about.now}</Now>
          <Flexbox flexDirection="column">
            <Flexbox flexDirection="row" flex="1" alignItems="center">
              <NowText>{translations.about.free}</NowText>
            </Flexbox>
            <StyledSeparator noInside />
            <Flexbox flexDirection="row" flex="1" alignItems="center">
              <NowText>{translations.about.sideproject}</NowText>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </Wrapper>
    </NowFlexbox>
    <Spacer size="6em" />
    <Wrapper>
      <SkillsTitle>{translations.about.skills}</SkillsTitle>
      <Separator dark width="200px" />
      <Spacer />
      <SkillsSubTitle>Front-end</SkillsSubTitle>
      <p>JavaScript (ES6), React, Redux, Webpack, Flow, TypeScript</p>
      <Spacer />
      <SkillsSubTitle>{translations.about.junior}</SkillsSubTitle>
      <p>React Native, Reason Ml, Vue.js, GraphQL</p>
      <Spacer />
      <SkillsSubTitle>{translations.about.other}</SkillsSubTitle>
      <p>
        Git (Github), Heroku, Unix, Atom, Agile Scrum<br />
        Wordpress, Shopify, NodeJS, PHP (CodeIgniter)
      </p>
    </Wrapper>
  </SectionStyled>
)

About.propTypes = {
  translations: PropTypes.shape({}).isRequired
}

export default About
