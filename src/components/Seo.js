import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description, lang, meta, keywords, title }) => {
  const data = useStaticQuery(
    graphql`
      query Seo {
        contentfulMe {
          name
          job
        }
      }
    `
  )

  const metaDescription = description || data.contentfulMe.name

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title || `${data.contentfulMe.name} - ${data.contentfulMe.job}`}
      titleTemplate={
        title && `%s | ${data.contentfulMe.name} - ${data.contentfulMe.job}`
      }
      meta={[
        {
          name: `description`,
          content: `%s${data.contentfulMe.name} | ${data.contentfulMe.job}`
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
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
          content: data.contentfulMe.name
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
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
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
}

export default Seo
