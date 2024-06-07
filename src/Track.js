import React, { useState } from "react";

//track return here get imported to Tracklist

const Track = () => {
    const tracks = ['artist: Bon Jovi', 'songTitle: Living on a Prayer', 'album: Slippery When Wet']

          /*artist: 'Bryan Adams',
          songTitle: 'Run to You',
          album: 'Reckless'*/
    
    return ( 
        <div className="tracks">{tracks}</div>
     );
}
 
export default Track;