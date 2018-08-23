import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import GithubIcon from 'react-icons/lib/fa/github'
import FileIcon from 'react-icons/lib/go/file-text'

import Section from '../Section'
import Title from '../Title'
import Wrapper from '../Wrapper'
import Flexbox from '../Flexbox'
import Spacer from '../Spacer'

const Content = styled.div`
  position: relative;
  z-index: 1;
`

const StyledTitle = styled(Title)`
  margin: 0;
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

const StyledLink = styled.a`
  color: #000;
  text-decoration: none;
  margin: 0 4em;
  & > svg {
    font-size: 5em;
  }
  &:active {
    color: ${props => props.theme.color.mainHover};
    outline-width: 0;
  }
  &:hover {
    outline-width: 0;
    color: ${props => props.theme.color.main};
  }
  &:focus {
    outline-style: dotted;
    outline-color: ${props => props.theme.color.main};
    outline-width: thin;
  }
`
const StyledGatsbyLinK = StyledLink.withComponent(Link)

const About = ({ translations, contact, ...props }) => (
  <Section {...props}>
    <Wrapper>
      <Content>
        <StyledTitle>{translations.job.long}</StyledTitle>
        <Subtitle>{translations.location}</Subtitle>
        <Spacer />
        <p>{translations.about.description}</p>
        <Spacer size="4em" />
        {/* <Flexbox
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <StyledGatsbyLinK to="/cv">
            <FileIcon />
            <h3>CV</h3>
          </StyledGatsbyLinK>
          <StyledLink
            target="_blank"
            href={`../../assets/pdf/${translations.about.resume}`}
          >
            <FileIcon />
            <h3>Github</h3>
          </StyledLink>
          <StyledLink
            target="_blank"
            href={contact.find(item => item.type === 'github').link}
          >
            <GithubIcon />
            <h3>Github</h3>
          </StyledLink>
        </Flexbox> */}
      </Content>
    </Wrapper>
  </Section>
)

About.propTypes = {
  translations: PropTypes.shape({}).isRequired,
  contact: PropTypes.shape({}).isRequired
}

export default About
