import React from 'react'
import { Box, Text } from 'rebass'
import Markdown from 'react-markdown'

import Spacer from './Spacer'
import Wrapper from './Wrapper'

const ContactContent = ({ data }) => (
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
            <a {...props} target="_blank" rel="noopener noreferrer" /> // eslint-disable-line jsx-a11y/anchor-has-content
          )
        }}
      />
      <Spacer size="5rem" />
    </Box>
  </Wrapper>
)

export default ContactContent
