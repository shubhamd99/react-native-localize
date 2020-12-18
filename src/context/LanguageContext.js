import React from "react";
import en from "../lang/en.json";
import zh from "../lang/zh.json";
import * as RNLocalize from 'react-native-localize';
import App from "../App";

const LanguageContext = React.createContext({});

const languageObject = {
    'en': en,
    'zh-Hans-US': zh
}

export const LanguageContextProvider = ({ children }) => {
    // [{"countryCode": "US", "isRTL": false, "languageCode": "en", "languageTag": "en-US"}]
    console.log("Codes: ", RNLocalize.getLocales()); // zh-Hans-US

    const [selectedLanguage, setSelectedLanguage] = React.useState('en');

    React.useEffect(() => {
        // Returns the best language tag possible and its reading direction
        const currentLanguage = RNLocalize.findBestAvailableLanguage(
            Object.keys(languageObject),
        );

        setSelectedLanguage(currentLanguage.languageTag || 'en');
    }, []);

    const value = {
        ...languageObject[selectedLanguage]
    };

    return (
        <LanguageContext.Provider value={value}>
            <App />
        </LanguageContext.Provider>
    );
};

// Accepts a context object (the value returned from React.createContext) and returns the current context value for that context.
// The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
export const useTranslation = () => React.useContext(LanguageContext);