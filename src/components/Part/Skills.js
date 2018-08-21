import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Section from '../Section'
import Wrapper from '../Wrapper'
import Spacer from '../Spacer'
import Separator from '../Separator'
import Title from '../Title'

const SkillsTitle = styled(Title)`
  text-align: left;
`

const SkillsSubTitle = styled.h3`
  text-align: left;
`

const Skills = ({ translations, ...props }) => (
  <Section {...props}>
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
  </Section>
)

Skills.propTypes = {
  translations: PropTypes.shape({}).isRequired
}

export default Skills
