import SearchBar from "./SearchBar"
import WeatherLocation from "./WeatherLocation"
import WeatherDate from "./WeatherDate"
import WeatherImage from "./WeatherImage"
import WeatherInfo from "./WeatherInfo"

const Container = ({data, setCity}) => {
    return (
        <div className="flex items-center relative flex-col text-center">
            <SearchBar setCity={setCity} />
            <WeatherLocation data={data} />
            <WeatherDate data={data} />
            <WeatherImage data={data} />
            <WeatherInfo data={data} />
        </div>
    )
}

export default Container