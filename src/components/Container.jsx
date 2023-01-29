import Content from "./Content"
import WeatherLocation from "./WeatherLocation"
import WeatherDate from "./WeatherDate"
import WeatherTemperature from "./WeatherTemperature"
import WeatherInfo from "./WeatherInfo"

const Container = ({data}) => {
    return (
        <div className="flex text-center justify-center items-center flex-col bg-[url('/src/assets/background.webp')] bg-center bg-cover rounded-xl">
            <WeatherLocation data={data} />
            <WeatherDate data={data} />
            <WeatherInfo data={data} />
            <WeatherTemperature data={data} />
        </div>
    )
}

export default Container