import React from "react";
import translationEn from "../translations/en.json";
import translationIt from "../translations/it.json";

const LangContext = React.createContext();

export function useLangContext() {
  return React.useContext(LangContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = React.useState(
    localStorage.getItem("tellow_lang") || "english"
  );
  const [langData, setLangData] = React.useState(translationEn);

  React.useEffect(() => {
    localStorage.setItem("tellow_lang", language);

    if (language) {
      setLanguage(language);
      let data;
      if (language === "english") {
        data = translationEn;
      } else if (language === "italian") {
        data = translationIt;
      }
      setLangData(data);
    } else {
      setLanguage("english");
      setLangData(translationEn);
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    langData,
    setLangData,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
