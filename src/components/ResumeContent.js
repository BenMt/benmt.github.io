import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from 'rebass'

import Spacer from './Spacer'
import Wrapper from './Wrapper'
import ResumeJumbotron from './ResumeJumbotron'
import Separator from './Separator'
import Work from './Work'

// const Separator = styled.div`
//   height: 1px;
//   margin: 1rem 0;
//   background-color: #9a9a9a;
// `

const ResumeContent = ({ works }) => (
  <>
    <ResumeJumbotron title="Parocurs" />
    <Box bg="#fff">
      <Wrapper>
        <Box>
          <Spacer size="5em" />
          <Text as="h2">Technical Skills</Text>
          {/* <Text as="h3" mb="0rem">
            Frontend
          </Text>
          <Text>
            Javascript (ES6) - React - React Native - Typescript - Flow - Jest -
            GraphQL
          </Text> */}

          <Spacer />

          <Text as="h2">Work experience</Text>

          {works.map((work, i) => (
            <React.Fragment key={work.node.id}>
              <Work data={work.node} />
              {i < works.length - 1 && (
                <Separator noInside color="#9a9a9a" height="1px" />
              )}
            </React.Fragment>
          ))}

          <Spacer size="5rem" />
        </Box>
      </Wrapper>
    </Box>
  </>
)

export default ResumeContent
