import React from 'react'
import { Box, Text } from 'rebass'

import Spacer from './Spacer'
import Wrapper from './Wrapper'
import Separator from './Separator'
import Background from './Background'

const Jumbotron = ({ title, subtitle, alignImg }) => (
  <>
    <Background size="400px" alignImg={alignImg} />
    <Wrapper css={{ position: 'relative' }}>
      <Spacer size="5rem" />
      <Text as="h1" color="#fff">
        {title}
      </Text>
      <Box width="260px">
        <Separator />
      </Box>
      <Spacer size="1rem" />
      <Text as="h2" color="#fff">
        {subtitle}
      </Text>
      <Spacer size="5rem" />
    </Wrapper>
  </>
)

export default Jumbotron
