import React from 'react'
import "./About.css"



function About() {
  return (



      <div className="about">

        <h1 className='aboutTitle'>About</h1>

          <div className="ruleContainer">
            <h3 className='subTitle'>How to play</h3>
            <div className="rule">
              <h3 className='ruleTitle'>GridBlok</h3>
              <p>1. The timer starts once you click on any blok</p>
              <p>2. Change all bloks to blak as fast as you can</p>
              <p>3. The timer stops once you change all bloks to blak</p>

            </div>
            <div className="rule">
              <h3 className='ruleTitle'>SpeedBlok</h3>
              <p>1. The timer starts once you click the center blok</p>
              <p>2. Tap the SpeedBlok as fast as you can</p>
              <p>3. The timer stops once you hit the speed number</p>
            </div>
          </div>
<div className='originContainer' >

<h3 className='subTitle'>GridBlok</h3>

<div className='origin'>
<p>Ever deleted a bunch of pictures from your phone?</p>
<p>About 2 years ago...after breaking up with my girlfriend, I looked for pictures that we took together. 
    With each picture I selected, I saw a blue checkmark overlay the picture to denote
   that I selected that particular picture to be deleted. 
   Quickly selecting pictures row by row, I thought to myself, "this would make a pretty good game".
   </p>
</div>

<h3 className='subTitle'>SpeedBlok</h3>

<div className='origin'>
<p>SpeedBlok's origin story is not as dramatic. </p>
<p>I was invited for a technical interview at a robotics company
  in Pasadena. The entirety of the interview was in React.js and the assignment was:
  increment a number with every click of a button. I failed that technical interview since I knew absolutely nothing about React at the time.
  Ironically, BlakBlok is completely created with React.
   </p>
</div>

</div>

<div className='imageBlock'>
<div className='imageContainer'>
<div className='creatorImage' style={{borderRadius: '50%'}}>
</div>
</div>
</div>


<div className='originContainer' >
<div className='origin'>
<p className='message'>
  "Smile! It's free."
  </p>
  <p>
Hey! I hope you had fun with BlakBlok. Let me know
if you have any suggestions to make BlakBlok more enjoyable.
  </p>
</div>
</div>

  


        </div>
  


 
  )
}

export default About