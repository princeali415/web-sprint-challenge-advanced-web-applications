import React, { useState, useEffect } from "react";
import axios from "axios";


const loginCredential = {
  username: '',
  password: '',
}

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [user, setUser] = useState(loginCredential)

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', user)
    .then(res => {
      console.log(res)
      props.setIsLoggedIn(true)
      localStorage.setItem("token", res.data.payload);
      props.history.push("/bubblepage")                  // maaybe you can just use push
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
      </h1>
      <form onSubmit={handleLogin}>
        <label>Username</label>
          <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
          />
          <label>Password</label>
          <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
          />
        <button>Log in</button>
      </form>
        
    </>
  );
};

export default Login;

//Task List: - COMPLETE
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.