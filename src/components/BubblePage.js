import React, { useEffect, useState } from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { Link } from "react-router-dom";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  useEffect(() => {
    getColors();
  }, [])

  const getColors = () => {
    axiosWithAuth().get("/colors")
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
        <nav>
          {!isLoggedIn && <Link to='/' onClick={logout}>Logout</Link>}
        </nav>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List: - Complete 
//1. Make an axios call to retrieve all color data and push to state on mounting.
