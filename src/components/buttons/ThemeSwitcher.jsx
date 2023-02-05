import { MoonIcon, SunIcon } from "../../assets/icons";

const ThemeSwitcher = ({ theme, setTheme }) => {
  return (
    <>
      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>
          <span className="sr-only">Change theme to light</span>
          <MoonIcon className="text-black dark:text-white" />
        </button>
      )}

      {theme === "light" && (
        <button onClick={() => setTheme("dark")}>
          <span className="sr-only">Change theme to dark</span>
          <SunIcon className="text-black dark:text-white" />
        </button>
      )}
    </>
  );
};

export default ThemeSwitcher;
