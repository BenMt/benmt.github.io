import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-translate'
import styled from 'styled-components'

import Section from '../Section'
import Wrapper from '../Wrapper'

const Work = ({ t, ...props }) => (
  <Section {...props}>
    <Wrapper>
      <h1>WORK</h1>
    </Wrapper>
  </Section>
)

Work.propTypes = {
  t: PropTypes.func.isRequired
}

export default translate('Work')(Work)
