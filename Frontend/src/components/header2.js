import React from 'react';
import './header2.css';

function Header2() {
    const name = "Alice";
  return (
    <header>
      <nav>
      <ul>
          <li><a className="big-title">BERKERLEY APARTMENTS</a></li>
        </ul>
        <ul>
          <div style={{marginRight:'100px'}}>Welcome, {name}</div>
          {/* <li><a href="#" className='avator'></a></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header2;