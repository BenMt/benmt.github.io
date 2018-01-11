import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { translate } from 'react-translate'
import { Link as ScrollLink } from 'react-scroll'

import WelcomeIcon from 'react-icons/lib/fa/home'
import AboutIcon from 'react-icons/lib/fa/user'
import WorkIcon from 'react-icons/lib/fa/laptop'
import ContactIcon from 'react-icons/lib/fa/comments'

const NavigationStyled = styled.div`
  position: fixed;
  width: 40px;
  height: 100%;
  left: 0;
  z-index: 5;
`

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`

const Link = styled(ScrollLink)`
  width: 40px;
  height: 40px;
  float: left;
  color: #fff;
  margin-bottom: 1px;
  position: relative;
  background: ${props => props.theme.color.main};
  margin-bottom: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.5em;
`

const Text = styled.span`
  position: absolute;
  width: 120px;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  top: 0;
  left: 55px;
  text-align: center;
  color: #fff;
  background: #000;
  font-size: 1em;
  line-height: 1.8;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s;
  ${Link}:hover & {
    opacity: 1;
  }
  ${Link}:focus & {
    opacity: 1;
  }
  &:before {
    top: 50%;
    right: 100%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-right-color: #000;
    border-width: 4px;
    margin-top: -4px;
  }
`

const Navigation = ({ t }) => (
  <NavigationStyled>
    <Container>
      <Link to="welcome" smooth="easeInOutQuad" duration={1000}>
        <Icon>
          <WelcomeIcon />
        </Icon>
        <Text>{t('welcome')}</Text>
      </Link>
      <Link to="about" smooth="easeInOutQuad" duration={1000}>
        <Icon>
          <AboutIcon />
        </Icon>
        <Text>{t('about')}</Text>
      </Link>
      <Link to="work" smooth="easeInOutQuad" duration={1000}>
        <Icon>
          <WorkIcon />
        </Icon>
        <Text>{t('work')}</Text>
      </Link>
      <Link to="contact" smooth="easeInOutQuad" duration={1000}>
        <Icon>
          <ContactIcon />
        </Icon>
        <Text>{t('contact')}</Text>
      </Link>
    </Container>
  </NavigationStyled>
)

Navigation.propTypes = {
  t: PropTypes.func.isRequired
}

export default translate('Navigation')(Navigation)
