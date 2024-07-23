// import logo from './logo.svg';
import './App.css';
import React, {useRef} from 'react';
import MM from './images/mm.jpg'; // Muscle Man image
import mm1 from './sounds/mm1.mp3';


function App() {
  const audioRef = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}


      <img
        src={MM}
        alt="button"
        className="image-button"
        onClick={handleClick}
        style={{ width: "120px", height: "auto"}}
      />
      <audio ref={audioRef} src={mm1} />
    </div>
  );
}

export default App;
