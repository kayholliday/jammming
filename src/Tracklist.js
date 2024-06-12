import React from "react";
import Track from "./Track";

//child component of SearchResults
//take input from SearchBar and use it to return Tracklists

const Tracklist = ({tracks, setTracks, updateStatus}) => {  
  return (
    <div className="tracklist">
        {
          tracks && tracks.map(track => {
            if(track && track.status==='SearchResult') {
              return (
                <>
                  <Track 
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                  />
                  <button 
                    className="addToPlaylist" 
                    key={track.id} 
                    onClick={() => {
                      updateStatus(track.id, 'Playlist');
                    }}
                  >
                    +
                  </button>
                </>
              )
            }
          })
        }
    </div>
  );
};
 
export default Tracklist;