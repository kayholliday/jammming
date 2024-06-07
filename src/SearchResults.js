import React from "react";
import Track from "./Track";

//take input from SearchBar and use it to return Tracklists

const SearchResults = () => {
    return (
        <div className="searchresults">
                <h3>Search Results: </h3>
                <Track />
        </div>
      );
}
 
export default SearchResults;