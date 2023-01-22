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
    .then((response) => {
      if(response.status === 200){
        response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      console.log(data);
    })
  }, [city]);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <SearchBar />
      <button onClick={() => setCity("Katowice")}>XXXXXXXXXXXX</button>
      <Container />
      <Footer />
    </div>
  )
}

export default App