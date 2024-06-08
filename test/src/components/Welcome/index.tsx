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
            <div id={Languages.EN} className={clsx(style.element, style.en)}>
                <img src="usa.png" alt={Languages.EN} height={50}/>
                {en.welcome}
            </div>
            <div id={Languages.UK} className={clsx(style.element, style.uk)}>
                <img src="ukraine.png" alt={Languages.UK} height={50}/>
                {uk.welcome}
            </div>
            <div id={Languages.ES} className={clsx(style.element, style.es)}>
                <img src="spain.png" alt={Languages.ES} height={50}/>
                {es.welcome}
            </div>
            <div id={Languages.RU} className={clsx(style.element, style.ru)}>
                <img src="russia.png" alt={Languages.RU} height={50}/>
                {ru.welcome}
            </div>
            <div id={Languages.PL} className={clsx(style.element, style.pl)}>
                <img src="poland.png" alt={Languages.PL} height={50}/>
                {pl.welcome}
            </div>
        </div>
    )
}
