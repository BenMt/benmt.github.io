import React from 'react'
import { Box, Text } from 'rebass'
import Markdown from 'react-markdown'
import styled from 'styled-components'

import Spacer from './Spacer'
import Wrapper from './Wrapper'
import ContactJumbotron from './ContactJumbotron'
import { socialNetworksUrls } from '../utils/constants'

const Link = styled.a`
  color: ${props => props.theme.color.main};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Twitter = () => (
  <Link
    href={socialNetworksUrls.twitter}
    role="link"
    target="_blank"
    rel="noopener noreferrer"
  >
    Twitter
  </Link>
)

const Github = () => (
  <Link
    href={socialNetworksUrls.github}
    role="link"
    target="_blank"
    rel="noopener noreferrer"
  >
    Github
  </Link>
)

const LinkedIn = () => (
  <Link
    href={socialNetworksUrls.linkedin}
    role="link"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </Link>
)

const ContactContent = ({ data }) => (
  <>
    <ContactJumbotron title={data.title} />
    <Box bg="#fff">
      <Wrapper>
        <Box>
          <Spacer size="5em" />
          <Text as="h1" mb="0">
            {data.subtitle}
          </Text>
          <Text as="small">{data.location}</Text>
          <Spacer />
          <Markdown
            source={data.content && data.content.content}
            renderers={{
              link: props => (
                <a {...props} target="_blank" rel="noopener noreferrer" />
              )
            }}
          />
          <Spacer size="5rem" />
        </Box>
      </Wrapper>
    </Box>
  </>
)

export default ContactContent
