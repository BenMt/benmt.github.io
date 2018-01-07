import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { translate } from 'react-translate'

import './index.css'

const TemplateWrapper = ({ children, t }) => (
  <div>
    <Helmet
      title={t('title')}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
}

export default translate('Helmet')(TemplateWrapper)
