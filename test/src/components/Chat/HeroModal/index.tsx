import { FC } from "react";
import { Modal } from "../../Modal";
import { RootButton } from "../../ui/RootButton";
import style from "./HeroModal.module.scss";
import { useDictionary } from "../../../hooks/useDictionary";

type HeroModalProps = {
  isOpened: boolean;
  acceptHeroCB: () => void;
  declineHeroCB: () => void;
  hero: string | null;
};

export const HeroModal: FC<HeroModalProps> = ({
  isOpened,
  acceptHeroCB,
  declineHeroCB,
  hero,
}) => {
  const { acceptTeacher, declineTeacher, itsYourTeacher, loading } =
    useDictionary();
  return (
    <Modal isOpened={isOpened}>
      <div className={style.popup}>
        <h3 className={style.popup__title}>{itsYourTeacher}</h3>
        {hero ? (
          <img className={style.popup__img} src={hero} />
        ) : (
          <p className={style.popup__loader}>{loading}</p>
        )}
        <div className={style.popup__buttons}>
          <RootButton onClick={acceptHeroCB}>{acceptTeacher}</RootButton>
          <RootButton onClick={declineHeroCB}>{declineTeacher}</RootButton>
        </div>
      </div>
    </Modal>
  );
};
