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
        className="mb-10 mt-10 w-60 rounded-lg border-[1px] border-black bg-transparent p-1 dark:border-white sm:mt-auto"
      />
    </>
  );
};

export default SearchBar;
