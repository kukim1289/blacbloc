
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    setButton(false);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BlakBlok
            <i class="fa-regular fa-square"/>
            <i class="fa-regular fa-square"/> 
            <i class="fa-solid fa-square"/> 
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <div className='gameMenu'>
            <Link
            to="/threeGrid"
            className="nav-links"
            style={{ textDecoration: "none" }}
            onClick={closeMobileMenu}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-3 fa-stack-1x fa-inverse"></i>
              </span>GridBlok 3x3
              
            </div>
          </Link>

          <Link
            to="/fourGrid"
            className="nav-links"
            style={{ textDecoration: "none" }}
            onClick={closeMobileMenu}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-4 fa-stack-1x fa-inverse"></i>
              </span>
              GridBlok 4x4
            </div>
          </Link>

          <Link
            to="/speed25"
            className="nav-links"
            style={{ textDecoration: "none" }}
            onClick={closeMobileMenu}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x" ></i>
                <i class="fa-solid fa-face-smile fa-stack-1x fa-inverse"></i>
              </span>
              SpeedBlok 25
            </div>
          </Link>

          <Link
            to="/speed50"
            className="nav-links"
            style={{ textDecoration: "none" }}
            onClick={closeMobileMenu}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-face-meh fa-stack-1x fa-inverse"></i>
              </span>
              SpeedBlok 50
            </div>
          </Link>

          <Link
            to="/speed100"
            className="nav-links"
            style={{ textDecoration: "none" }}
            onClick={closeMobileMenu}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-skull fa-stack-1x fa-inverse"></i>
              </span>
              SpeedBlok 100
            </div>
          </Link>

          <Link
            to="/About"
            className="nav-links"
            style={{ textDecoration: "none" }}
            onClick={closeMobileMenu}
          >
            <div>
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fa-solid fa-question fa-stack-1x fa-inverse"></i>
              </span>
              About
            </div>
          </Link>


              </div>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;