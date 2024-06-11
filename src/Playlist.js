import React from "react";

//child component of Tracklist

function Playlist({tracks, setTracks, updateStatus}) {
    return (
        <>
            <div className="playlist">
                <h3>Playlist</h3>
                {
                    tracks && tracks.map(track => {
                        if(track && track.status==='Playlist')
                        return<>
                            <p className="track" key={track.id}>{track.artist} {track.songTitle} {track.album}<button className="removeFromPlaylist" key={track.id} onClick={()=>{updateStatus(track.id, 'SearchResult')}}>Remove from Playlist</button></p></>
          })
        }
            </div>
        </>
    )
}

export default Playlist;