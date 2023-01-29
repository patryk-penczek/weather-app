import WeatherLocation from "./WeatherLocation"
import WeatherDate from "./WeatherDate"
import WeatherInfo from "./WeatherInfo"
import WeatherTemperature from "./WeatherTemperature"

const Container = ({data}) => {
    return (
        <div className="flex p-16 relative w-screen h-screen max-w-xl max-h-xl flex-col bg-[url('/src/assets/background.webp')] bg-center bg-cover text-center">
            <WeatherLocation data={data} />
            <WeatherDate data={data} />
            <div className="flex flex-row flex-wrap-reverse items-center place-content-between my-8">
                <WeatherInfo data={data} />
                <WeatherTemperature data={data} />
            </div>
        </div>
    )
}

export default Container