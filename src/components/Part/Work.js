import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-translate'
import styled from 'styled-components'

import Hozana from '../../assets/img/hozana.jpg'
import Lilith from '../../assets/img/logo_lilith.jpg'
import Cec from '../../assets/img/logo_CEC.jpg'
import Zbaren from '../../assets/img/zbaeren.jpg'

import Section from '../Section'
import Wrapper from '../Wrapper'
import Flexbox from '../Flexbox'

const Info = styled.div`
  height: 100%;
  top: 0;
  opacity: 0;
  visibility: hidden;
  box-sizing: border-box;
`
const FlexboxText = styled(Flexbox)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 2em;
  transition: 0.4s;
  opacity: 0;
  transform: scale(0.8);
  color: #fff;
`

const Background = styled.div`
  height: 100%;
  transition: 0.1s;
  background-color: ${props => props.theme.color.main};
  opacity: 0;
`
const Title = styled.h3`
  font-weight: normal;
  font-size: ${props => (props.fontSize ? props.fontSize : '3em')};
  text-decoration: none;
  margin: 0;
`

const Skills = styled.span`
  font-family: ${props => props.theme.font.secondary};
  font-weight: 200;
  font-style: italic;
`

const Item = styled.a`
  position: relative;
  display: block;
  width: 280px;
  height: 170px;
  margin: 1em;
  box-sizing: border-box;
  box-shadow: 0 0 20px 0px #6d6d6d;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  &:hover {
    ${Info} {
      visibility: visible;
      opacity: 1;
    }
    ${Background} {
      opacity: 1;
    }
    ${FlexboxText} {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const StyledFlexbox = styled(Flexbox)`
  width: 100%;
  max-width: 650px;
  margin: auto;
  flex-flow: row wrap;
  ${'' /* &:after {
    content: '';
    flex: auto;
  } */};
`

const Work = ({ t, ...props }) => (
  <Section {...props}>
    <Wrapper>
      <h1>WORK</h1>
      <StyledFlexbox justifyContent="center">
        <Item
          href="https://hozana.org"
          target="_blank"
          style={{ backgroundImage: `url(${Hozana})` }}
        >
          <Info>
            <Background />
            <FlexboxText justifyContent="center" flexDirection="column">
              <Title>Hozana</Title>
              <Skills>React - Redux - Webpack</Skills>
            </FlexboxText>
          </Info>
        </Item>
        <Item
          href="https://www.lilithparis.com"
          target="_blank"
          style={{ backgroundImage: `url(${Lilith})` }}
        >
          <Info>
            <Background />
            <FlexboxText justifyContent="center" flexDirection="column">
              <Title>Lilith</Title>
              <Skills>Shopify</Skills>
            </FlexboxText>
          </Info>
        </Item>
        <Item
          href="https://cec-zev.eu"
          target="_blank"
          style={{ backgroundImage: `url(${Cec})` }}
        >
          <Info>
            <Background />
            <FlexboxText justifyContent="center" flexDirection="column">
              <Title fontSize="2em">Conseil Européen de la consommation</Title>
              <Skills>Typo3 - Sass - Gulp</Skills>
            </FlexboxText>
          </Info>
        </Item>
        <Item
          href="http://zbaeren.ch/"
          target="_blank"
          style={{ backgroundImage: `url(${Zbaren})` }}
        >
          <Info>
            <Background />
            <FlexboxText justifyContent="center" flexDirection="column">
              <Title>Zbäeren</Title>
              <Skills>Wordpress - Sass - JS</Skills>
            </FlexboxText>
          </Info>
        </Item>
      </StyledFlexbox>
    </Wrapper>
  </Section>
)

Work.propTypes = {
  t: PropTypes.func.isRequired
}

export default translate('Work')(Work)
