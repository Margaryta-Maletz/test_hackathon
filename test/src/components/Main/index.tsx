import s from "./Main.module.scss";
import {Welcome} from "../Welcome";
import {useState} from "react";
import {useDictionary} from "../../hooks/useDictionary.ts";

export const Main = () => {
  const { welcome } = useDictionary();
const [isWelcome, setIsWelcome] = useState(true)
  return <div className={s.wrapper}>
    {
      isWelcome ?     <Welcome setIsWelcome={setIsWelcome}/> : welcome
    }
</div>;
};
