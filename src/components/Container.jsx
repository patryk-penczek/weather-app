import { useState } from "react"
import SearchBar from "./SearchBar";
import WeatherLocation from "./WeatherLocation";
import WeatherDate from "./WeatherDate";
import WeatherImage from "./WeatherImage";
import WeatherInfo from "./WeatherInfo";
import Settings from "./buttons/Settings";
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
    <div className="relative flex flex-col items-center rounded-3xl border-black p-8 text-center dark:border-white sm:border-[1px] shadow-lg dark:shadow-white/20 shadow-black/40">
      <Settings open={open} setOpen={setOpen} />
      <SearchBar setCity={setCity} language={language} />
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
