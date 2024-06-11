import React from "react";

//child component of Tracklist
//tracks from here appear in Tracklist

const tracks = [
  {
    id: 1,
    artist: 'Bon Jovi',
    name: 'Living on a Prayer',
    album: 'Slippery When Wet',
    status: 'SearchResult'
  },
  {
    id: 2,
    artist: 'Bryan Adams',
    name: 'Run to You',
    album: 'Reckless',
    status: 'SearchResult'
  }
];

const Track = () => {
    const arrayTracks = tracks.map((track) => <li>{track}</li>)
    return (
        <div className="track">
            <ul>{arrayTracks}</ul>
        </div>
    );
}
 
export default Track;
