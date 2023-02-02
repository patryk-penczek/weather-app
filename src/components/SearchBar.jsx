import { useRef } from "react";

const SearchBar = ({setCity, language}) => {
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
                type="text" 
                id="search-bar" 
                placeholder={language === "en" ? "Enter a city..." : "Podaj miasto..."}
                autoComplete="off"
                onKeyDown={handlePressEnter} 
                ref={searchRef} 
                className="mb-10 mt-10 sm:mt-auto w-60 bg-transparent border-[1px] rounded-lg p-1 dark:border-white border-black"
            />
        </>
    )
}

export default SearchBar