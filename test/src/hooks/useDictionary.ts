import { useContext } from "react";
import { LanguageContext } from "../providers/Language";
import { Dictionary } from "../dictionary/type";
import { dictionary as ENDictionary } from "../dictionary/english";
import { dictionary as ESDictionary } from "../dictionary/espanol";
import { dictionary as PLDictionary } from "../dictionary/polish";
import { dictionary as RUDictionary } from "../dictionary/russian";
import { dictionary as UKDictionary } from "../dictionary/ukraine";
import { Languages } from "../types/enums";

const dictionary: Record<keyof typeof Languages, Dictionary> = {
  EN: ENDictionary,
  ES: ESDictionary,
  PL: PLDictionary,
  RU: RUDictionary,
  UK: UKDictionary,
};

export const useDictionary = () => {
  const { lang } = useContext(LanguageContext);
  const currDictionary = dictionary[lang];

  return currDictionary;
};
