import { Link } from "react-router-dom";
import s from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <Link to={"/"}>На главную</Link>
    </div>
  );
};
