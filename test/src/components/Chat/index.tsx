import React, { KeyboardEvent, useEffect, useState } from "react";
import { useDictionary } from "../../hooks/useDictionary.ts";
import style from "./Chat.module.css";
import { HeroModal } from "./HeroModal/index.tsx";
import { getStorageUserData } from "../../utils/getStorageUserData.ts";
import { LocalStorageKeys } from "../../types/enums.ts";

type ChatProps = {
  setIsShowHero: (val: boolean) => void;
  increaseScore: () => void;
};

const mockHeroes = [
  "https://freelance.ru/img/portfolio/pics/00/34/71/3436834.jpg",
  "https://avatars.dzeninfra.ru/get-zen_doc/3488488/pub_5f12b645aa42523e92b36a61_5f12bbcff3d624505650b74f/scale_1200",
  "https://illustrators.ru/uploads/illustration/image/1812574/square_%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg",
  "https://masterpiecer-images.s3.yandex.net/be3df406946e11eeb0252656ee3db587:upscaled",
];

const generateMockResponse = () =>
  new Promise<string>((res) => {
    setTimeout(() => {
      const index = Math.floor(Math.random() * 4);
      const result = mockHeroes[index];
      res(result);
    }, 1000);
  });

export const Chat: React.FC<ChatProps> = ({ setIsShowHero, increaseScore }) => {
  const { name, age, teacher, question } = useDictionary();
  const [heroImgUrl, setHeroImgUrl] = useState<string | null>(null);
  const [heroPopupShown, setHeroPopupShown] = useState<boolean>(false);
  const [step, setStep] = useState(1);

  const nextStep = (event: KeyboardEvent<HTMLInputElement>) => {
    (event.target as HTMLInputElement).value = "";
    setStep(step + 1);
  };

  const handleOnChange = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      switch (step) {
        case 1:
          localStorage.setItem(
            LocalStorageKeys.name,
            (event.target as HTMLInputElement).value
          );
          nextStep(event);
          break;
        case 2:
          localStorage.setItem(
            LocalStorageKeys.age,
            (event.target as HTMLInputElement).value
          );
          nextStep(event);
          break;
        case 3:
          localStorage.setItem(
            LocalStorageKeys.teacher,
            (event.target as HTMLInputElement).value
          );
          generateMockResponse().then((res) => {
            setHeroImgUrl(res);
            setHeroPopupShown(true);
            nextStep(event);
          });
          break;
        default:
          localStorage.setItem(
            "answer",
            (event.target as HTMLInputElement).value
          );
          increaseScore();
      }
    }
  };

  const questionInput = (question: string) => {
    return (
      <div className={style.wrapper}>
        <div>{question}</div>
        <input type="text" onKeyDown={handleOnChange} />
      </div>
    );
  };

  let componentToShow = null;

  switch (step) {
    case 1:
      componentToShow = questionInput(name);
      break;
    case 2:
      componentToShow = questionInput(age);
      break;
    case 3:
      componentToShow = questionInput(teacher);
      break;
    default:
      componentToShow = questionInput(question);
  }

  useEffect(() => {
    const { age, name, teacher, teacherImg } = getStorageUserData();

    if (teacher && teacherImg) {
      setHeroImgUrl(teacherImg);
      setStep(4);
    } else if (age) {
      setStep(3);
    } else if (name) {
      setStep(2);
    }
  }, []);

  return (
    <>
      {componentToShow}
      <HeroModal
        isOpened={heroPopupShown}
        acceptHeroCB={() => {
          setIsShowHero(true);
          setHeroPopupShown(false);
          if (heroImgUrl) {
            localStorage.setItem(LocalStorageKeys.teacherImg, heroImgUrl);
          }
        }}
        declineHeroCB={() => {
          setHeroImgUrl(null);
          generateMockResponse().then((res) => {
            setHeroImgUrl(res);
          });
        }}
        hero={heroImgUrl}
      />
    </>
  );
};
