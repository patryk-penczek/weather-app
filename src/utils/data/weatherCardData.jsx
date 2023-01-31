import { TemperatureMinIcon, TemperatureMaxIcon, TemperatureFeelsLikeIcon, HumidityIcon, PressureIcon, WindIcon } from "../../assets/icons";

const weatherCardData = ({data}) => {
    return [
    {
        icon: <TemperatureMinIcon />,
        title: "Min",
        description: data.main.temp_min + "℃"
    },
    {
        icon: <TemperatureMaxIcon />,
        title: "Max",
        description: data.main.temp_max + "℃"
    },
    {
        icon: <TemperatureFeelsLikeIcon />,
        title: "Feels like",
        description: data.main.temp_max + "℃"
    },
    {
        icon: <HumidityIcon />,
        title: "Humidity",
        description: data.main.humidity + "%"
    },
    {
        icon: <PressureIcon />,
        title: "Pressure",
        description: data.main.pressure + " hPa"
    },
    {
        icon: <WindIcon />,
        title: "Wind",
        description: data.wind.speed + " km/h"
    }, 
]}

export default weatherCardData