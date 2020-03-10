import React from 'react';
import './Language.css';
import English from './images/English.png';
import Spanish from './images/Spanish.png';
import French from './images/French.png';
import Arabic from './images/Arabic.png';
import Portuguese from './images/Portuguese.png';
import Greek from './images/Greek.png';
import logo from './logo.png';
import i18next from 'i18next';
import common_es from "./translations/es/common.json";
import common_en from "./translations/en/common.json";
import common_fr from "./translations/fr/common.json";
    

class Language extends React.Component {
  render() {
    const {t, i18n} = this.props;
    const resources = {
  	en: {
        common: common_en               // 'common' is our custom namespace
      },
  	fr: {
        common: common_fr
      },
  	es: {
        common: common_es
       }
     };
    return (
      <div class="LApp">
        <h2 id="Ltitle">Language</h2>
        <div class="main">
	 <div class ="first">
          <div class="languages">
            <button onClick={() => i18next.changeLanguage('en')}><img id='eng' src={English} alt="English"/></button>
            <div class="desc"><h6>English</h6></div>
          </div>

          <div class="languages">
            
            <p></p>
            <button onClick={() => i18next.changeLanguage('es')}><img id='language' src={Spanish} alt="Spanish"/></button>
            <div class="desc"><h6>Spanish</h6></div>
          </div>

          <div class="languages">
            
            <p></p>
            <button onClick={() => i18next.changeLanguage('fr')}><img id='language' src={French} alt="French"/></button>
            <div class="desc"><h6>French</h6></div>
          </div>
         </div>

	 <div class = "second">
          <div class="languages">
            
            <p></p>
            <img id='language' src={Greek} alt="Greek"/>
            <div class="desc"><h6>Greek</h6></div>
          </div>

          <div class="languages">
            
            <p></p>
            <img id='language' src={Arabic} alt="Arabic"/>
            <div class="desc"><h6>Arabic</h6></div>
          </div>

          <div class="languages">
            
            <p></p>
            <img id='language' src={Portuguese} alt="Portuguese"/>
            <div class="port"><h6>Portuguese</h6></div>
          </div>
         </div>

        </div>
        <div class = "logo">
          <img src = {logo} alt="Logo"/>
        </div>
      </div>
     

    );
  }
}
export default Language;
