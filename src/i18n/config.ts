import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: "en",
        debug: true,
        resources: {
            en: {
                translations: require('./en/translations.json')
            },
            ta: {
                translations: require("./ta/translations.json")
            }
        },
        ns: ['translations'],
        keySeparator: false,
        defaultNS: 'translations'
    })
    i18next.languages = ['en', 'ta']

export default i18next