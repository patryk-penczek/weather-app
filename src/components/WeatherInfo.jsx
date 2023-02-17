import weatherCardData from "../utils/data/weatherCardData";

const WeatherInfo = ({ data, language }) => {
  const weatherDataCard = weatherCardData({ data });
  return (
    <div className="my-8 grid grid-cols-1 gap-y-4 text-light sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3">
      {weatherDataCard.map(({ icon, titleEN, titlePL, description }, index) => {
        return (
          <div
            key={index}
            className="flex w-64 flex-col items-center justify-center rounded-lg bg-black/60 px-8 py-4 dark:bg-black/40 sm:w-48"
          >
            <div className="flex items-center gap-x-1 text-xl">
              {icon}
              {language === "en" ? titleEN : titlePL}
            </div>
            {description}
          </div>
        );
      })}
    </div>
  );
};

export default WeatherInfo;
