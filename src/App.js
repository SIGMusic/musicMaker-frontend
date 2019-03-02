import React, { Component } from 'react';
import logo from './assets/sigmusic_logo.jpg';
import './styles/App.scss';
import MusicMakerButton from "../src/components/musicMakerButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} alt="logo" />
            <h1>MusicMaker</h1>
            <MusicMakerButton />
        </header>
      </div>
    );
  }
}

export default App;
