import { FC } from "react";
import { Modal } from "../../Modal";
import style from "./WelcomeModal.module.scss";
import { LocalStorageKeys } from "../../../types/enums";
import { RootButton } from "../../ui/RootButton";
import { useDictionary } from "../../../hooks/useDictionary";

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
  const { isItYou, itsMe, itsNotMe } = useDictionary();
  return (
    <Modal isOpened={isOpened}>
      <div className={style.popup}>
        <h3 className={style.popup__title}>
          {isItYou} {localStorage.getItem(LocalStorageKeys.name)}?
        </h3>
        <div className={style.popup__buttons}>
          <RootButton onClick={itsMeCB}>{itsMe}</RootButton>
          <RootButton onClick={itsNotMeCB}>{itsNotMe}</RootButton>
        </div>
      </div>
    </Modal>
  );
};
