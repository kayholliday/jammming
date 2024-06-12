import React from "react";

//child component of Tracklist
//tracks from here appear in Tracklist

const Track = ({id, name, artist, album}) => {
    return (
        <div className="track">
            <ul key={id}>
                <li>{name}</li>
                <li>{artist}</li>
                <li>{album}</li>
            </ul>
        </div>
    );
}
 
export default Track;
