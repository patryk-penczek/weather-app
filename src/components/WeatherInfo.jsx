const WeatherInfo = ({data}) => {
    console.log(data);
    return (
        <div className="flex flex-col justify-center text-center">
            <img className="rounded-xl place-self-center" height="48" width="48" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="Weather Image" />
            <div className="text-sm first-letter:uppercase">{data.weather[0].description}</div>
        </div>
    )
}

export default WeatherInfo