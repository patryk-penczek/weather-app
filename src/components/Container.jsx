import WeatherLocation from "./WeatherLocation"
import WeatherDate from "./WeatherDate"
import WeatherInfo from "./WeatherInfo"
import WeatherTemperature from "./WeatherTemperature"

const Container = ({data}) => {
    return (
        <div className="flex p-12 relative w-screen h-screen max-w-[360px] max-h-[640px] flex-col bg-gradient-to-r from-blue-500 to-blue-600 text-center">
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