import React, {useState} from "react";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

//parent component of SearchResults and Playlist

const Tracklist = () => {
    const [tracks, setTracks] = useState([
        {
          id: 1,
          artist: 'Bon Jovi',
          songTitle: 'Living on a Prayer',
          album: 'Slippery When Wet',
          status: 'SearchResult'
        },
        {
          id: 2,
          artist: 'Bryan Adams',
          songTitle: 'Run to You',
          album: 'Reckless',
          status: 'SearchResult'
        }
      ]);
    
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
        <div className="tracklist">
            <SearchResults tracks={tracks} setTracks={setTracks} updateStatus={updateStatus} />
            <Playlist tracks={tracks} setTracks={setTracks} updateStatus={updateStatus} />
        </div>
     );
}
 
export default Tracklist;