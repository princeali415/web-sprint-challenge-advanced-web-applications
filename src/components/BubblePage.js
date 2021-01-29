import React, { useEffect, useState } from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);



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
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List: - Complete 
//1. Make an axios call to retrieve all color data and push to state on mounting.
