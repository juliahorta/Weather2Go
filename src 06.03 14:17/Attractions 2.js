import React from 'react';
import './Attractions.css';
import Brit from './images/Brit.jpg';
import Buckingham from './images/Buckingham.jpg';
import Kew from './images/Kew.jpg';
import NAG from './images/NAG.jpg';
import NHM from './images/NHM.jpg';
import Science from './images/Science.jpg';
import VandA from './images/V&A.jpg';
import logo from './logo.png';

class Attractions extends React.Component {
  render() {
    return (
      <div>
        <h1>Attractions</h1>
        <div class="main">
          <div class="attractions">
            <a href="https://www.britishmuseum.org/">
            <p></p>
            <img id='attraction' src={Brit} alt="British Museum"/></a>
            <div class="desc"><h6>British Museum</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.rct.uk/visit/the-state-rooms-buckingham-palace">
            <p></p>
            <img id='attraction' src={Buckingham} alt="Buckingham Palace"/></a>
            <div class="desc"><h6>Buckingham Palace</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.kew.org/">
            <p></p>
            <img id='attraction' src={Kew} alt="Kew Gardens"/></a>
            <div class="desc"><h6>Kew Gardens</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.nationalgallery.org.uk/about-us/contact-us">
            <p></p>
            <img id='attraction' src={NAG} alt="National Art Gallery"/></a>
            <div class="desc"><h6>National Art Gallery</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.nhm.ac.uk/">
            <p></p>
            <img id='attraction' src={NHM} alt="Natural History Museum"/></a>
            <div class="desc"><h6>Natural History Museum</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.sciencemuseum.org.uk/">
            <p></p>
            <img id='attraction' src={Science} alt="Science Museum"/></a>
            <div class="desc"><h6>Science Museum</h6></div>
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
export default Attractions;
