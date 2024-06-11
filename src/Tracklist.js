import React from "react";

//child component of SearchResults
//take input from SearchBar and use it to return Tracklists

const Tracklist = ({tracks, setTracks, updateStatus}) => {
  
  return (
    <div className="tracklist">
        {
          tracks && tracks.map(track => {
            if(track && track.status==='SearchResult')
              return<>
                <p className="track" key={track.id}>{track.artist} {track.name} {track.album}<button className="addToPlaylist" key={track.id} onClick={()=>{updateStatus(track.id, 'Playlist')}}>+</button></p></>
          })
        }
    </div>
  )
}
 
export default Tracklist;