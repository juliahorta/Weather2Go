import React from 'react';
import hamburger from './hamburger.png';
import './App.css';
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles
import 'react-open-weather/lib/css/ReactWeather.css';
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

function App() {
  return (
    <div className="App">
      <div className="m-right">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css"
        type="text/css"
      />
      <img src={hamburger} className="hamburger" alt="menu" width="50" height="50"></img>
     </div>
      <div className="weather">
        <ReactWeather
          forecast="5days"
          apikey="702dd3f7c83d947fcc084f5af1b9f70f"
          type="city"
          city="London"
        />
      </div>
    </div>
  );
}

export default App;
