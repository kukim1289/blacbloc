

var blocksChanged = 0;
var squares = document.getElementsByClassName('square');
for(var i = 0; i < squares.length; i++) {
squares[i].addEventListener("click", changeColor);
}

function changeColor() {
  if (this.style.backgroundColor === "black"){
      this.style.backgroundColor = "white"
      blocksChanged -=1
    }
      else{
this.style.backgroundColor = "black"
blocksChanged +=1
      }
      //document.getElementById('totalSquaresSelected').innerHTML = blocksChanged 
      //remove comment whenever var blocksChanged must be examined
  }

const modal_container = document.getElementById('modal_container');
let [milliseconds,seconds,minutes] = [0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;
    document.getElementById('board').addEventListener('click', ()=>{
        if(int!==null){
            clearInterval(int);
           }
           int = setInterval(displayTimer,10);
           if (blocksChanged == 16){
            clearInterval(int);
            modal_container.classList.add('show')
        }
       });
      
       document.getElementById('close').addEventListener('click', ()=>{
           clearInterval(int);
           [milliseconds,seconds,minutes] = [0,0];
           timerRef.innerHTML = '00 : 000';
            modal_container.classList.remove('show');
            return blocksChanged = 0;
            
        });
       
       
       function displayTimer(){
           milliseconds+=10;
           if(milliseconds == 1000){
               milliseconds = 0;
               seconds++;
               if(seconds == 60){
                   seconds = 0;
                   minutes++;
                   if(minutes == 60){
                       minutes = 0;
                       hours++;
                   }
               }
           }
       
        
        
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
       
        timerRef.innerHTML = `${s} : ${ms}`;
        document.getElementById('summaryTime').innerHTML = `${s} : ${ms}`
       }


function resetAllSquares (){
    for (i=0; i<16; i++)
    squares[i].style.backgroundColor= "white"
}

const shareButton = document.getElementById("shareThis")

shareButton.addEventListener('click', () =>{
    if (navigator.share){
        navigator.share({
            url: `${url}`,
            time: `${m} : ${s} : ${ms}`
        })
    }else {
        navigator.clipboard.writeText({url: `${url}`,
        time: `${m} : ${s} : ${ms}`});

    }
})

   





