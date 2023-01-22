import Footer from "./components/Footer"
import Container from "./components/Container"
import SearchBar from "./components/SearchBar"
import "./styles/index.css"
import { useEffect, useState } from "react"

const WEATHER_API = "http://api.weatherapi.com/v1/current.json?key=8afc0e8503da447387c193327232201&q=Warsaw"

function App() {
  const [city, setCity] = useState("Warsaw");

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=8afc0e8503da447387c193327232201&q=${city}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }, [city]);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <SearchBar setCity={setCity} />
      <Container />
      <Footer />
    </div>
  )
}

export default App