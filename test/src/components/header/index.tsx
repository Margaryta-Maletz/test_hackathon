import React, { useContext } from "react";
import style from "./Header.module.scss";
import { Languages } from "../../types/enums.ts";
import { Logo } from "../Logo";
import { LanguageContext } from "../../providers/Language/index.tsx";
import { isLanguage } from "../../utils/typeguards/isLanguage.ts";

export const Header: React.FC = () => {
  const { lang, setLang } = useContext(LanguageContext);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    if (isLanguage(newValue)) {
      setLang(newValue);
    }
  };
  return (
    <div className={style.wrapper}>
      <Logo />
      <div className={"hero"}>hero</div>
      <select value={lang} onChange={handleOnChange} className={"language"}>
        {Object.keys(Languages).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};
