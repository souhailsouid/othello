import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/login/login'
import Game from './pages/othello/game'
import './app.css';

function App() {
  return (
    <Router>
      <div className="App">


        <Switch>
          <Route path="/othello">
            <Game />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
