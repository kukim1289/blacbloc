import React from 'react'
import Blok from './Blok'
import './FiveGrid.css'
import {useState} from "react"
import Modal from './Modal'


function FiveGrid() {

const [squares, setSquares] = useState([
  {id: 1, className: "white", type: 'blok'},{id: 2, className: "white", type: 'blok'},{id: 3, className: "white", type: 'blok'},{id: 4, className: "white", type: 'blok'}, {id: 5, className: "white", type: 'blok'},
  {id: 6, className: "white", type: 'blok'},{id: 7, className: "white", type: 'blok'},{id: 8, className: "white", type: 'blok'},{id: 9, className: "white", type: 'blok'}, {id: 10, className: "white", type: 'blok'},
  {id: 11, className: "white", type: 'blok'},{id: 12, className: "white", type: 'blok'},{id: 13, className: "white", type: 'blok'},{id: 14, className: "white", type: 'blok'}, {id: 15, className: "white", type: 'blok'},
  {id: 16, className: "white", type: 'blok'},{id: 17, className: "white", type: 'blok'},{id: 18, className: "white", type: 'blok'},{id: 19, className: "white", type: 'blok'}, {id: 20, className: "white", type: 'blok'},
  {id: 21, className: "white", type: 'blok'},{id: 22, className: "white", type: 'blok'},{id: 23, className: "white", type: 'blok'},{id: 24, className: "white", type: 'blok'}, {id: 25, className: "white", type: 'blok'},
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
          if(count===24){
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
      <div className="boardFive">
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

export default FiveGrid