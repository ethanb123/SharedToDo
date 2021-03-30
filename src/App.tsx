import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from "./views/HomePage"
import NavBar from "./views/NavBar"
import CreateList from "./views/CreateList"
import ViewList from "./views/ViewList"

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <div>
          <Switch>

            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/homepage">
              <HomePage />
            </Route>

            <Route path="/createlist">
              <CreateList />
            </Route>

            <Route path="/Viewlist">
              <ViewList />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
