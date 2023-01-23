import WeatherImage from "./WeatherImage"

const Content = ({data}) => {
    console.log({data})
    return (
        <>
        <div className="flex gap-x-4">
            <h1 className="text-5xl font-semibold">{data.name}</h1>
            <WeatherImage data={data} />
        </div>
        <p className="text-xl">{data.main.temp + "℃"}</p>
        <p>{data.weather[0].description}</p>
        </>
    )
}

export default Content