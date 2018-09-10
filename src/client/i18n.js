import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          'Home': 'Home',
          'START NOW!': 'START NOW!'
        }
      },
      it: {
        translations: {
          'Home': 'Home',
          'START NOW!': 'INIZIA ORA!'
        }
      }
    },
    fallbackLng: 'en',
    debug: false,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  })

export default i18n
