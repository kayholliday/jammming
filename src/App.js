import React, {useState} from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Playlist from './Playlist';
import Tracklist from './SearchResults';

//Check out App and AddThought for how to add track to playlist

function App() {

  return (
    <>
      <div className='App'>
        <div className="content">
          <h1>Jamming</h1>
          <SearchBar />
        </div>
      </div>
  </>
  );
}

export default App;
