import { MoonIcon, SunIcon } from "../../assets/icons";

const ThemeSwitcher = ({ theme, setTheme }) => {
  return (
    <>
      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>
          <MoonIcon className="text-black dark:text-white" />
        </button>
      )}

      {theme === "light" && (
        <button onClick={() => setTheme("dark")}>
          <SunIcon className="text-black dark:text-white" />
        </button>
      )}
    </>
  );
};

export default ThemeSwitcher;
