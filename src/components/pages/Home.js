import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function Home() {
  return (
    <div>

      <div className="browseContainer">
      <div className="browseSection">
<h2 className="browseTitle">Home</h2>
<p>Select a game mode!</p>
      </div>
      <div className="gameIcon">
      <i class="fa-solid fa-gamepad"></i>
      </div>
      </div>

      <div className="gameContainer">
        <div className="gameSection">
          <Link
            to="/threeGrid"
            className="chooseButton"
            style={{ textDecoration: "none" }}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-3 fa-stack-1x fa-inverse"></i>
              </span>
              <h4>GridBlok 3x3</h4>
            </div>
          </Link>

          <Link
            to="/fourGrid"
            className="chooseButton"
            style={{ textDecoration: "none" }}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-4 fa-stack-1x fa-inverse"></i>
              </span>
              <h4>GridBlok 4x4</h4>
            </div>
          </Link>

          <Link
            to="/speed25"
            className="chooseButton"
            style={{ textDecoration: "none" }}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x" ></i>
                <i class="fa-solid fa-face-smile fa-stack-1x fa-inverse"></i>
              </span>
              <h4>SpeedBlok 25</h4>
            </div>
          </Link>

          <Link
            to="/speed50"
            className="chooseButton"
            style={{ textDecoration: "none" }}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-face-meh fa-stack-1x fa-inverse"></i>
              </span>
              <h4>SpeedBlok 50</h4>
            </div>
          </Link>

          <Link
            to="/speed100"
            className="chooseButton"
            style={{ textDecoration: "none" }}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-skull fa-stack-1x fa-inverse"></i>
              </span>
              <h4>SpeedBlok 100</h4>
            </div>
          </Link>

          <Link
            to="/About"
            className="chooseButton"
            style={{ textDecoration: "none" }}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-question fa-stack-1x fa-inverse"></i>
              </span>
              <h4>About</h4>
            </div>
          </Link>
        </div>
      </div>
<Footer/>
      
    </div>
  );
}

export default Home;
