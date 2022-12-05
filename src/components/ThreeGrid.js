
import React, { useState } from "react";
import Blok from "./Blok";
import Modal from "./Modal";
import "./ThreeGrid.css";
import "./Modal.css";


function ThreeGrid(props) {

  const [squares, setSquares] = useState([
    {id: 1, className: "white", type: 'blok' }, {id: 2, className: "white", type: 'blok'}, {id: 3, className: "white", type: 'blok'},{id: 4, className: "white", type: 'blok'}, {id: 5, className: "white", type: 'blok'},
    {id: 6, className: "white", type: 'blok'}, {id: 7, className: "white", type: 'blok'}, {id: 8, className: "white", type: 'blok'}, {id: 9, className: "white", type: 'blok'}, 
  ])
  const [buttonPopup, setButtonPopup] = useState(false);
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);
  const [count, setCount] = useState(0);

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

  const changeColor = (id) => {
    setSquares(squares.map(square =>{
      if(square.id === id){
        if(square.className==="white"){
          setCount(count + 1)
          if(count===8){
            setTimerOn(false)
          }
          return{...square, className: "black"}
        }
        else{
          setCount(count - 1)
          return{...square, className: "white"}
        }
        
      }else {return square}
    }))
}

const resetSquares = () => {
   const allSquares = squares.map(square => {
      if(square.type==='blok'){
        return{...square, className: "white"}
      }
  else {
    return square;
  }      
    });
    setSquares(allSquares)
}


  return (
  <div>
    <div className="board-container">
      <div className="boardThree">
      {squares.map(square => (
        <Blok
          key={square.id}
          id={square.id}
          type={square.type}
          color={square.className}
          countSetter={setCount}
          currentCount={count}
          timerSwitch={setTimerOn}
          colorChange={changeColor}
        ></Blok>
    ))}

      
      </div>
    </div>

    <div class="timerDisplay">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        {("0" + ((time / 10) % 100)).slice(-2)}
      </div>

      {!timerOn && time > 0 && (
        <Modal
          setTrigger={setButtonPopup}
          time={time}
          timeReset={setTime}
          countReset={setCount}
          resetter={resetSquares}
        />
      )}
   
      
      
    </div>
  )
}

export default ThreeGrid;
