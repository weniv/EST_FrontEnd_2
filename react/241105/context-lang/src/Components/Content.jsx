import React from 'react'
import useLanguage from '../Hooks/useLanguage';


export default function Content() {
    const { languageData } = useLanguage();

    return (
        <>
            <h1>{languageData.title}</h1>
            <p>{languageData.greeting}</p>
            <p>{languageData.description}</p>
        </>
    )
}
