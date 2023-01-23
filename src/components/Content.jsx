const Content = ({data}) => {
    console.log({data})
    return (
        <div className="flex flex-col gap-y-4">
            <p>Today</p>
            <h1 className="text-3xl font-semibold">{data.name}</h1>
            <p>{data.main?.temp + "℃"}</p>
            <p>{data.weather?.[0].description}</p>
        </div>
    )
}

export default Content