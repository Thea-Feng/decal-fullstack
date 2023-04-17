import React from 'react';
import './header.css'
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a className="big-title">BERKERLEY APARTMENTS</a></li>
        </ul>
        <ul>
          <li><a href="#">How it Works</a></li>
          <li><button className='white-button'>Sign in</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;