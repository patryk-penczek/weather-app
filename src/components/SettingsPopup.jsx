import LanguageSwitcher from "./buttons/LanguageSwitcher"
import ThemeSwitcher from "./buttons/ThemeSwitcher"

const SettingsPopup = ({language, setLanguage}) => {
    return (
        <>
            <ThemeSwitcher />
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </>
    )
}

export default SettingsPopup