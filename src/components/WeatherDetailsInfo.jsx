import weatherCardData from "../utils/data/weatherCardData";

const WeatherInfo = ({ data, language }) => {
  const weatherDataCard = weatherCardData({ data });
  return (
    <div className="my-8 grid grid-cols-1 gap-y-4 text-light sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3">
      {weatherDataCard.map(({ icon, titleEN, titlePL, description }, index) => {
        return (
          <div
            key={index}
            className="flex w-full min-w-45 flex-col items-center justify-center rounded-lg border-1 border-primaryDark bg-light p-2 text-dark drop-shadow-md dark:border-primaryLight dark:bg-dark dark:text-white"
          >
            <div className="flex items-center gap-x-1">
              {icon}
              {language === "en" ? titleEN : titlePL}
            </div>
            <p className="text-lg">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherInfo;
