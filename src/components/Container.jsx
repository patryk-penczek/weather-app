import SearchBar from "./SearchBar"
import WeatherLocation from "./WeatherLocation"
import WeatherDate from "./WeatherDate"
import WeatherImage from "./WeatherImage"
import WeatherInfo from "./WeatherInfo"
import Settings from "./Settings"

const Container = ({data, setCity}) => {
    return (
        <div className="flex items-center relative flex-col text-center p-8 sm:border-[1px] rounded-3xl">
            <Settings />
            <SearchBar setCity={setCity} />
            <WeatherLocation data={data} />
            <WeatherDate data={data} />
            <WeatherImage data={data} />
            <WeatherInfo data={data} />
        </div>
    )
}

export default Container