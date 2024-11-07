import React, { createContext, useState, useEffect } from "react";

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleTranslation = () => {
    const selectLanguage = document.querySelector(".goog-te-combo");
    if (selectLanguage) {
      selectLanguage.value = isArabic ? "en" : "ar";
      selectLanguage.dispatchEvent(new Event("change"));
      setIsArabic(!isArabic);
    }
  };

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <TranslationContext.Provider value={{ isArabic, toggleTranslation }}>
      {children}
    </TranslationContext.Provider>
  );
};
