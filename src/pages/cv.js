import React from 'react'
import PropTypes from 'prop-types'

import ResumePage from '../templates/ResumePage'

const ResumeFrPage = ({ data }) => (
  <ResumePage
    author={data.site.siteMetadata.author}
    work={data.site.siteMetadata.work}
    contact={data.site.siteMetadata.contact}
    translations={data.site.siteMetadata.fr}
    lang="fr"
  />
)

ResumeFrPage.propTypes = {
  data: PropTypes.shape({}).isRequired
}

export default ResumeFrPage
export const query = graphql`
  query ResumeFrQuery {
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
            free
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
