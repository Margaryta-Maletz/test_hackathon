import {FC, HTMLAttributes, useEffect, useRef} from "react";
import { Coin } from "./Coin";
import style from "./PigBank.module.scss";
import imgUrl from "./pig.webp";

type PigBankProp = HTMLAttributes<HTMLDivElement> & {
  isAnimated: boolean;
  setIsAnimated: (val: boolean) => void;
};

export const PigBank: FC<PigBankProp> = ({ isAnimated, setIsAnimated }) => {
  const coinRef = useRef<SVGSVGElement>(null);
  const pigRef = useRef<HTMLImageElement>(null);

  useEffect(() => { isAnimated && startAnimation()}, [isAnimated])

  const startShake = () => {
    pigRef.current?.classList.add(style.shake);
    coinRef.current?.classList.remove(style.drop);
  };

  const stopShake = () => {
    pigRef.current?.classList.remove(style.shake);
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

    coinRef.current.classList.add(style.drop);
    coinRef.current.addEventListener("animationend", startShake, {
      once: true,
    });
    pigRef.current.addEventListener("animationend", stopShake, { once: true });
  };

  if (isAnimated) {
    animate();
  }

  return (
    <div onClick={() => startAnimation()} className={style.wrapper}>
      <Coin ref={coinRef} className={style.coin} />
      <div className={style["pig-wrapper"]}>
        <img ref={pigRef} className={style.pig} src={imgUrl} alt="Pig bank" />
      </div>
    </div>
  );
};
