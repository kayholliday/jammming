import React, {useState} from "react";
import Tracklist from "./Tracklist";

//export stored input data to ? to get the results

const SearchBar = () => {
    const [tracklist, setTracklist] = useState(null);
    
    //When the button is clicked the Tracklist component will show
    return ( 
      <>  
        <form className="searchbar">
            <button type="button" onClick={()=> setTracklist('tracklist')}>Search</button>
            <input /*id='search' name='search' type='text' value={search} onChange={handleChange}*/></input>
        </form>
        <div className="tracklist">
            {tracklist === "tracklist" &&
                <Tracklist />
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