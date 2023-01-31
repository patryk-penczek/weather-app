import { LocationIcon } from "../assets/icons"

const WeatherLocation = ({data}) => {
    return (
        <div className="flex flex-row justify-center items-center gap-x-2 mb-1">
            <LocationIcon className="dark:text-white text-black" />
            <h1 className="text-4xl">{data.name}</h1>
        </div>
    )
}

export default WeatherLocation