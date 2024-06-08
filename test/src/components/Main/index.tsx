import style from "./Main.module.scss";
import { Welcome } from "../Welcome";
import { useState } from "react";
import { Game } from "../Game";

export const Main = () => {
  const [isWelcome, setIsWelcome] = useState(true);
  return (
    <div className={style.wrapper}>
      {isWelcome ? <Welcome setIsWelcome={setIsWelcome} /> : <Game />}
    </div>
  );
};
