/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import { TranslatorProvider } from 'react-translate'

import fr from './src/utils/intl/fr'
import en from './src/utils/intl/en'

const translations = { fr, en }
const language = Object.prototype.hasOwnProperty.call(
  translations,
  navigator.language
)
  ? navigator.language
  : 'en'

exports.wrapRootComponent = Root => {
  const Wrapper = () => (
    <TranslatorProvider translations={translations[language]}>
      <Root.Root />
    </TranslatorProvider>
  )
  return Wrapper
}
