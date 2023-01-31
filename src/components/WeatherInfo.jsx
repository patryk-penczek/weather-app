import weatherCardData from "../utils/data/weatherCardData"

const WeatherInfo = ({data}) => {
    const WeatherCardData = weatherCardData({data})
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 gap-y-4 my-8">
            {WeatherCardData.map(({icon, title, description}, index)=>{
                return (
                    <div key={index} className="flex flex-col w-48 justify-center items-center px-8 py-4 rounded-lg bg-black/30">
                        <div className="flex items-center gap-x-1 text-xl">
                            {icon}{title}
                        </div>
                        {description}
                    </div>
                )})}
        </div>
    )
}

export default WeatherInfo