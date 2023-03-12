import WeatherDate from "./WeatherDate";
import WeatherImage from "./WeatherImage";
import WeatherLocation from "./WeatherLocation";

const WeatherMainInfo = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-2 text-center">
      <WeatherLocation data={data} />
      <WeatherDate data={data} />
      <WeatherImage data={data} />
    </div>
  );
};

export default WeatherMainInfo;
