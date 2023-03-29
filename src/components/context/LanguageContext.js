import React, {
    createContext, 
    useState, 
    useContext
} from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {

    const [language, setLanguage] = useState('en');

    const updateLanguage = () => {
        setLanguage(language => language === "en" ? "pl" : "en")
    };
    
    return (
        <LanguageContext.Provider value={{language: language, update: updateLanguage}}>
            {children}
        </LanguageContext.Provider>
    )

};

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);

    if(context === undefined) {
        throw new Error("useLanguageContext was used outside of its provider")
    }

    return context;
}
