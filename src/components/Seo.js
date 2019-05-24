import React from 'react'
import Helmet from 'react-helmet'

const Seo = ({ lang, title }) => (
  <Helmet
    htmlAttributes={{
      lang
    }}
    title={title}
  />
)

export default Seo
