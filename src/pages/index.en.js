import React from 'react'
import PropTypes from 'prop-types'

import IndexPage from '../templates/IndexPage'

const IndexEnPage = ({ data }) => (
  <IndexPage
    author={data.site.siteMetadata.author}
    work={data.site.siteMetadata.work}
    contact={data.site.siteMetadata.contact}
    translations={data.site.siteMetadata.en}
  />
)

IndexEnPage.propTypes = {
  data: PropTypes.shape({}).isRequired
}

export default IndexEnPage
export const query = graphql`
  query IndexEnQuery {
    site {
      siteMetadata {
        author {
          name
        }
        contact {
          type
          value
          link
        }
        work {
          title
          link
          image
          skills
        }
        en {
          navigation {
            title
            href
          }
          job {
            short
            long
          }
          location
          work
          contact
          about {
            description
            now
            sydney
            sideproject
            skills
            other
            junior
          }
          cec
        }
      }
    }
  }
`
