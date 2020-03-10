import React, { Component } from 'react';
import './App.css';
import "./styles.css";
import SideBar from "./SideBar";
import Home from './Home';
import Attractions from './Attractions';
import Language from './Language';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withTranslation, Trans } from 'react-i18next';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/attractions" component={Attractions}/>
		<Route path="/language" component={Language}/>
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default withTranslation('common')(App);
