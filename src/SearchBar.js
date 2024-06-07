import React /*{useState}*/ from "react";
import SearchResults from "./SearchResults";

//export stored input data to ? to get the results

const SearchBar = () => {
    const handleClick = () => {
        alert('hello, world');
    };
    return ( 
      <>  
        <form className="searchbar">
            <button type="click" onClick={handleClick}>Search</button>
            <input /*id='search' name='search' type='text' value={search} onChange={handleChange}*/></input>
        </form>
        <div className="searchresults">
            <SearchResults />
        </div>
      </>
    );
}
 
export default SearchBar;

/*export function SearchBar() {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length>0){
            const result = {//logic?
                artist: 'name',//artistName,
                songTitle: 'song',//songText,
                Album: 'album'//albumName
            };
            props.showResults(result);
            setSearch('');
        alert(`Searching for ${search}...`);
    }};

    return (
        <>
            <form className='SearchBar' onSubmit={handleSubmit}>
                <button type='submit'>Search</button>
                <input id='search' name='search' type='text' value={search} onChange={handleChange}></input>
            </form>
        </>
    );
}*/