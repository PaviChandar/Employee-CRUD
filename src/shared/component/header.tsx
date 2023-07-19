import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import "../../assets/header.scss"

const Header = () => {
    const { i18n } = useTranslation()

    const handleClick = (lang: string) => {
        i18n.changeLanguage(lang)
    }

    return (
        <header>
            <button onClick={() => handleClick("en")} className="english" >English</button>
            <button onClick={() => handleClick("ta")} className="tamil" >Tamil</button>
        </header>
    )
}

export default Header