import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  // 🔥 Load saved language OR default to Telugu
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("app-language") || "te";
  });

  // 🔥 Save language whenever it changes
  useEffect(() => {
    localStorage.setItem("app-language", lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === "te" ? "en" : "te"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
