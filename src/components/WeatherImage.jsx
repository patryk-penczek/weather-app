const WeatherImage = ({data}) => {
    return (
        <img className="rounded-xl border-2" height="48" width="48" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="Weather Image" />
    )
}
export default WeatherImage