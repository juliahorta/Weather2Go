import React from 'react';
import Brit from './images/Brit.jpg';
import Buckingham from './images/Buckingham.jpg';
import Kew from './images/Kew.jpg';
import { withTranslation } from 'react-i18next';


class AttractionsOTD extends React.Component{

render(){
 const { t } = this.props;
  return(
    <div>
      <h6 id="head">{t('attractions of the day')}</h6>
      <div class="AOTD">
        <div class="attractions">
          <a href="https://www.britishmuseum.org/">
          <p></p>
          <img id='attraction' src={Brit} alt="British Museum"/></a>
          <div class="desc"><h6> British Museum</h6> </div>
        </div>
        <div class="attractions">
          <a href="https://www.rct.uk/visit/the-state-rooms-buckingham-palace">
          <p></p>
          <img id='attraction' src={Buckingham} alt="Buckingham Palace"/></a>
          <div class="desc"><h6> Buckingham Palace</h6></div>
        </div>
        <div class="attractions">
          <a href="https://www.kew.org/">
          <p></p>
          <img id='attraction' src={Kew} alt="Kew Gardens"/></a>
          <div class="desc"><h6> Kew Gardens</h6> </div>
        </div>
      </div>
    </div>
  )
}
}



export default AttractionsOTD;
