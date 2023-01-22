import WeatherImage from "./WeatherImage"
import Content from "./Content"

const Container = () => {
    return (
        <div className="flex bg-slate-500 p-8 rounded-xl">
            <WeatherImage />
            <Content />
        </div>
    )
}

export default Container