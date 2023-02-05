import { PolandIcon, UnitedStatesIcon } from "../../assets/icons";

const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <>
      {language === "pl" && (
        <button onClick={() => setLanguage("en")}>
          <span className="sr-only">Change language to English</span>
          <PolandIcon />
        </button>
      )}

      {language === "en" && (
        <button onClick={() => setLanguage("pl")}>
          <span className="sr-only">Change language to Polish</span>
          <UnitedStatesIcon />
        </button>
      )}
    </>
  );
};

export default LanguageSwitcher;
