import React from 'react';
import './Attractions.css';
import Buckingham from './images/Buckingham.jpg';
import Kew from './images/Kew.jpg';
import Ldneye from './images/ldneye.jpg';
import Portobello from './images/portobello.jpg';
import Ldnzoo from './images/ldnzoo.jpg';
import logo from './logo.png';


class Sunny extends React.Component {
  render() {
    return (
      <div class="AApp">
        <h2 id="Atitle">Suggestions for a Sunny Day</h2>
        <div class="main">
          <div class="attractions">
            <a href="https://www.londoneye.com/">
            <p></p>
            <img id='attraction' src={Ldneye} alt="London Eye"/></a>
            <div class="desc"><h6>London Eye</h6></div>
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
            <a href="https://www.zsl.org/zsl-london-zoo">
            <p></p>
            <img id='attraction' src={Ldnzoo} alt="London Zoo"/></a>
            <div class="desc"><h6>London Zoo</h6></div>
          </div>

          <div class="attractions">
            <a href="http://www.portobelloroad.co.uk/the-market/">
            <p></p>
            <img id='attraction' src={Portobello} alt="Portobello Market"/></a>
            <div class="desc"><h6>Portobello Market</h6></div>
          </div>
        </div>
        <div class = "logo">
          <img src = {logo} alt="Logo"/>
        </div>
      </div>
    );
  }
}
export default Sunny;
