import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'

import Section from '../components/Section'
import Absolute from '../components/Absolute'
import Flexbox from '../components/Flexbox'
import Mask from '../components/Mask'
import bakgroundImage from '../assets/img/mac-apple-desk.jpg'
import Profile from '../components/Resume/Profile'

import theme from '../utils/style/theme'

const SectionStyled = styled(Section)`
  padding: 8em;
  @media (max-width: 30em) {
    padding: 4em;
  }
`

const IndexPage = ({ author, translations, lang }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={`${author.name} | ${translations.job.long}`}
        meta={[{ name: 'description', content: translations.job.long }]}
      >
        <html lang={lang} />
      </Helmet>
      <Absolute>
        <SectionStyled background={bakgroundImage} fullHeight>
          <Absolute>
            <Mask color="#fff" opacity="0.9" />
          </Absolute>
          <Flexbox>
            <Profile author={author} translations={translations} />
          </Flexbox>
        </SectionStyled>
      </Absolute>
    </div>
  </ThemeProvider>
)

IndexPage.propTypes = {
  author: PropTypes.shape({}).isRequired,
  translations: PropTypes.shape({}).isRequired,
  lang: PropTypes.string.isRequired
}

export default IndexPage
