import React, {useContext} from "react";
import style from './Welcome.module.scss'
import {Languages, LocalStorageKeys} from "../../types/enums.ts";
import en from "../../dictionary/english.ts";
import ru from "../../dictionary/russian.ts";
import uk from "../../dictionary/ukraine.ts";
import es from "../../dictionary/espanol.ts";
import pl from "../../dictionary/polish.ts";
import clsx from "clsx";
import {LanguageContext} from "../../providers/Language";
import {isLanguage} from "../../utils/typeguards/isLanguage.ts";

type WelcomeProp = {
    setIsWelcome: (val: boolean) => void;
}
export const Welcome: React.FC<WelcomeProp> = ({setIsWelcome}) => {
    const {setLang} = useContext(LanguageContext);
    const handlerOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const newValue = (event.target as HTMLDivElement).id;
        localStorage.setItem(LocalStorageKeys.language, newValue);
        if (isLanguage(newValue)) {
            setLang(newValue);
        }
        setIsWelcome(false)
    }
    return (
        <div className={style.wrapper} onClick={handlerOnClick}>
            <div id={Languages.EN} className={clsx(style.element, style.en)}>{en.welcome}</div>
            <div id={Languages.RU} className={clsx(style.element, style.ru)}>{ru.welcome}</div>
            <div id={Languages.UK} className={clsx(style.element, style.uk)}>{uk.welcome}</div>
            <div id={Languages.ES} className={clsx(style.element, style.es)}>{es.welcome}</div>
            <div id={Languages.PL} className={clsx(style.element, style.pl)}>{pl.welcome}</div>
        </div>
    )
}
