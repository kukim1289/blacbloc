import React, { useState } from "react";
import "./SpeedBlok.css";
import Modal from "./Modal";
import "./Modal.css";

function SpeedBlok(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const speedNumber = props.speedNumber;
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  const [count, setCount] = useState(0);
  const [changeColor, setChangeColor] = useState(true);

  const clickSquare = () => {
    setChangeColor(!changeColor);
    setTimerOn(true);
    setCount(count + 1);
    if (count + 1 == speedNumber) {
      setTimerOn(false);
      setButtonPopup(true);
    }
  };

  return (
    <div>
      <div id="square-container">
        <big-square
          onClick={() => clickSquare()}
          class={changeColor ? "white" : "black"}
        />
      </div>

      <h2>
        {count} / {speedNumber}
      </h2>

      <div class="timerDisplay">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        {("0" + ((time / 10) % 100)).slice(-2)}
      </div>

      {!timerOn && time > 0 && buttonPopup && (
        <Modal
          setTrigger={setButtonPopup}
          time={time}
          timeReset={setTime}
          countReset={setCount}
          squareReset={setChangeColor}
        />
      )}
    </div>
  );
}

export default SpeedBlok;
