import React, {useState} from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Tracklist from './Tracklist';

function App() {
  const [results, setResults] = useState([
    {
      artist: 'Bon Jovi',
      songTitle: 'Living on a Prayer',
      album: 'Slippery When Wet'
    },
    {
      artist: 'Bryan Adams',
      songTitle: 'Run to You',
      album: 'Reckless'
    }
  ]);

  const showResults = (track) =>
    setResults((prev)=>{
      return [track, ...prev];
    });

  /*const removeResult = (restultIdToRemove) => {
    setResults((results) => 
      results.filter((track) => track.id !== resultIdToRemove)
    );
  }*/
  const handleSave = () => {
    console.log('Saved to Spotify');
  }
//change the <Track /> to <SearchResults />
  return (
    <>
      <div className='App'>
        <div className="content">
          <h1>Jamming</h1>
          <SearchBar /*showResults ={showResults}*//>
          <ul /*className='results'*/>
            {/*results.map((track) => (
              <Track key={track.id} track={track} removeResult={removeResult}/>
            ))*/}
          </ul>
        </div>
      </div>
    
    
    <Playlist />
    <div>
      <button id='save' onClick={handleSave}>Save to Spotify</button>
    </div>
  </>
  );
}

export default App;
