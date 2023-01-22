import WeatherImage from "./WeatherImage"
import Content from "./Content"

const Container = () => {
    return (
        <div className="flex items-center bg-slate-500 p-8 rounded-xl gap-x-8">
            <WeatherImage />
            <Content />
        </div>
    )
}

export default Container