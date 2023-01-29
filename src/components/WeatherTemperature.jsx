const WeatherTemperature = ({data}) => {
    return (
        <>
            <p className="text-xl">{data.main.temp + "℃"}</p>
        </>
    )
}

export default WeatherTemperature