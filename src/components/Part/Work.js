import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Title from '../Title'
import Section from '../Section'
import Flexbox from '../Flexbox'
import Spacer from '../Spacer'

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
const Text = styled.h3`
  font-weight: normal;
  font-size: ${props => (props.fontSize ? props.fontSize : '3em')};
  text-decoration: none;
  margin: 0;
`

const Skills = styled.span`
  font-weight: 200;
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
  max-width: 800px;
  margin: auto;
  flex-flow: row wrap;
`

const Work = ({ work, translations, ...props }) => (
  <Section {...props}>
    <Title>{translations.work}</Title>
    <StyledFlexbox justifyContent="center">
      {work.map(item => (
        <Item
          key={item.link}
          href={item.link}
          target="_blank"
          style={{
            backgroundImage: `url(${require(`../../assets/img/${item.image}`)})`
          }}
        >
          <Info>
            <Background />
            <FlexboxText justifyContent="center" flexDirection="column">
              <Text fontSize={!item.title && '2em'}>
                {item.title || translations.cec}
              </Text>
              <Skills>{item.skills}</Skills>
            </FlexboxText>
          </Info>
        </Item>
      ))}
    </StyledFlexbox>
    <Spacer size="4em" />
  </Section>
)

Work.propTypes = {
  work: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      skills: PropTypes.string.isRequired
    })
  ).isRequired,
  translations: PropTypes.shape({}).isRequired
}

export default Work
