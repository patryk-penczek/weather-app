import { LocationIcon } from "../assets/icons";

const WeatherLocation = ({ data }) => {
  return (
    <div className="mb-1 flex flex-row items-center justify-center gap-x-2">
      <LocationIcon className="text-dark dark:text-light" />
      <h1 className="text-4xl">{data.name}</h1>
    </div>
  );
};

export default WeatherLocation;
