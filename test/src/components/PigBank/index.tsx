import { FC, HTMLAttributes, useRef } from "react";
import { Coin } from "./Coin";
import s from "./PigBank.module.scss";
import imgUrl from "./pig.webp";

type PigBankProp = HTMLAttributes<HTMLDivElement> & {
  isAnimated: boolean;
  setIsAnimated: (val: boolean) => void;
};

export const PigBank: FC<PigBankProp> = ({ isAnimated, setIsAnimated }) => {
  const coinRef = useRef<SVGSVGElement>(null);
  const pigRef = useRef<HTMLImageElement>(null);

  const startShake = () => {
    pigRef.current?.classList.add(s.shake);
    coinRef.current?.classList.remove(s.drop);
  };

  const stopShake = () => {
    pigRef.current?.classList.remove(s.shake);
    setIsAnimated(false);
  };

  const startAnimation = () => {
    if (isAnimated) {
      return;
    }

    setIsAnimated(true);
  };

  const animate = () => {
    if (!coinRef.current || !pigRef.current) {
      return;
    }

    coinRef.current.classList.add(s.drop);
    coinRef.current.addEventListener("animationend", startShake, {
      once: true,
    });
    pigRef.current.addEventListener("animationend", stopShake, { once: true });
  };

  if (isAnimated) {
    animate();
  }

  return (
    <div onClick={() => startAnimation()} className={s.wrapper}>
      <Coin ref={coinRef} className={s.coin} />
      <div className={s["pig-wrapper"]}>
        <img ref={pigRef} className={s.pig} src={imgUrl} alt="Pig bank" />
      </div>
    </div>
  );
};
