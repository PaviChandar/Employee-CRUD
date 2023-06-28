import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18next
    .use(initReactI18next)
    .use(Backend)
    .init({
        fallbackLng: "en",
        lng: "en",
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
            crossDomain: true
        },
        ns: ['translations'],
        keySeparator: false,
        defaultNS: 'translations'
    })
    i18next.languages = ['en', 'ta']

export default i18next