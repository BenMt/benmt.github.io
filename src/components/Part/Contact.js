import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import GithubIcon from 'react-icons/lib/fa/github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import EmailIcon from 'react-icons/lib/fa/envelope'

import bakgroundImage from '../../assets/img/contact.jpg'

import Section from '../Section'
import Mask from '../Mask'
import Separator from '../Separator'
import Title from '../Title'

const SectionStyled = styled(Section)`
  padding: 10em 2em;
  @media (max-width: 50em) {
    padding: 8em 2em;
  }

  @media (max-width: 30em) {
    padding: 4em 2em;
    margin-bottom: 60px;
  }
`

const Content = styled.div`
  position: relative;
  max-width: 360px;
  margin: 0 auto;
  z-index: 1;
`

const Link = styled.a`
  position: relative;
  display: inline-block;
  margin: 1.5em;
  color: ${props => props.theme.color.main};
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  &:active {
    color: ${props => props.theme.color.mainHover};
    outline-width: 0;
  }
  &:hover {
    outline-width: 0;
  }
  &:focus {
    outline-style: dotted;
    outline-color: ${props => props.theme.color.main};
    outline-width: thin;
  }
`

const Icon = styled.div`
  font-size: 5em;
  @media (max-width: 50em) {
    font-size: 4em;
  }

  @media (max-width: 30em) {
    font-size: 3em;
  }
`

const StyledTitle = styled(Title)`
  margin: 0;
  text-align: left;
`

const Text = styled.span`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 1.2em;
  bottom: -1.6em;
  left: 0;
  color: ${props => props.theme.color.main};
  opacity: 0;
  transition: all 0.2s;
  ${Link}:hover & {
    opacity: 1;
  }
  ${Link}:focus & {
    opacity: 1;
  }
`

const IconContainer = styled.div``

const Contact = ({ contact, translations, theme, ...props }) => (
  <SectionStyled background={bakgroundImage} {...props}>
    <Content>
      <StyledTitle color="#FFF">{translations.contact}</StyledTitle>
      <Separator />
      <IconContainer>
        {contact.map(item => (
          <Link key={item.type} href={item.link} target="_blank" theme={theme}>
            <Icon>
              {item.type === 'email' && <EmailIcon />}
              {item.type === 'github' && <GithubIcon />}
              {item.type === 'twitter' && <TwitterIcon />}
              {item.type === 'linkedin' && <LinkedinIcon />}
            </Icon>
            <Text>{item.value}</Text>
          </Link>
        ))}
      </IconContainer>
    </Content>
    <Mask />
  </SectionStyled>
)

Contact.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      value: PropTypes.string,
      link: PropTypes.string
    })
  ).isRequired,
  translations: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({ color: PropTypes.object }).isRequired
}

export default withTheme(Contact)
