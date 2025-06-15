import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./en/translation.json";
import kuTranslation from "./ku/translation.json";
import arTranslation from "./ar/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ku: { translation: kuTranslation },
    ar: { translation: arTranslation },
  },
  lng: "en",
  fallbackLng: "ku",

  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
