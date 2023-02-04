import { SettingsIcon } from "../../assets/icons/index"
import settingsAnimation from "../../utils/data/scripts/settingsAnimation"
import SettingsPopup from "../SettingsPopup"

const Settings = ({language, setLanguage, theme, setTheme, open, setOpen}) => {
    return (
        <>
            <button onClick={() => settingsAnimation(open, setOpen)}>
                <SettingsIcon className="settings dark:text-white text-black absolute top-4 right-4 sm:top-auto sm:right-8" />
            </button>
            <SettingsPopup
                language={language}
                setLanguage={setLanguage}
                theme={theme}
                setTheme={setTheme}
            />
        </>
    )
}

export default Settings