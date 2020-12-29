import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SplitScreen from './Components/Landing/index';
import Orders from './Components/Orders';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <SplitScreen />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
