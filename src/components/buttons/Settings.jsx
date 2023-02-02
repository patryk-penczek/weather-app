import { SettingsIcon } from "../../assets/icons/index"
import settingsAnimation from "../../utils/data/scripts/settingsAnimation"

const Settings = ({open, setOpen}) => {
    return (
        <>
            <button onClick={() => settingsAnimation(open, setOpen)}>
                <SettingsIcon className="settings dark:text-white text-black absolute top-4 right-4 sm:top-auto sm:right-8" />
            </button>
        </>
    )
}

export default Settings