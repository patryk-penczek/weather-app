import SearchBar from "./SearchBar"
import WeatherLocation from "./WeatherLocation"
import WeatherDate from "./WeatherDate"
import WeatherImage from "./WeatherImage"
import WeatherInfo from "./WeatherInfo"
import Settings from "./buttons/Settings"
import SettingsPopup from "./SettingsPopUp"

const Container = ({data, setCity, language, setLanguage, theme, setTheme}) => {
    return (
        <div className="flex items-center relative flex-col text-center p-8 sm:border-[1px] dark:border-white border-black rounded-3xl">
            <Settings />
            <SearchBar setCity={setCity} language={language} />
            <WeatherLocation data={data} />
            <WeatherDate data={data} />
            <WeatherImage data={data} />
            <WeatherInfo data={data} language={language} />
            <SettingsPopup language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
        </div>
    )
}

export default Container