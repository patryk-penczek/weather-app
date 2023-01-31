import Footer from "./components/Footer"
import Container from "./components/Container"
import "./styles/index.css"
import { useEffect, useState } from "react"

function App() {
  const [city, setCity] = useState("Warsaw");
  const [language , setLanguage] = useState("en");
  const [data, setData] = useState({});
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    (async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=${language}&appid=25d335a5db7cce5fb02b08dfc6049a33`);
        const result = await response.json();
        await setData(result);
    })();
},[city, language])
console.log(data);

if (theme === 'dark' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

  return (
    <div className="flex relative flex-col w-full h-full sm:h-screen justify-center items-center dark:bg-neutral-900 bg-neutral-200 dark:text-white text-black">
        {data.name !== undefined && 
          <Container
            data={data}
            setCity={setCity}
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            setTheme={setTheme} 
          />
        }
        <Footer />
    </div>
  )
}

export default App