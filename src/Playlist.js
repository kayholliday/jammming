import React from "react";

//child component of SearchResults

function Playlist({tracks, setTracks, updateStatus}) {
    return (
        <>
            <div className="playlist">
                <h3>Playlist</h3>
                {
                    tracks && tracks.map(track => {
                        if(track && track.status==='Playlist')
                        return<>
                            <p className="track" key={track.id}>{track.artist} {track.name} {track.album}<button className="removeFromPlaylist" key={track.id} onClick={()=>{updateStatus(track.id, 'SearchResult')}}>-</button></p></>
          })
        }
            </div>
        </>
    )
}

export default Playlist;