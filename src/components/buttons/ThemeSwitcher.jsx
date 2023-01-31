import { MoonIcon, SunIcon } from "../../assets/icons"

const ThemeSwitcher = ({theme, setTheme}) => {
    return (
        <>
            {theme === "dark" &&
                <button onClick={() => setTheme("light")}>
                    <MoonIcon className="dark:text-white text-black" />
                </button>
            }

            {theme === "light" &&
                <button onClick={() => setTheme("dark")}>
                    <SunIcon className="dark:text-white text-black" />
                </button>
            }
        </>
    )
}

export default ThemeSwitcher