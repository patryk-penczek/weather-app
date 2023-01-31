// import Footer from "./components/Footer"
// import SearchBar from "./components/SearchBar"
import Container from "./components/Container"
import "./styles/index.css"
import { useEffect, useState } from "react"

function App() {
  const [city, setCity] = useState("Warsaw");
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&appid=25d335a5db7cce5fb02b08dfc6049a33`);
        const result = await response.json();
        await setData(result);
    })();
},[city])
console.log(data);
  return (
    <div className="flex relative flex-col w-full h-screen justify-center items-center bg-neutral-900 text-white">
        {data.name !== undefined && 
          <Container data={data} setCity={setCity} />
        }
    </div>
  )
}

export default App