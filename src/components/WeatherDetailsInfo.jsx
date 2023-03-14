import weatherCardData from "../utils/data/weatherCardData";

const WeatherInfo = ({ data, language }) => {
  const weatherDataCard = weatherCardData({ data });
  return (
    <div className="my-10 grid grid-cols-2 gap-4 text-light sm:grid-cols-2 md:grid-cols-3">
      {weatherDataCard.map(({ icon, titleEN, titlePL, description }, index) => {
        return (
          <div
            key={index}
            className="flex w-full flex-col items-center justify-center rounded-lg border-1 border-primaryDark bg-light p-2 text-dark drop-shadow-md dark:border-primaryLight dark:bg-dark dark:text-white lg:text-lg"
          >
            <div className="flex items-center gap-x-1">
              {icon}
              {language === "en" ? titleEN : titlePL}
            </div>
            <p className="text-base md:text-lg">{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherInfo;
