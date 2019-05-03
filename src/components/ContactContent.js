import React from 'react'
import { Box, Text } from 'rebass'
import Markdown from 'react-markdown'
import styled from 'styled-components'

import Spacer from './Spacer'
import Wrapper from './Wrapper'
import ContactJumbotron from './ContactJumbotron'

const Content = styled.div`
  background-color: #fff;

  @media screen and (min-width: 40em) {
    min-height: calc(90vh - 330px);
  }
`

const ContactContent = ({ data }) => (
  <>
    <ContactJumbotron title={data.title} />
    <Content>
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
    </Content>
  </>
)

export default ContactContent
