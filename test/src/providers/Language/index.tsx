import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { Languages, LocalStorageKeys } from "../../types/enums";
import { isLanguage } from "../../utils/typeguards/isLanguage";

type LanguageContextType = {
  lang: keyof typeof Languages;
  setLang: (lang: keyof typeof Languages) => void;
};

const defaultValue: LanguageContextType = {
  lang: "EN",
  setLang: (lang) => {
    console.log(lang);
  },
};

export const LanguageContext = createContext(defaultValue);

export const LanguageContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [currLang, setCurrLang] = useState<keyof typeof Languages>("EN");

  const setLang = useCallback((lang: keyof typeof Languages) => {
    setCurrLang(lang);
    localStorage.setItem(LocalStorageKeys.language, lang);
  }, []);

  const value: LanguageContextType = useMemo(
    () => ({
      lang: currLang,
      setLang,
    }),
    [currLang, setLang]
  );

  useLayoutEffect(() => {
    const lang = localStorage.getItem(LocalStorageKeys.language);
    if (isLanguage(lang)) {
      setCurrLang(lang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
