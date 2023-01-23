import WeatherImage from "./WeatherImage"
import Content from "./Content"

const Container = ({data}) => {
    return (
        <div className="flex items-center bg-slate-500 p-8 rounded-xl gap-x-8">
            <WeatherImage data={data} />
            <Content data={data} />
        </div>
    )
}

export default Container