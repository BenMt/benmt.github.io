import React from 'react'
import Helmet from 'react-helmet'

const Seo = ({ description, lang, meta, keywords, title }) => (
  <Helmet
    htmlAttributes={{
      lang
    }}
    title={''}
    titleTemplate={''}
    meta={[
      {
        name: `description`,
        content: `%s`
      },
      {
        property: `og:title`,
        content: title
      },
      {
        property: `og:description`,
        content: description
      },
      {
        property: `og:type`,
        content: `website`
      },
      {
        name: `twitter:card`,
        content: `summary`
      },
      {
        name: `twitter:creator`,
        content: title
      },
      {
        name: `twitter:title`,
        content: title
      },
      {
        name: `twitter:description`,
        content: description
      }
    ]
      .concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `)
            }
          : []
      )
      .concat(meta)}
  />
)

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
}

export default Seo
