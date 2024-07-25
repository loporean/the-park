// import logo from './logo.svg';
import './App.css';
import React, {useRef, useState} from 'react';
import MM from './images/mm.jpg'; // Muscle Man image
import mm1 from './sounds/mm1.mp3';
import mm2 from './sounds/mm2.mp3';
import mm3 from './sounds/mm3.mp3';
import mm4 from './sounds/mm4.mp3';
import mm5 from './sounds/mm5.mp3';
import mm6 from './sounds/mm6.mp3';
import mm7 from './sounds/mm7.mp3';
import mm8 from './sounds/mm8.mp3';
import mm9 from './sounds/mm9.mp3';


function App() {
  const audioRef = useRef(null);
  const [currentSound, setCurrentSound] = useState('');

  // Audio files
  const audioFiles = [mm1, mm2, mm3, mm4, mm5, mm6, mm7, mm8, mm9];
  
  const handleClick = () => {
    // Generate random sound
    // Sound cannot be same as previously generated sound
    var rand = Math.floor(Math.random() * audioFiles.length);
    var randomAudioFile = audioFiles[rand];
    while (currentSound === randomAudioFile) {
      rand = Math.floor(Math.random() * audioFiles.length);
      randomAudioFile = audioFiles[rand];
    }
    setCurrentSound(randomAudioFile);
    if (audioRef.current) {
      // Pause currently playing sound and reset before loading next sound
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      // Load sound
      audioRef.current.src = randomAudioFile;

      // Play the audio immediately after setting the source
      audioRef.current.play().catch(error => console.log("Audio playback failed:", error));

      // // Play the new audio once it's fully loaded
      // audioRef.current.onloadeddata = () => {
      //   audioRef.current.play();
      // };
    }
  };

  
  return (
    <div className="App">

      <img
        src={MM}
        alt="button"
        className="image-button"
        onClick={handleClick}
      />
      <audio ref={audioRef} />
    </div>
  );
}

export default App;
