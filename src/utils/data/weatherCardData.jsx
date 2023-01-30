import { TemperatureMin, TemperatureMax, TemperatureFeelsLike, Humidity, Pressure, Wind } from "../../assets/icons";

const weatherCardData = ({data}) => {
    return [
    {
        icon: <TemperatureMin />,
        title: "Min",
        description: data.main.temp_min + "℃"
    },
    {
        icon: <TemperatureMax />,
        title: "Max",
        description: data.main.temp_max + "℃"
    },
    {
        icon: <TemperatureFeelsLike />,
        title: "Feels like",
        description: data.main.temp_max + "℃"
    },
    {
        icon: <Humidity />,
        title: "Humidity",
        description: data.main.humidity + "%"
    },
    {
        icon: <Pressure />,
        title: "Pressure",
        description: data.main.pressure + " hPa"
    },
    {
        icon: <Wind />,
        title: "Wind",
        description: data.wind.speed + " km/h"
    }, 
]}

export default weatherCardData