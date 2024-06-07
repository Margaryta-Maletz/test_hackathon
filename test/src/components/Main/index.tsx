import { useDictionary } from "../../hooks/useDictionary";
import s from "./Main.module.scss";

export const Main = () => {
  const { welcome } = useDictionary();
  return <div className={s.wrapper}>{welcome}</div>;
};
