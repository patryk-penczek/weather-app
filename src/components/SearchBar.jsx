import { useRef } from "react";

const SearchBar = ({ setCity, language }) => {
  const searchRef = useRef();
  const handlePressEnter = (event) => {
    if (event.key === "Enter") {
      setCity(searchRef.current.value);
      searchRef.current.value = "";
    }
  };
  return (
    <>
      <label className="sr-only" htmlFor="search-bar">
        Enter a city...
      </label>
      <input
        type="text"
        id="search-bar"
        placeholder={language === "en" ? "Enter a city..." : "Podaj miasto..."}
        autoComplete="off"
        onKeyDown={handlePressEnter}
        ref={searchRef}
        className="my-12 w-60 rounded-lg border-1 border-primaryDark bg-transparent px-3 py-2 focus:outline focus:outline-1 focus:outline-primaryDark dark:border-primaryLight focus:dark:outline-primaryLight sm:mt-auto"
      />
    </>
  );
};

export default SearchBar;
