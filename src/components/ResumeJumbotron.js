import React from 'react'
import { Box, Text } from 'rebass'

import Spacer from './Spacer'
import Wrapper from './Wrapper'
import Separator from './Separator'
import Background from './Background'

const ContactJumbotron = ({ siteTitle }) => (
  <>
    <Background />
    <Wrapper css={{ position: 'relative' }}>
      <Spacer size="5rem" />
      <Text as="h1" color="#fff">
        {`${siteTitle} | Freelance Frontend Developer`}
      </Text>
      <Box width="260px">
        <Separator />
      </Box>
      <Spacer size="1rem" />
      <Text color="#fff">
        Hi, I am Benoit Maigret, a freelance located in Mulhouse, France. I am a
        software developer specialized in front-end development of mobile & web
        applications. I love to design and develop UIs. I care about UX,
        responsiveness, performance, maintainability and scalability.
      </Text>
      <Spacer size="5rem" />
    </Wrapper>
  </>
)

export default ContactJumbotron
