import {
  HumidityIcon,
  PressureIcon,
  TemperatureFeelsLikeIcon,
  TemperatureMaxIcon,
  TemperatureMinIcon,
  WindIcon,
} from "../../assets/icons";

const weatherCardData = ({ data }) => {
  return [
    {
      icon: <TemperatureMinIcon />,
      titleEN: "Minimum",
      titlePL: "Minimalna",
      description: data.main.temp_min + "℃",
    },
    {
      icon: <TemperatureMaxIcon />,
      titleEN: "Maximum",
      titlePL: "Maksymalna",
      description: data.main.temp_max + "℃",
    },
    {
      icon: <TemperatureFeelsLikeIcon />,
      titleEN: "Feels like",
      titlePL: "Odczuwalna",
      description: data.main.temp_max + "℃",
    },
    {
      icon: <HumidityIcon />,
      titleEN: "Humidity",
      titlePL: "Wilgotność",
      description: data.main.humidity + "%",
    },
    {
      icon: <PressureIcon />,
      titleEN: "Pressure",
      titlePL: "Ciśnienie",
      description: data.main.pressure + " hPa",
    },
    {
      icon: <WindIcon />,
      titleEN: "Wind",
      titlePL: "Wiatr",
      description: data.wind.speed + " km/h",
    },
  ];
};

export default weatherCardData;
