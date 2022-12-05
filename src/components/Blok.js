import React, { useState } from "react";
import "./Blok.css";

function Blok(props) {
const [changeColor, setChangeColor] = useState(false);

  const clickSquare = () => {
    props.timerSwitch(true)
    props.colorChange(props.id)
    }

  return (
    <>
    <square
      onClick={clickSquare}
      className={props.color}
    ></square>
    </>
  );
}

export default Blok;
