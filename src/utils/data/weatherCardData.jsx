import { TemperatureMinIcon, TemperatureMaxIcon, TemperatureFeelsLikeIcon, HumidityIcon, PressureIcon, WindIcon } from "../../assets/icons";

const weatherCardData = ({data}) => {
    return [
    {
        icon: <TemperatureMinIcon />,
        titleEN: "Min",
        titlePL: "Min",
        description: data.main.temp_min + "℃"
    },
    {
        icon: <TemperatureMaxIcon />,
        titleEN: "Max",
        titlePL: "Max",
        description: data.main.temp_max + "℃"
    },
    {
        icon: <TemperatureFeelsLikeIcon />,
        titleEN: "Feels like",
        titlePL: "Odczuwalna",
        description: data.main.temp_max + "℃"
    },
    {
        icon: <HumidityIcon />,
        titleEN: "Humidity",
        titlePL: "Wilgotność",
        description: data.main.humidity + "%"
    },
    {
        icon: <PressureIcon />,
        titleEN: "Pressure",
        titlePL: "Ciśnienie",
        description: data.main.pressure + " hPa"
    },
    {
        icon: <WindIcon />,
        titleEN: "Wind",
        titlePL: "Wiatr",
        description: data.wind.speed + " km/h"
    }, 
]}

export default weatherCardData