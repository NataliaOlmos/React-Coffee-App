import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SplitScreen from './Components/Landing/index';
import OrdersKitchen from './Components/OrdersKitchen';
import OrdersTable from './Components/OrdersTables';
import MenuCoffee from './Components/Menu';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SplitScreen />
        </Route>
        <Route path="/orders-kitchen">
          <OrdersKitchen />
        </Route>
        <Route path="/orders-tables">
          <OrdersTable />
        </Route>
        <Route path="/menu">
          <MenuCoffee />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
