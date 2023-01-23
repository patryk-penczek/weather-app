const WeatherImage = ({data}) => {
    return (
        <img height="128" width="128" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="Weather Image" />
    )
}
export default WeatherImage