import React, {useState} from "react";
import style from "./Game.module.scss";
import {Chat} from "../Chat";
import {PigBank} from "../PigBank";

export const Game: React.FC = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isShowHero, setIsShowHero] = useState(false);
    const [score, setScore] = useState(0);
    const url = "cheburashka.jpg";

    const increaseScore = () => setScore(score + 1);
    return (
        <div className={style.wrapper}>
            {isShowHero ? <div className={style.hero}><img src={url} alt="hero" height={200}/></div> : <div/>}
            <div className={style.chat}><Chat setIsShowHero={setIsShowHero} increaseScore={increaseScore} /></div>
            {score > 0 ? <div className={style.pig}>
                <PigBank isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
            </div> : <div/>}
        </div>
    )
}