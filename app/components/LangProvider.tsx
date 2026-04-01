"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Locale, Translations, translations } from "../data/i18n";

interface LangContextType {
  locale: Locale;
  t: Translations;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({
  locale: "en",
  t: translations.en,
  toggle: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("locale") as Locale) || "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const toggle = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "vi" : "en"));
  }, []);

  return (
    <LangContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
