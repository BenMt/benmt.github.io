import React from 'react'
import PropTypes from 'prop-types'

import IndexPage from '../templates/IndexPage'

const IndexFrPage = ({ data }) => (
  <IndexPage
    author={data.site.siteMetadata.author}
    work={data.site.siteMetadata.work}
    contact={data.site.siteMetadata.contact}
    translations={data.site.siteMetadata.fr}
  />
)

IndexFrPage.propTypes = {
  data: PropTypes.shape({}).isRequired
}

export default IndexFrPage
export const query = graphql`
  query IndexFrQuery {
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
        fr {
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
