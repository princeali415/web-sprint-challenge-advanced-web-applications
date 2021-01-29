import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch,  Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'

import "./styles.scss";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => {
            return <Login {...props} />
          }}/>
          <PrivateRoute path="/bubblepage" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List: - COMPLETE
//1. Render BubblePage as a PrivateRoute
//2. Chnage inline styles to actual css styli sheet