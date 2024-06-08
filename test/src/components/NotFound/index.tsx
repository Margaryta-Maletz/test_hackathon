import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={style.wrapper}>
      <Link to={"/"}>На главную</Link>
    </div>
  );
};
