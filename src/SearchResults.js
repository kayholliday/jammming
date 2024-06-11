import React from "react";

//child component of Tracklist
//take input from SearchBar and use it to return Tracklists

const SearchResults = ({tracks, setTracks, updateStatus}) => {
  
  return (
    <div className="searchresults">
      <h3>Search Results</h3>
        {
          tracks && tracks.map(track => {
            if(track && track.status==='SearchResult')
              return<>
                <p className="track" key={track.id}>{track.artist} {track.songTitle} {track.album}<button className="addToPlaylist" key={track.id} onClick={()=>{updateStatus(track.id, 'Playlist')}}>Add to Playlist</button></p></>
          })
        }
    </div>
  )
}
 
export default SearchResults;