import React, { useState, useEffect } from "react";
import Track from "./Track";

//child component of SearchResults

function Playlist({tracks, setTracks, updateStatus}) {
    const [playlistName, setPlaylistName] = useState ('')
    //Stores the new Playlist name
    const handleChange = (e) => {
        setPlaylistName(e.target.value);
    }

    //Saves a user’s playlist to their Spotify account and reset the existing playlist on the web app.
    const handleSave = () => {
        const savedPlaylist = tracks.map((track) => {
            let savedTrack;
            if (track.status === 'Playlist') {
                return savedTrack = track.uri;
            }  
        })
        setPlaylistName('');
        //changes the status of any track in the playlist back to 'SearchResult' to clear the playlist element
        tracks.map(track => {
            if(track && track.status==='Playlist') {
                updateStatus(track.id, 'SearchResult');
            }
        });
        alert(savedPlaylist);
    }
    useEffect(() => {
        let saveButton = document.getElementById('save');

        saveButton.addEventListener('onClick', handleSave);
        return () => {
            saveButton.removeEventListener('onClick', handleSave)
        }
    });

    return (
        <div className="playlist">
            <form>
                <input 
                    id='playlistName'
                    placeHolder="Playlist Name"
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
            <div>
                <button id='save' onClick={handleSave}>Save to Spotify</button>
            </div>
        </div>
    );
};

export default Playlist;