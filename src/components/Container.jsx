import { useState } from "react";
import Header from "./Header";
import WeatherDetailsInfo from "./WeatherDetailsInfo";
import WeatherMainInfo from "./WeatherMainInfo";

const Container = ({
  data,
  setCity,
  language,
  setLanguage,
  theme,
  setTheme,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex h-full w-full flex-col items-center p-8 sm:h-auto md:w-2/5 md:min-w-175 md:rounded-3xl md:border-2 md:border-primaryDark md:shadow-xl md:dark:border-primaryLight">
      <Header
        setCity={setCity}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        open={open}
        setOpen={setOpen}
      />
      <WeatherMainInfo data={data} />
      <WeatherDetailsInfo data={data} language={language} />
    </div>
  );
};

export default Container;
