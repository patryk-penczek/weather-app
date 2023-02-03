import weatherCardData from "../utils/data/weatherCardData"

const WeatherInfo = ({data, language}) => {
    const WeatherCardData = weatherCardData({data})
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 gap-y-4 my-8 text-white">
            {WeatherCardData.map(({icon, titleEN, titlePL, description}, index)=>{
                return (
                    <div key={index} className="flex flex-col w-64 sm:w-48 justify-center items-center px-8 py-4 rounded-lg dark:bg-black/30 bg-black/60">
                        <div className="flex items-center gap-x-1 text-xl">
                            {icon}{language === "en" ? titleEN : titlePL}
                        </div>
                        {description}
                    </div>
                )})}
        </div>
    )
}

export default WeatherInfo