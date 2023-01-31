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
            <input 
                onKeyDown={handlePressEnter} 
                ref={searchRef} 
                id="search-bar" 
                type="text" 
                placeholder="Enter a city..."
                className="mb-10 w-60 bg-transparent border-[1px] rounded-lg p-1"
            />
        </>
    )
}

export default SearchBar