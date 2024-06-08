import { FC, PropsWithChildren } from "react";
import { Portal } from "./Portal";
import style from "./Modal.module.scss";

type ModalProps = PropsWithChildren & {
  isOpened: boolean;
};

export const Modal: FC<ModalProps> = ({ children, isOpened }) => {
  if (!isOpened) {
    return null;
  }

  return (
    <Portal>
      <div className={style.wrapper}>
        <div className={style.overlay}>
          <div className={style.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
