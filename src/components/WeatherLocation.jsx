import { IconLocation } from "../assets/icons"

const WeatherLocation = ({data}) => {
    return (
        <div className="flex flex-row justify-center items-center gap-x-2">
            <IconLocation className="text-white" />
            <h1 className="text-4xl">{data.name}</h1>
        </div>
    )
}

export default WeatherLocation