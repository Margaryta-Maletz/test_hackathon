import { HTMLAttributes } from "react";
import s from "./Logo.module.scss";
import clsx from "clsx";

type LogoProps = HTMLAttributes<HTMLDivElement>;

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(s.wrapper, className)} {...props}>
      Logo
    </div>
  );
};
