import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import TRANSLATIONS_EN from '../../translations/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
    },
  });

i18n.changeLanguage('en');
