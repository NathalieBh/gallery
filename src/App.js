
import React from 'react';
import './App.css';
import Gallery from './components/homeGrid/Gallery';
import Reservation from './components/homeGrid/Reservation';

const App =() => {
  return (
    <div className="App">
      <Gallery />
      <Reservation />
    </div>
  );
}

export default App;
