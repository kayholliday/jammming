import React, {useState} from "react";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";
import Track from "./Track";

//parent component of Tracklist and Playlist

const SearchResults = () => {
    const [tracks, setTracks] = useState([{
        id:'',
        name: '',
        artist: '',
        album: '',
        status: 'SearchResult'
    }]);
    
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