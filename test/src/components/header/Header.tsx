import React, {useEffect, useState} from "react";
import './header.scss'
import {Languages, LocalStorageKeys} from "../../types/enums.ts";
import {Logo} from "../Logo";

export const Header: React.FC = () => {
    const [language, setLanguage] = useState('');

    useEffect(() => {
        setLanguage(localStorage.getItem(LocalStorageKeys.language) || '');
    }, []);

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>)  => {
        const newValue = event.target.value;
        localStorage.setItem(LocalStorageKeys.language, newValue);
        setLanguage(newValue);
    }
    return (
        <div className={'container'}>
            <Logo />
            <div className={'hero'}>hero</div>
            <select value={language} onChange={handleOnChange} className={'language'}>
                {Object.keys(Languages).map((key) => <option value={key}>{key}</option>)}
            </select>
        </div>
    )
}