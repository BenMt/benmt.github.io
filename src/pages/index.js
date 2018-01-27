import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby-link'

import IndexPage from '../templates/IndexPage'

class IndexFrPage extends React.Component {
  constructor(args) {
    super(args)

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      if (navigator.language !== 'fr') {
        const homeUrl = withPrefix(`/en/`)
        window.___history.replace(homeUrl)
      }
    }
  }

  render() {
    const { data } = this.props
    return (
      <IndexPage
        author={data.site.siteMetadata.author}
        work={data.site.siteMetadata.work}
        contact={data.site.siteMetadata.contact}
        translations={data.site.siteMetadata.fr}
        lang="fr"
      />
    )
  }
}

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
