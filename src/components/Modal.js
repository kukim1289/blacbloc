import React from 'react'
import './Modal.css'


function Modal(props) {
    
    let finalTime = props.time
    // convert final time into an integer and divide and get times
    var number = parseInt(finalTime);
    let seconds = ("0" + Math.floor((number / 1000) % 60)).slice(-2)
    let ms = ("0" + ((number / 10) % 100)).slice(-2)
    let minutes = ("0" + Math.floor((number / 60000) % 60)).slice(-2)
    
    
    
    return (
<div class= "modal-container show" id= "modal_container">
            <div class = "modal">
                <h2 class="yourTime">{minutes + ":" + seconds + ":" + ms}</h2>
               { /* contemplating to add a share button
               <button id = "shareThis" class="resultButtons">Share</button>  */}
            <button onClick={ ()=> {
                props.setTrigger(false);
                props.timeReset(0); 
                props.countReset(0);
                props.resetter();
                
                }} class="resultButtons">Play Again!</button>
            </div> 
        </div>
    )
}
export default Modal;

    


 
 
