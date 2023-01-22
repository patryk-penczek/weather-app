const SearchBar= () => {
    return (
        <>
            <label className="sr-only" htmlFor="search-bar">Enter a city...</label>
            <input className="border-2 border-slate-900 p-1 rounded-xl mb-4" id="search-bar" type="text" placeholder="Enter a city..." />
        </>
    )
}

export default SearchBar