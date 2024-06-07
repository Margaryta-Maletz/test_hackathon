import { Logo } from "../Logo";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={style.wrapper}>
      <Logo />
      <div className={style.copy}>@copyright 2023 all right reserved</div>
    </div>
  );
};
