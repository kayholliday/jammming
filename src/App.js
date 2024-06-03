import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Tracklist from './Tracklist';
import Track from './Track';

function App() {
  return (
    <>
    <SearchBar />
    <SearchResults />
    <Playlist />
    <Tracklist />
    <Track />
    <div>
      <button id='save'>Save to Spotify</button>
    </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </>
  );
}

export default App;
