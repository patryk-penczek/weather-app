import { IconLocation, IconArrowDown } from "../assets/icons"

const WeatherLocation = ({data}) => {
    return (
        <div className="flex flex-row items-center gap-x-2">
            <IconLocation className="text-white" />
            <h1 className="text-4xl">{data.name}</h1>
            <IconArrowDown className="text-white" />
        </div>
    )
}

export default WeatherLocation