const WeatherTemperature = ({data}) => {
    return (
        <>
            <div className="text-6xl">{data.main.temp + "℃"}</div>
        </>
    )
}

export default WeatherTemperature