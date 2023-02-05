import { PolandIcon, UnitedStatesIcon } from "../../assets/icons";

const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <>
      {language === "pl" && (
        <button onClick={() => setLanguage("en")}>
          <PolandIcon />
        </button>
      )}

      {language === "en" && (
        <button onClick={() => setLanguage("pl")}>
          <UnitedStatesIcon />
        </button>
      )}
    </>
  );
};

export default LanguageSwitcher;
