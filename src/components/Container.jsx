import { useState } from "react";
import Header from "./Header";
import WeatherLocation from "./WeatherLocation";
import WeatherDate from "./WeatherDate";
import WeatherImage from "./WeatherImage";
import WeatherInfo from "./WeatherInfo";

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
    <div className="relative flex h-full w-full flex-col items-center p-8 text-center sm:h-auto md:w-auto md:rounded-3xl md:border-[1px] md:border-black md:shadow-lg md:shadow-black/40 md:dark:border-white md:dark:shadow-white/20">
      <Header
        setCity={setCity}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        open={open}
        setOpen={setOpen}
      />
      <WeatherLocation data={data} />
      <WeatherDate data={data} />
      <WeatherImage data={data} />
      <WeatherInfo data={data} language={language} />
    </div>
  );
};

export default Container;
