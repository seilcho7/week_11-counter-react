import React from 'react';
import logo from './logo.svg';
import './App.css';
import BounceCounter from './BounceCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BounceCounter countBy={20} lowerLimit={-1000} upperLimit={100}/>
      </header>
    </div>
  );
}

export default App;
