import React, {KeyboardEvent, useState} from "react";
import {useDictionary} from "../../hooks/useDictionary.ts";
import style from './Chat.module.css';

export const Chat: React.FC = () => {
    const {
        name,
        age,
        teacher,
        question
    } = useDictionary();
    const [step, setStep] = useState(1);

    const handleOnChange = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
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
