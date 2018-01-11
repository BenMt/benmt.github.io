import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { translate } from 'react-translate'
import GithubIcon from 'react-icons/lib/fa/github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedinIcon from 'react-icons/lib/fa/linkedin'
import MailIcon from 'react-icons/lib/fa/envelope'

import bakgroundImage from '../../assets/img/contact.jpg'

import Section from '../Section'
import Separator from '../Separator'
import Title from '../Title'

const SectionStyled = styled(Section)`
  padding: 10em 2em;
`

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #292929;
  opacity: 0.7;
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

const Contact = ({ t, theme, ...props }) => (
  <SectionStyled background={bakgroundImage} {...props}>
    <Content>
      <StyledTitle color="#FFF">{t('title')}</StyledTitle>
      <Separator />
      <IconContainer>
        <Link
          href="https://twitter.com/benoitmaigret"
          target="_blank"
          theme={theme}
        >
          <Icon>
            <TwitterIcon />
          </Icon>
          <Text>Twitter</Text>
        </Link>
        <Link href="https://github.com/BenMt" target="_blank" theme={theme}>
          <Icon>
            <GithubIcon />
          </Icon>
          <Text>Github</Text>
        </Link>
        <Link
          href="https://www.linkedin.com/in/benoitmaigret/"
          target="_blank"
          theme={theme}
        >
          <Icon>
            <LinkedinIcon />
          </Icon>
          <Text>Linkedin</Text>
        </Link>
        <Link href="mailto:contact+fwebsite@benoitmaigret.com" theme={theme}>
          <Icon>
            <MailIcon />
          </Icon>
          <Text>Email</Text>
        </Link>
      </IconContainer>
    </Content>
    <Mask />
  </SectionStyled>
)

Contact.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.shape({ color: PropTypes.object }).isRequired
}

export default translate('Contact')(withTheme(Contact))
