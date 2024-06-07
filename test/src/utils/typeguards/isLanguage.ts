import { Languages } from "../../types/enums";

const languages = ["EN", "RU", "UK", "PL", "ES"];

export const isLanguage = (
  str: string | null
): str is keyof typeof Languages => {
  if (str && typeof str === "string" && languages.includes(str)) {
    return true;
  }
  return false;
};
