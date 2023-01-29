const WeatherDate = ({data}) => {
    return (
        <>
            <h1 className="font-semibold text-xl">Sunday, Jan 29th {data.dt}</h1>
        </>
    )
}

export default WeatherDate