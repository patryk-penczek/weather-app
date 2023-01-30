import React from "react"
import weatherCardData from "../utils/data/weatherCardData"

const WeatherInfo = ({data}) => {
    const WeatherCardData = weatherCardData({data})
    return (
        <div className="flex flex-row items-center justify-around my-8">
            {WeatherCardData.map(({icon, title, description}, index)=>{
                return (
                    <div key={index} className="flex flex-col justify-center items-center px-6 py-2 rounded-md bg-black/30">
                        <div className="flex items-center gap-x-1 text-xl">{icon}{title}</div>{description}
                    </div>
                )})}
        </div>
    )
}

export default WeatherInfo