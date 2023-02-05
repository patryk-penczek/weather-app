import Settings from "./buttons/Settings";
import SearchBar from "./SearchBar";

const Header = ({
  setCity,
  language,
  setLanguage,
  theme,
  setTheme,
  open,
  setOpen,
}) => {
  return (
    <>
      <Settings
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        open={open}
        setOpen={setOpen}
      />
      <SearchBar setCity={setCity} language={language} />
    </>
  );
};

export default Header;
