import React, { Component } from 'react';
import './App.css';
import "./styles.css";
import SideBar from "./SideBar";
import Home from './Home';
import Attractions from './Attractions';
import WeekContainer from './WeekContainer';
import Language from './Language';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/attractions" component={Attractions}/>
                <Route path="/planAhead" component={WeekContainer}/>
                <Route path="/language" component={Language}/>
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
