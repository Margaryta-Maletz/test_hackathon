import { Logo } from "../Logo";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <Logo />
      <div className={s.copy}>@copyright 2023 all right reserved</div>
    </div>
  );
};
