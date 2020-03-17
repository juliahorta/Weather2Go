import React from 'react';
import CurrentWeather from './CurrentWeather';
import logo from './logo.png';
import AttractionsOTD from './AttractionsOTD';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
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
export default Home;
