import React, {useState} from "react";
import style from "./Game.module.scss";
import {Chat} from "../Chat";
import {PigBank} from "../PigBank";

export const Game: React.FC = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    return (
        <div className={style.wrapper}>
            <div className={style.hero}>?</div>
            <div className={style.chat}><Chat /></div>
            <div className={style.pig}>
                <PigBank isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
            </div>
        </div>
    )
}