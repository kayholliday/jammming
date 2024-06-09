import React, {useState} from "react";
import SearchResults from "./SearchResults";

//export stored input data to ? to get the results

const SearchBar = () => {
    const [searchResults, setSearchResults] = useState(null);
    
    //When the button is clicked the SearchResults component will show
    return ( 
      <>  
        <form className="searchbar">
            <button type="button" onClick={()=> setSearchResults('search results')}>Search</button>
            <input /*id='search' name='search' type='text' value={search} onChange={handleChange}*/></input>
        </form>
        <div className="searchresults">
            {searchResults === "search results" &&
                <SearchResults />
            }
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