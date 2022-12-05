import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="homeSection">
        <h1 className="title-text">BlakBlok</h1>
        <div className="ruleBlock">
          <div className="ruleContainer">
            <h2>How to play...</h2>
            <div className="gameSection">
              <h3>GridBlok</h3>
              <p>1. The timer starts once you click on any blok!</p>
              <p>2. Change all bloks to blak as fast as you can!</p>
            </div>
            <div className="gameSection">
              <h3>SpeedBlok</h3>
              <p>1. The timer starts once you click the center blok!</p>
              <p>2. Tap the SpeedBlok as fast as you can!</p>
            </div>
          </div>
        </div>
    
      </div>

      <div className="chooseGame">
        <h2 className="chooseGameTitle">Choose Game Mode</h2>

        <div className="row">
          <div className="column-left">
            <Link to="/threeGrid" >
              <button className="chooseButton">GridBlok 9</button>
            </Link>
          </div>

          <div className="column-center">
            <Link to="/fourGrid">
              <button className="chooseButton">GridBlok 16</button>
            </Link>
          </div>

          <div className="column-right">
            <Link to="/fiveGrid">
              <button className="chooseButton">GridBlok 25</button>
            </Link>
          </div>
        </div>
        
        <div className="row">
          <div className="column-left">
            <Link to="/speed25" >
              <button className="chooseButton">SpeedBlok 25</button>
            </Link>
          </div>

          <div className="column-center">
            <Link to="/speed50">
              <button className="chooseButton">SpeedBlok 50</button>
            </Link>
          </div>

          <div className="column-right">
            <Link to="/speed100">
              <button className="chooseButton">SpeedBlok 100</button>
            </Link>
          </div>
        </div>
      </div>



    </div>
  );
}

export default Home;
