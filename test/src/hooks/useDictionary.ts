import { useContext } from "react";
import { LanguageContext } from "../providers/Language";
import { Dictionary } from "../dictionary/type";
import ENDictionary from "../dictionary/english";
import ESDictionary from "../dictionary/espanol";
import PLDictionary from "../dictionary/polish";
import RUDictionary from "../dictionary/russian";
import UKDictionary from "../dictionary/ukraine";
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
