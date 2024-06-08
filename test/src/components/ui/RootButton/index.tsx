import { FC, HTMLAttributes } from "react";
import style from "./RootButton.module.scss";
import clsx from "clsx";

type RootButtonProps = HTMLAttributes<HTMLButtonElement>;

export const RootButton: FC<RootButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={clsx(style.btn, className)} {...props}>
      {children}
    </button>
  );
};
