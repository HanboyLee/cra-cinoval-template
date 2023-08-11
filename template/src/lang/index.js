import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

import zh from './zh';
import en from './en';

const resources = {
  zh: {
    translation: zh,
  },
  en: {
    translation: en,
  },
};
i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // fallbackLng: 'en',
    // zh 文本是中文; en 文本是英文
    lng: 'en',
    detection: {
      caches: ['localStorage', 'sessionStorage', 'cookie'],
    },
  });

export default i18n;
