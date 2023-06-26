import i18next from "i18next";

import { initReactI18next } from "react-i18next";
// import translationEN from "./en/translations.json"
// import translationTA from "./ta/translations.json"

// const resources = {
//     en: {
//         translation: translationEN
//     },
//     ta: {
//         translation: translationTA
//     }
// };

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: "en",
        debug: true,
        resources: {
            en: {
                // translations: require(process.env.PUBLIC_URL + '/en/translations.json') 
                translations: require('./en/translations.json') 
                // translations: require('Users/pavithra.chandar/employee-crud/public/en/translations.json') 
            }
        },
        ns: ['translations'],
        keySeparator: false,
        defaultNS: 'translations'
    })
    i18next.languages = ['en', 'ta']

export default i18next