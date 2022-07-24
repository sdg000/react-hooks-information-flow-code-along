import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ change, cc }) {
 function changeCildColor(){
  const newColor = getRandomColor()
  change(newColor)
 }

  return <div 
    onClick={changeCildColor}
    className="child" 
    style={{ backgroundColor: cc }} 
    />;
}

export default Child;
