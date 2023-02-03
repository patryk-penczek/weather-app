import { useState } from "react"
import Header from "./Header";
import WeatherLocation from "./WeatherLocation";
import WeatherDate from "./WeatherDate";
import WeatherImage from "./WeatherImage";
import WeatherInfo from "./WeatherInfo";
import SettingsPopup from "./SettingsPopup.jsx";

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
    <div className="relative flex flex-col md:w-auto sm:h-auto w-full h-full items-center md:rounded-3xl md:border-black p-8 text-center md:dark:border-white md:border-[1px] md:shadow-lg md:dark:shadow-white/20 md:shadow-black/40">
      <Header setCity={setCity} language={language} open={open} setOpen={setOpen} />
      <WeatherLocation data={data} />
      <WeatherDate data={data} />
      <WeatherImage data={data} />
      <WeatherInfo data={data} language={language} />
      <SettingsPopup
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
};

export default Container;
