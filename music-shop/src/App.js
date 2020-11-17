import React from 'react'

import './App.css';
import {Navbar} from './components/Navbar'
import {MusicList} from './components/MusicList'

//TO DO osobne funkcje na guziki zeby byly 2 rodzaje 
function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <MusicList/>
    </div>
  );
}

export default App;
