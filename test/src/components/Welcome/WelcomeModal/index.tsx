import { FC } from "react";
import { Modal } from "../../Modal";
import style from "./WelcomeModal.module.scss";
import { LocalStorageKeys } from "../../../types/enums";
import { RootButton } from "../../ui/RootButton";

type WelcomeModalProps = {
  isOpened: boolean;
  itsMeCB: () => void;
  itsNotMeCB: () => void;
};

export const WelcomeModal: FC<WelcomeModalProps> = ({
  isOpened,
  itsMeCB,
  itsNotMeCB,
}) => {
  return (
    <Modal isOpened={isOpened}>
      <div className={style.popup}>
        <h3 className={style.popup__title}>
          Привет! Это ты, {localStorage.getItem(LocalStorageKeys.name)}?
        </h3>
        <div className={style.popup__buttons}>
          <RootButton onClick={itsMeCB}>Привет! Это я!</RootButton>
          <RootButton onClick={itsNotMeCB}>
            Кажется, вы обознались...
          </RootButton>
        </div>
      </div>
    </Modal>
  );
};
