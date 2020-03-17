import React from 'react';
import './Attractions.css';
import Brit from './images/Brit.jpg';
import NHM from './images/NHM.jpg';
import VandA from './images/V&A.jpg';
import Mad from './images/Mad.jpg';
import Dun from './images/Dun.jpg';
import logo from './logo.png';

class Rainy extends React.Component {
  render() {
    return (
      <div class="AApp">
        <h2 id="Atitle">Suggestions for a Rainy Day</h2>
        <div class="main">
          <div class="attractions">
            <a href="https://www.britishmuseum.org/">
            <p></p>
            <img id='attraction' src={Brit} alt="British Museum"/></a>
            <div class="desc"><h6>British Museum</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.thedungeons.com/london/en/">
            <p></p>
            <img id='attraction' src={Dun} alt="The London Dungeon"/></a>
            <div class="desc"><h6>The London dungeons</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.madametussauds.com/london/en/">
            <p></p>
            <img id='attraction' src={Mad} alt="Madame Tussauds"/></a>
            <div class="desc"><h6>Madame Tussauds</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.nhm.ac.uk/">
            <p></p>
            <img id='attraction' src={NHM} alt="Natural History Museum"/></a>
            <div class="desc"><h6>Natural History Museum</h6></div>
          </div>


          <div class="attractions">
            <a href="https://www.vam.ac.uk/">
            <p></p>
            <img id='attraction' src={VandA} alt="V&A"/></a>
            <div class="desc"><h6>V&A</h6></div>
          </div>
        </div>
        <div class = "logo">
          <img src = {logo} alt="Logo"/>
        </div>
      </div>
    );
  }
}
export default Rainy;
