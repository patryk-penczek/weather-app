import Settings from "./buttons/Settings"
import SearchBar from "./SearchBar"

const Header = ({setCity, language, open, setOpen}) => {
    return (
        <>
            <Settings open={open} setOpen={setOpen} />
            <SearchBar setCity={setCity} language={language} />
        </>
    )
}

export default Header