import React from 'react';
import './header2.css';

function Header2() {
  return (
    <header>
      <nav>
      <ul>
          <li><a className="big-title">BERKERLEY APARTMENTS</a></li>
        </ul>
        <ul>
          <div>Welcome, {}</div>
          <li><a href="#" className='avator'></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header2;