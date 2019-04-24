import React from 'react'
import Markdown from 'react-markdown'
import { Box, Flex, Text } from 'rebass'

const Work = ({ data }) => (
  <Box mt="3rem">
    <Flex mb="2rem">
      <Flex width="70px" p="1rem" alignItems="center">
        <Text as="strong">{data.date}</Text>
      </Flex>
      <Flex pl="1rem" flex="1" flexDirection={['column', 'row']}>
        <Flex
          flex="1"
          css={{ minWidth: '200px' }}
          flexDirection={'column'}
          justifyContent="center"
          mr="2rem"
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

        <Text flex="2 1 100%" css={{ textAlign: 'right' }}>
          {data.description && data.description.description}
        </Text>
      </Flex>
    </Flex>

    <Flex ml="70px" pl="1rem" justifyContent="flex-end">
      <Text as="em">{data.tag}</Text>
    </Flex>
  </Box>
)

export default Work
