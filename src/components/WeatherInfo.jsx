const WeatherInfo = ({data}) => {
    return (
        <>
            <img className="rounded-xl" height="48" width="48" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="Weather Image" />
            <p>{data.weather[0].description}</p>
        </>
    )
}

export default WeatherInfo