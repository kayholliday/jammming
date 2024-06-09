import React from "react";
import Track from "./Track";

//Take Track data and create array of objects to create Tracklist based on artist or title or album
//export list to SearchResults

const TrackList = (props) => {
    return ( 
        <div className="tracklist">
            <ul className="tracks">
                <li><Track /></li>
                <li><Track /></li>
            </ul>
        </div>
     );
}
 
export default TrackList;