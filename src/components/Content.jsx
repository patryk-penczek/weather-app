const Content = ({data}) => {
    console.log({data})
    return (
        <>
        <div className="flex gap-x-4">
            <img className="rounded-xl" height="48" width="48" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt="Weather Image" />
        </div>
        <p>{data.weather[0].description}</p>
        </>
    )
}

export default Content