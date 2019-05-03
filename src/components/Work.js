import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { Box, Flex, Text } from 'rebass'

const StyledText = styled(Text)`
  @media screen and (min-width: 52em) {
    text-align: right;
  }
`

const StyledFlex = styled(Flex)`
  flex-wrap: wrap;

  @media screen and (min-width: 52em) {
    flex-wrap: nowrap;
  }
`

const Work = ({ data }) => (
  <Box mt="3rem">
    <StyledFlex mb="2rem">
      <Flex
        width="70px"
        p={[0, 0, '1rem']}
        mb={['2rem', 0]}
        alignItems="center"
      >
        <Text as="strong">{data.date}</Text>
      </Flex>
      {/* <Flex pl="1rem" flex="1" flexDirection={['column', 'row']}> */}
      <Flex
        flex="1"
        css={{ minWidth: '200px' }}
        flexDirection={'column'}
        justifyContent="center"
        mx="2rem"
        mb={['2rem', 0]}
      >
        <Text as="h3" m="0">
          {data.title}
        </Text>

        <Markdown
          source={data.subtitle && data.subtitle.subtitle}
          renderers={{
            paragraph: props => <Text {...props} />,
            link: props => (
              <a {...props} target="_blank" rel="noopener noreferrer" />
            )
          }}
        />
      </Flex>

      <StyledText flex="2 1 100%">
        {data.description && data.description.description}
      </StyledText>
      {/* </Flex> */}
    </StyledFlex>

    <Flex css={{ textAlign: 'right' }}>
      <Text as="em" width="100%">
        {data.tag}
      </Text>
    </Flex>
  </Box>
)

export default Work
