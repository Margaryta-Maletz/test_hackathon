import React, { useState } from "react";
import style from "./Game.module.scss";
import { Chat } from "../Chat";
import { PigBank } from "../PigBank";
import {LocalStorageKeys} from "../../types/enums.ts";

export const Game: React.FC = () => {
    const isNew = !localStorage.getItem(LocalStorageKeys.name);
    const [isAnimated, setIsAnimated] = useState(false);
    const [isShowHero, setIsShowHero] = useState(!isNew);
    const [score, setScore] = useState(isNew ? 0 : Number(localStorage.getItem(LocalStorageKeys.score)));
    const [url, setUrl] =useState(localStorage.getItem(LocalStorageKeys.teacherImg) || 'cheburashka.jpg');

    const increaseScore = () => {
        setIsAnimated(true);
        setScore(score + 1)
        localStorage.setItem(LocalStorageKeys.score, score.toString());
    };

    return (
        <div className={style.wrapper}>
            {isShowHero ? <div className={style.hero}><img src={url} alt="hero" height={200} width={200}/></div> : <div/>}
            <div className={style.chat}><Chat isNew={isNew} setIsShowHero={setIsShowHero} setUrl={setUrl} increaseScore={increaseScore}/></div>
            {score > 0 ? <div className={style.pig}>
                <PigBank isAnimated={isAnimated} setIsAnimated={setIsAnimated}/>
            </div> : <div/>}
        </div>
    )
}
