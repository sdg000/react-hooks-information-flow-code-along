import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF")

  function changeParentColor(newChildColor){
    const newColor = getRandomColor()
    setColor(newColor)
    setChildColor(newChildColor)
  }
  //Parent color change helper function passed down as a prop to child Component - <Child/>
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child change={changeParentColor} cc={childColor}/>
      <Child change={changeParentColor} cc={childColor}/>
    </div>
  );
}

export default Parent;
