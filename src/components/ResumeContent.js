import React from 'react'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { Box, Flex, Text } from 'rebass'

import Spacer from './Spacer'
import Wrapper from './Wrapper'
import Separator from './Separator'
import Work from './Work'

import { ReactComponent as JsIcon } from '../assets/icons/js.svg'
import { ReactComponent as TsIcon } from '../assets/icons/ts.svg'
import { ReactComponent as ReasonIcon } from '../assets/icons/reason.svg'
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg'
import { ReactComponent as ReduxIcon } from '../assets/icons/redux.svg'
import { ReactComponent as WebpackIcon } from '../assets/icons/webpack.svg'
import { ReactComponent as FlowIcon } from '../assets/icons/flow.svg'
import { ReactComponent as GraphqlIcon } from '../assets/icons/graphql.svg'
import { ReactComponent as JestIcon } from '../assets/icons/jest.svg'

const Icon = styled.div`
  display: flex;
  width: 6rem;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  transition: filter 500ms;
  filter: grayscale(1) contrast(0.9) opacity(0.8);

  &:hover {
    filter: initial;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const icons = [
  [
    { title: 'JavaScript', Component: JsIcon },
    { title: 'TypeScript', Component: TsIcon },
    { title: 'ReasonMl', Component: ReasonIcon }
  ],
  [
    { title: 'React', Component: ReactIcon },
    { title: 'Redux', Component: ReduxIcon },
    { title: 'Webpack', Component: WebpackIcon }
  ],
  [
    { title: 'Flow', Component: FlowIcon },
    { title: 'Graphql', Component: GraphqlIcon },
    { title: 'Jest', Component: JestIcon }
  ]
]

const ResumeContent = ({ works, data }) => (
  <>
    <Box bg="#fff">
      <Wrapper>
        <Box>
          <Spacer size="5em" />

          <Text as="h2">{data.technicalTitle}</Text>
          <Flex
            flexWrap="wrap"
            m="-0.5rem"
            flexDirection={['column', 'column', 'row']}
          >
            {icons.map(group => (
              <Flex flex={1} flexWrap="nowrap" justifyContent="space-around">
                {group.map(({ title, Component }) => (
                  <Icon key={title}>
                    <Component
                      style={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        maxHeight: '5rem',
                        overflow: 'hidden',
                        padding: title === 'Redux' ? '0.3rem' : 0
                      }}
                    />
                    <Text fontSize="0.8rem" textAlign="center">
                      {title}
                    </Text>
                  </Icon>
                ))}
              </Flex>
            ))}
          </Flex>

          <Spacer size="5rem" />

          <Text as="h2">{data.workTitle}</Text>
          {works.map((work, i) => (
            <React.Fragment key={work.node.id}>
              <Work data={work.node} />
              {i < works.length - 1 && (
                <Separator noInside color="#9a9a9a" height="1px" />
              )}
            </React.Fragment>
          ))}

          <Spacer size="5rem" />

          <Text as="h2">{data.sideProjectTitle}</Text>

          <Markdown
            source={
              data.sideProjectContent &&
              data.sideProjectContent.sideProjectContent
            }
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

export default ResumeContent
