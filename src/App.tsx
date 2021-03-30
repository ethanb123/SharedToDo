import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from "./views/HomePage"

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/homepage">
              <HomePage />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
