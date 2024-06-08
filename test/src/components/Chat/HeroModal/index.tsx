import { FC } from "react";
import { Modal } from "../../Modal";
import { RootButton } from "../../ui/RootButton";
import style from "./HeroModal.module.scss";

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
  return (
    <Modal isOpened={isOpened}>
      <div className={style.popup}>
        <h3 className={style.popup__title}>
          Отлично! Вот твой учитель. Нравится? :)
        </h3>
        {hero ? (
          <img className={style.popup__img} src={hero} />
        ) : (
          "Сейчас, сейчас...."
        )}
        <div className={style.popup__buttons}>
          <RootButton onClick={acceptHeroCB}>Круто!</RootButton>
          <RootButton onClick={declineHeroCB}>
            Ой... А можно мне другого?
          </RootButton>
        </div>
      </div>
    </Modal>
  );
};
