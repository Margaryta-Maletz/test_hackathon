import React, {KeyboardEvent, useState} from "react";
import {useDictionary} from "../../hooks/useDictionary.ts";
import style from './Chat.module.css';

type ChatProps = {
    setIsShowHero: (val: boolean) => void;
    increaseScore: () => void;
}

export const Chat: React.FC<ChatProps> = ({setIsShowHero, increaseScore}) => {
    const {
        name,
        age,
        teacher,
        question
    } = useDictionary();

    const [step, setStep] = useState(1);

    const handleOnChange = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
            switch (step) {
                case 1: localStorage.setItem('name', (event.target as HTMLInputElement).value); break;
                case 2: localStorage.setItem('age', (event.target as HTMLInputElement).value);break;
                case 3: localStorage.setItem('teacher', (event.target as HTMLInputElement).value); setIsShowHero(true); break;
                default: localStorage.setItem('answer', (event.target as HTMLInputElement).value); increaseScore();
            }

            (event.target as HTMLInputElement).value = '';
            setStep(step + 1)
        }
    }

    const questionInput = (question: string) => {
        return (
            <div className={style.wrapper}>
                <div>{question}</div>
                <input type="text" onKeyDown={handleOnChange}/>
            </div>
        )
    }

    switch (step) {
        case 1:
            return questionInput(name);
        case 2:
            return questionInput(age);
        case 3:
            return questionInput(teacher);
        default:
            return questionInput(question);
    }
}
