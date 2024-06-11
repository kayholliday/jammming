import React, { useState } from "react";
import SearchResults from "./SearchResults";

//track return here get imported to Tracklist
//need to get the addTrack functionimported fro SearchBar

let nextId = 0;
export function generateId () {
    const result = nextId;
    nextId +=1;
    return result;
};

const Track = (props) => {
    const {track, addTrack} = props;
    const tracks = ['artist: Bon Jovi ', 'songTitle: Living on a Prayer ', 'album: Slippery When Wet ']

          /*artist: 'Bryan Adams',
          songTitle: 'Run to You',
          album: 'Reckless'*/
    const handleAddClick = () => {
        addTrack(track);
    };
    return ( 
        <li className="track">
            <button className="addtrack" onClick={handleAddClick}>Add</button>
            <div className="tracks">{tracks}</div>
        </li>
        
     );
}
 
export default Track;