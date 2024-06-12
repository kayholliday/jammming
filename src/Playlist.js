import React, { useState } from "react";
import Track from "./Track";

//child component of SearchResults

function Playlist({tracks, setTracks, updateStatus}) {
    const [playlistName, setPlaylistName] = useState ('Playlist Name')
    const handleChange = (e) => {
        setPlaylistName(e.target.value);
    }

    return (
        <div className="playlist">
            <form>
                <input 
                    id='playlistName'
                    type='text'
                    value={playlistName}
                    onChange={handleChange}
                />
            </form>
                {
                    tracks && tracks.map(track => {
                        if(track && track.status==='Playlist') {
                            return (
                                <>
                                    <Track 
                                        name={track.name}
                                        artist={track.artist}
                                        album={track.album}
                                    />
                                    <button 
                                        className="removeFromPlaylist" 
                                        key={track.id} 
                                        onClick={() => {
                                            updateStatus(track.id, 'SearchResult');
                                        }}
                                    >
                                        -
                                    </button>
                                </>
                            )
                        }   
                    })
                }
        </div>
    );
};

export default Playlist;