
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
            <li className='nav-item'>
              <Link to='/threeGrid' className='nav-links' onClick={closeMobileMenu}>
              GridBlok 9
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/fourGrid'
                className='nav-links'
                onClick={closeMobileMenu}
              >GridBlok 16
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/fiveGrid'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                GridBlok 25
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/speed25'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SpeedBlok 25 
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/speed50'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SpeedBlok 50
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/speed100'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SpeedBlok 100 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;