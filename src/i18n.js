import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations.json";
import pricelist from "./pricelist.json";

const combinedResources = {};

Object.keys(translations).forEach((lang) => {
    combinedResources[lang] = {
      translation: translations[lang],
      pricelist: pricelist[lang],
    };
  });

  const storedLanguage = localStorage.getItem("language") || "rs";

i18n.use(initReactI18next).init({
  resources: combinedResources,
  lng: storedLanguage,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lang) => {
    localStorage.setItem("language", lang);
  });

export default i18n;
