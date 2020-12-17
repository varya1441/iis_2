import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from "./components/HeaderComponent";
import CreateComponent from "./components/CreateComponent";
import ResultComponent from "./components/ResultComponent";
import InitialComponent from "./components/InitialComponent";
import React from "react";

function App() {
  return (
      <div className="Initial-component">
          <Router>
              <div className="container">
                  <HeaderComponent/>
                  <div className="container">
                      <Switch>
                          <Route path="/" exact component={InitialComponent}></Route>
                          <Route path="/analyse-data" component={CreateComponent}></Route>
                          <Route path="/results" component={ResultComponent}></Route>
                      </Switch>
                  </div>
              </div>
          </Router>
      </div>
  );
}

export default App;
