import React, { Component } from 'react';
import logo from './assets/sigmusic_logo.jpg';
import './stylesheets/App.css';
import MusicMakerButton from "../src/components/musicMakerButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} alt="logo" />
          <MusicMakerButton />
        </header>
      </div>
    );
  }
}

export default App;
