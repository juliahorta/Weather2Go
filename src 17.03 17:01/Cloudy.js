import React from 'react';
import './Attractions.css';
import NAG from './images/NAG.jpg';
import TOL from './images/TOL.jpg';
import Camden from './images/Camden.jpg';
import Tate from './images/Tate.jpg';
import Science from './images/Science.jpg';
import logo from './logo.png';


class Cloudy extends React.Component {
  render() {
    return (
      <div class="AApp">
        <h2 id="Atitle">Suggestions for a Cloudy Day</h2>
        <div class="main">
          <div class="attractions">
            <a href="https://www.hrp.org.uk/tower-of-london/#gs.043qsj">
            <p></p>
            <img id='attraction' src={TOL} alt="Tower of London"/></a>
            <div class="desc"><h6>Tower of London</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.camdenmarket.com/">
            <p></p>
            <img id='attraction' src={Camden} alt="Camden Market"/></a>
            <div class="desc"><h6>Camden Market</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.tate.org.uk/visit/tate-modern?gclid=EAIaIQobChMI54rBlvWh6AIViLTtCh1kNwNvEAAYASAAEgJazPD_BwE">
            <p></p>
            <img id='attraction' src={Tate} alt="Tate Modern"/></a>
            <div class="desc"><h6>Tate Modern</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.nationalgallery.org.uk/about-us/contact-us">
            <p></p>
            <img id='attraction' src={NAG} alt="National Art Gallery"/></a>
            <div class="desc"><h6>National Art Gallery</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.sciencemuseum.org.uk/">
            <p></p>
            <img id='attraction' src={Science} alt="Science Museum"/></a>
            <div class="desc"><h6>Science Museum</h6></div>
          </div>
        </div>
        <div class = "logo">
          <img src = {logo} alt="Logo"/>
        </div>
      </div>
    );
  }
}
export default Cloudy;
