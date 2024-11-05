import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageProvider";

const useLanguage = () => {
    const context = useContext(LanguageContext);

    return {
        languageData: context.languages[context.languageState],
        currentLanguage: context.languageState,
        changeLanguage: context.changeLang
    }
}

export default useLanguage;