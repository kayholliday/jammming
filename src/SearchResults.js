import React, {useState} from "react";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";

//parent component of Tracklist and Playlist

const SearchResults = () => {
    const [tracks, setTracks] = useState(
        [{
            id: '1',
            name: 'Livin on a prayer',
            artist: 'Jon Bon Jovi',
            album: 'Slippery When Wet',
            uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
            status: 'SearchResult'
        },
        {
            id: '2',
            name: 'Run to you',
            artist: 'Bryan Adams',
            album: 'Reckless',
            uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
            status: 'SearchResult'
        }
        ]
    );
    
    //Maps through the tracks and finds the matching id 
    //It then changes the status of that track which moves the component from SearchResults to Playlist and visa versa
    const updateStatus = (id, newStatus) => {
        let allTracks=tracks;
        allTracks=allTracks.map(track => {
            if(track.id===id){
                track.status=newStatus;
            }
        return track;
        })
        setTracks(allTracks)
    }
    
    return ( 
        <div className="searchresults">
            <h3>Results</h3>
            <Tracklist tracks={tracks} setTracks={setTracks} updateStatus={updateStatus} />
            <Playlist tracks={tracks} setTracks={setTracks} updateStatus={updateStatus} />
        </div>
     );
}
 
export default SearchResults;