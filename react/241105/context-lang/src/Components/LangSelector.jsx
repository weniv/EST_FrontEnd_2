import React from 'react'
import useLanguage from '../Hooks/useLanguage'

export default function LangSelector() {

    const { languageData, changeLanguage } = useLanguage();


    return (
        <>
            <h2>{languageData.languageSelector}</h2>
            <button onClick={() => changeLanguage('ko')}>한국어</button>
            <button onClick={() => changeLanguage('en')} > 영어</button >
            <button onClick={() => changeLanguage('ja')} > 일본어</ button>
        </>
    )
}
