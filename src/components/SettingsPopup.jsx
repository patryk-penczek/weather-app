import LanguageSwitcher from "./buttons/LanguageSwitcher";
import ThemeSwitcher from "./buttons/ThemeSwitcher";

const SettingsPopup = ({ language, setLanguage, theme, setTheme}) => {
  return (
    <div className={`switcher flex items-center h-8 gap-x-3 absolute right-20 sr-only`}>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default SettingsPopup;
