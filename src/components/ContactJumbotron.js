import React from 'react'
import { Box, Text } from 'rebass'

import Spacer from './Spacer'
import Wrapper from './Wrapper'
import Separator from './Separator'
import Background from './Background'

const ContactJumbotron = ({ title }) => (
  <>
    <Background size="400px" alignImg="bottom" />
    <Wrapper css={{ position: 'relative' }}>
      <Spacer size="5rem" />
      <Text as="h1" color="#fff">
        {title}
      </Text>
      <Box width="260px">
        <Separator />
      </Box>
      <Spacer size="5rem" />
    </Wrapper>
  </>
)

export default ContactJumbotron
