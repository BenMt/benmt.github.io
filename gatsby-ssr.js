/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react'
import { TranslatorProvider } from 'react-translate'
import { renderToString } from 'react-dom/server'

import fr from './src/utils/intl/fr'
import en from './src/utils/intl/en'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const translations = { fr, en }
  const language = 'en'
  const TranslatedBody = () => (
    <TranslatorProvider translations={translations[language]}>
      {bodyComponent}
    </TranslatorProvider>
  )
  replaceBodyHTMLString(renderToString(<TranslatedBody />))
}
