import WeatherLocation from "./WeatherLocation"
import WeatherDate from "./WeatherDate"
import WeatherInfo from "./WeatherInfo"

const Container = ({data}) => {
    return (
        <div className="flex p-12 relative w-1/2 h-1/2 flex-col rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-center">
            <WeatherLocation data={data} />
            <WeatherDate data={data} />
            <img className="rounded-xl place-self-center" height="128" width="128" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="Weather Image" />
            <WeatherInfo data={data} />
        </div>
    )
}

export default Container