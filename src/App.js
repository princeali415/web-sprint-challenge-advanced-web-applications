import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'

import "./styles.scss";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <div className="App">
      <ul>
        <li style={{listStyle:'none'}}>
          {!isLoggedIn && <Link to='/login' style={{display:'none'}}>Login</Link>}
          {isLoggedIn && <Link onClick={logout}>Logout</Link>}
        </li>
        {/* <li>
          <Link to="/bubblepage">Bubble Page</Link>
        </li> */}
      </ul>

        <Route exact path="/" render={props => {
          return <Login {...props} setIsLoggedIn={setIsLoggedIn}/>
        }}/>

        <Route path="/login" render={props => {
          return <Login {...props} setIsLoggedIn={setIsLoggedIn}/>
        }}/>

        <PrivateRoute path="/bubblepage" component={BubblePage}/>

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Chnage inline styles to actual css styli sheet