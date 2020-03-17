import React from 'react';
import './Attractions.css';
import Brit from './images/Brit.jpg';
import Buckingham from './images/Buckingham.jpg';
import Camden from './images/Camden.jpg';
import Dun from './images/Dun.jpg';
import Kew from './images/Kew.jpg';
import Ldneye from './images/Ldneye.jpg';
import Ldnzoo from './images/Ldnzoo.jpg';
import Mad from './images/Mad.jpg';
import NAG from './images/NAG.jpg';
import NHM from './images/NHM.jpg';
import Portobello from './images/Portobello.jpg';
import Science from './images/Science.jpg';
import Tate from './images/Tate.jpg';
import TOL from './images/TOL.jpg';
import VandA from './images/V&A.jpg';
import logo from './logo.png';

class Attractions extends React.Component {
  render() {
    return (
      <div class="AApp">
        <h2 id="Atitle">Attractions</h2>
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
            <a href="https://www.camdenmarket.com/">
            <p></p>
            <img id='attraction' src={Camden} alt="Camden Market"/></a>
            <div class="desc"><h6>Camden Market</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.thedungeons.com/london/en/">
            <p></p>
            <img id='attraction' src={Dun} alt="The London Dungeon"/></a>
            <div class="desc"><h6>The London dungeons</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.kew.org/">
            <p></p>
            <img id='attraction' src={Kew} alt="Kew Gardens"/></a>
            <div class="desc"><h6>Kew Gardens</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.londoneye.com/">
            <p></p>
            <img id='attraction' src={Ldneye} alt="London Eye"/></a>
            <div class="desc"><h6>London Eye</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.zsl.org/zsl-london-zoo">
            <p></p>
            <img id='attraction' src={Ldnzoo} alt="London Zoo"/></a>
            <div class="desc"><h6>London Zoo</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.madametussauds.com/london/en/">
            <p></p>
            <img id='attraction' src={Mad} alt="Madame Tussauds"/></a>
            <div class="desc"><h6>Madame Tussauds</h6></div>
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
            <a href="http://www.portobelloroad.co.uk/the-market/">
            <p></p>
            <img id='attraction' src={Portobello} alt="Portobello Market"/></a>
            <div class="desc"><h6>Portobello Market</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.sciencemuseum.org.uk/">
            <p></p>
            <img id='attraction' src={Science} alt="Science Museum"/></a>
            <div class="desc"><h6>Science Museum</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.tate.org.uk/visit/tate-modern?gclid=EAIaIQobChMI54rBlvWh6AIViLTtCh1kNwNvEAAYASAAEgJazPD_BwE">
            <p></p>
            <img id='attraction' src={Tate} alt="Tate Modern"/></a>
            <div class="desc"><h6>Tate Modern</h6></div>
          </div>

          <div class="attractions">
            <a href="https://www.hrp.org.uk/tower-of-london/#gs.043qsj">
            <p></p>
            <img id='attraction' src={TOL} alt="Tower of London"/></a>
            <div class="desc"><h6>Tower of London</h6></div>
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
