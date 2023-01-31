import LanguageSwitcher from "./buttons/LanguageSwitcher"
import ThemeSwitcher from "./buttons/ThemeSwitcher"

const SettingsPopup = ({language, setLanguage, theme, setTheme}) => {
    return (
        <>
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </>
    )
}

export default SettingsPopup