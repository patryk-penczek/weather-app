import Footer from "./components/Footer"
import Container from "./components/Container"
import SearchBar from "./components/SearchBar"
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
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <SearchBar setCity={setCity} />
      <Container data={data} />
      <Footer />
    </div>
  )
}

export default App