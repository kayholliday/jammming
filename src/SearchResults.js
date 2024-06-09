import React, {useState} from "react";
import TrackList from "./Tracklist";
import Track from "./Track";

//take input from SearchBar and use it to return Tracklists
//onClick of a track should move the element to the Playlist element

const SearchResults = () => {
  const [tracks, setTracks] = useState ([
    {
      artist: '1',
      songTitles: '2',
      album: '3'
    }
  ])
  const addTrack = (track) =>
    setTracks((prev)=>{
      return[track, ...prev];
    });
    
    return (
        <div className="searchresults">
                <h3>Search Results: </h3>
                <TrackList />
        </div>
      );
}
 
export default SearchResults;