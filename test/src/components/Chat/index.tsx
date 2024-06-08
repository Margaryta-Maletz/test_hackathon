import React, {KeyboardEvent, useEffect, useState} from "react";
import {useDictionary} from "../../hooks/useDictionary.ts";
import style from "./Chat.module.scss";
import {HeroModal} from "./HeroModal/index.tsx";
import {getStorageUserData} from "../../utils/getStorageUserData.ts";
import {LocalStorageKeys} from "../../types/enums.ts";

type ChatProps = {
    isNew: boolean;
    setIsShowHero: (val: boolean) => void;
    setUrl: (val: string) => void;
    increaseScore: () => void;
}

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

export const Chat: React.FC<ChatProps> = ({isNew, setIsShowHero, setUrl, increaseScore}) => {
    const {
        name,
        age,
        teacher,
        question
    } = useDictionary();

    const getHistory = () => {
        if (isNew) return [];

        const history: string[] = [];
        const nameValue = localStorage.getItem(LocalStorageKeys.name);
        const ageValue = localStorage.getItem(LocalStorageKeys.age);
        const teacherValue = localStorage.getItem(LocalStorageKeys.teacher);

        nameValue && history.push(`${name} ${nameValue}`);
        ageValue && history.push(`${age} ${ageValue}`);
        teacherValue && history.push(`${teacher} ${teacherValue}`);

        return history;
    }

    const [heroImgUrl, setHeroImgUrl] = useState<string | null>(null);
    const [heroPopupShown, setHeroPopupShown] = useState<boolean>(false);
    const [step, setStep] = useState(isNew ? 1 : 4);
    const [hystory, setHistory] = useState<string[]>(getHistory());

    const nextStep = (event: KeyboardEvent<HTMLInputElement>) => {
        (event.target as HTMLInputElement).value = "";
        (step < 4) && setStep(step + 1);
    };

    const handleOnChange = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            const value = (event.target as HTMLInputElement).value;
            switch (step) {
                case 1:
                    localStorage.setItem(
                        LocalStorageKeys.name,
                        value
                    );
                    setHistory([...hystory, `${name} ${value}`]);
                    nextStep(event);
                    break;
                case 2:
                    localStorage.setItem(
                        LocalStorageKeys.age,
                        value
                    );
                    setHistory([...hystory, `${age} ${value}`]);
                    nextStep(event);
                    break;
                case 3:
                    localStorage.setItem(
                        LocalStorageKeys.teacher,
                        value
                    );
                    generateMockResponse().then((res) => {
                        setHeroImgUrl(res);
                        setHeroPopupShown(true);
                        nextStep(event);
                    });
                    setHistory([...hystory, `${teacher} ${value}`]);
                    break;
                default:
                    localStorage.setItem(
                        "answer",
                        value
                    );
                    setHistory([...hystory, `${question} ${value}`]);
                    increaseScore();
            }
        }
    };

    const questionInput = (question: string) => {
        return (
            <div className={style.wrapper}>
                <div className={style.historyWrapper}>{hystory.map((item, index) => <div
                    key={index}>{item}</div>)}</div>
                <div className={style.questionWrapper}>
                    <div>{question}</div>
                    <input className={style.input} type="text" onKeyDown={handleOnChange}/>
                </div>
            </div>
        )
    }

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
        const {age, name, teacher, teacherImg} = getStorageUserData();

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
                    setUrl(heroImgUrl || '');
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
