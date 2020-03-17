import React from 'react';
import './Language.css';
import English from './images/English.png';
import Spanish from './images/Spanish.png';
import French from './images/French.png';
import Arabic from './images/Arabic.png';
import Portuguese from './images/Portuguese.png';
import Greek from './images/Greek.png';
import logo from './logo.png';



class Language extends React.Component {
  render() {
    return (
      <div class="LApp">
        <h2 id="Ltitle">Language</h2>
        <div class="main">
	 <div class ="first">
          <div class="languages">
            <img id='eng' src={English} alt="English"/>
            <div class="port"><h6>English</h6></div>
          </div>

          <div class="languages">
            <p></p>
            <img id='language' src={Spanish} alt="Spanish"/>
            <div class="port"><h6>Spanish</h6></div>
          </div>

          <div class="languages">
            <p></p>
            <img id='language' src={French} alt="French"/>
            <div class="port"><h6>French</h6></div>
          </div>
    </div>

	 <div class = "second">
          <div class="languages">
            <p></p>
            <img id='language' src={Greek} alt="Greek"/>
            <div class="port"><h6>Greek</h6></div>
          </div>

          <div class="languages">
            <p></p>
            <img id='language' src={Arabic} alt="Arabic"/>
            <div class="port"><h6>Arabic</h6></div>
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
