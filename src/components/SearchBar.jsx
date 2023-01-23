import { useRef } from "react";

const SearchBar = ({setCity}) => {
    const searchRef = useRef();
    const handlePressEnter = (event) => {
        if (event.key === 'Enter'){
            setCity(searchRef.current.value);
            searchRef.current.value = ""
        }
    }
    return (
        <>
            <label className="sr-only" htmlFor="search-bar">Enter a city...</label>
            <input onKeyDown={handlePressEnter} className="border-2 border-slate-900 p-1 rounded-xl mb-4" ref={searchRef} id="search-bar" type="text" placeholder="Enter a city..." />
        </>
    )
}

export default SearchBar