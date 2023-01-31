import { PolandIcon, UnitedStatesIcon } from "../../assets/icons"

const LanguageSwitcher = ({language, setLanguage}) => {
    return (
        <>
            {language === "pl" &&
                <button onClick={() => setLanguage("en")}>
                    <UnitedStatesIcon />
                </button>
            }

            {language === "en" &&
                <button onClick={() => setLanguage("pl")}>
                    <PolandIcon />
                </button>
            }
        </>
    )
}

export default LanguageSwitcher