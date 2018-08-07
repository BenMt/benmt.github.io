import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Absolute from '../components/Absolute'
import Navigation from '../components/Navigation'
import Welcome from '../components/Part/Welcome'
import About from '../components/Part/About'
import Work from '../components/Part/Work'
import Contact from '../components/Part/Contact'

import theme from '../utils/style/theme'

const StyledAbsolute = styled(Absolute)`
  @media (max-width: 30em) {
    margin-bottom: 60px;
  }
`

const IndexPage = ({ author, contact, work, translations, lang }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={`${author.name} | ${translations.job.long}`}
        meta={[{ name: 'description', content: translations.job.long }]}
      >
        <html lang={lang} />
      </Helmet>
      <Navigation data={translations.navigation} />
      <StyledAbsolute>
        <Welcome id="welcome" author={author} translations={translations} />
        <About id="about" translations={translations} />
        <Work id="work" work={work} translations={translations} />
        <Contact id="contact" contact={contact} translations={translations} />
      </StyledAbsolute>
    </div>
  </ThemeProvider>
)

IndexPage.propTypes = {
  author: PropTypes.shape({}).isRequired,
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired,
  work: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      skills: PropTypes.string.isRequired
    })
  ).isRequired,
  translations: PropTypes.shape({}).isRequired,
  lang: PropTypes.string.isRequired
}

export default IndexPage
