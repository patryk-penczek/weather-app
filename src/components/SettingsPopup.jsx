import LanguageSwitcher from "./buttons/LanguageSwitcher";
import ThemeSwitcher from "./buttons/ThemeSwitcher";

const SettingsPopup = ({ language, setLanguage, theme, setTheme }) => {
  return (
    <div
      className={`switcher sr-only absolute top-5 right-16 flex h-8 items-center gap-x-3 sm:right-20`}
    >
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default SettingsPopup;
