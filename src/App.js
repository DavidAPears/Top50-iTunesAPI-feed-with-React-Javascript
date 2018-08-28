import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SongContainer from './containers/SongContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">iTunes API Feed</h1>
        </header>

        <div>
          <SongContainer/>
        </div>

      </div>
    );
  }
}

export default App;
