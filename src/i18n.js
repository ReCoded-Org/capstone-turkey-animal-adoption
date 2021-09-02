import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import trTranslation from "./translation/tr/translation.json";
import enTranslation from "./translation/en/translation.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      
      tr: {
        translation: trTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    
    fallbackLng: "en",
    debug: true,
    interpolation: {
    escapeValue: false,
    },
  });

export default i18n;