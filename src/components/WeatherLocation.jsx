const WeatherLocation = ({data}) => {
    return (
        <>
            <h1 className="text-3xl font-semibold">{data.name}</h1>
        </>
    )
}

export default WeatherLocation