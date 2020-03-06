import React, { Component } from 'react';
import hamburger from './hamburger.png';
import './App.css';
import CurrentWeather from './CurrentWeather';
import logo from './logo.png';
import AttractionsOTD from './AttractionsOTD';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="m-right">
          <img src={hamburger} className="hamburger" alt="menu" width="50" height="50"></img>
        </div>
        <div>
          <CurrentWeather/>
          <AttractionsOTD/>
        </div>
        <div class = "logo">
          <img src = {logo} alt="Logo"/>
        </div>
      </div>
    );
  }
}

export default App;
