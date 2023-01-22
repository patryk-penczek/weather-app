import Footer from "./components/Footer"
import Container from "./components/Container"
import SearchBar from "./components/SearchBar"
import "./styles/index.css"

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <SearchBar />
      <Container />
      <Footer />
    </div>
  )
}

export default App