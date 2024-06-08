import React, { HTMLAttributes } from "react";
import style from "./Logo.module.scss";
import clsx from "clsx";

type LogoProps = HTMLAttributes<HTMLDivElement>;

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className={clsx(style.wrapper, className)} {...props}>
      Logo
    </div>
  );
};
