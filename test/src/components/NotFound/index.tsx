import { Link } from "react-router-dom";
import s from "./NotFound.module.scss";
import { PigBank } from "../PigBank";
import { useState } from "react";

export const NotFound = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  return (
    <div className={s.wrapper}>
      <Link to={"/"}>На главную</Link>
      <div className={s.test}>
        <PigBank isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
      </div>
    </div>
  );
};
