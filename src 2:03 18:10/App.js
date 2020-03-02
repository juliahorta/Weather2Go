import React, { Component } from 'react';
import hamburger from './hamburger.png';
import './App.css';
import WeekContainer from './WeekContainer';

//Futuretemp2import Futuretemp1 from './Futuretemp1';
//import Futuretemp2 from './Futuretemp2';
//import Futuretemp3 from './Futuretemp3';
//import Futuretemp4 from './Futuretemp4';
//import Futuretemp5 from './Futuretemp5';
//import mostlySunny from './mostlySunny.png';
//import cloudy from './cloudy.png';
//import sunny from './sunny.png';
//import rainy from './rainy.png';
//import thunder from './thunder.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="m-right">
          <img src={hamburger} className="hamburger" alt="menu" width="50" height="50"></img>
        </div>
        <div>
          <WeekContainer />
        </div>
      </div>
    );
  }
}

export default App;
