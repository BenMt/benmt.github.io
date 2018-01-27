import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'

import WelcomeIcon from 'react-icons/lib/fa/home'
import AboutIcon from 'react-icons/lib/fa/user'
import WorkIcon from 'react-icons/lib/fa/laptop'
import ContactIcon from 'react-icons/lib/fa/comments'

const NavigationStyled = styled.div`
  position: fixed;
  width: 40px;
  height: 100vh;
  left: 0;
  z-index: 5;
  @media (max-width: 30em) {
    width: 100%;
    height: 60px;
    bottom: 0;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 30em) {
    flex-direction: row;
    background: ${props => props.theme.color.main};
  }
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${props => props.theme.color.main};
  font-size: 1.5em;
`

const Link = styled(ScrollLink)`
  width: 40px;
  height: 40px;
  float: left;
  color: #fff;
  margin-bottom: 1px;
  position: relative;
  margin-bottom: 4px;
  cursor: pointer;
  ${Icon}:hover & {
    opacity: 0.8;
  }
  @media (max-width: 30em) {
    height: 60px;
    width: 80px;
    margin: 0;
    border-right: 1px solid #ffa990;
    &:last-child {
      border: none;
    }
  }
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
  @media (max-width: 50em) {
    display: none;
  }
`

const Navigation = ({ data }) => (
  <NavigationStyled>
    <Container>
      {data.map(item => (
        <Link
          key={item.href}
          to={item.href}
          smooth="easeInOutQuad"
          duration={1000}
        >
          <Icon>
            {item.href === 'welcome' && <WelcomeIcon />}
            {item.href === 'about' && <AboutIcon />}
            {item.href === 'work' && <WorkIcon />}
            {item.href === 'contact' && <ContactIcon />}
          </Icon>
          <Text>{item.title}</Text>
        </Link>
      ))}
    </Container>
  </NavigationStyled>
)

Navigation.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string
    })
  ).isRequired
}

export default Navigation
