import React from 'react';
import './header2.css';
import { useNavigate } from 'react-router';
function Header2() {
    const name = "Oski Bear";
    const navigate = useNavigate();

  return (
    <header>
      <nav>
      <ul>
          <li onClick={()=>{navigate("/", {state:{isLogin:true}})}}><a className="big-title">BERKERLEY APARTMENTS</a></li>
        </ul>
        <ul>
          <div onClick={()=>{navigate("/studentProfile", {state:{isLogin:true}})}} style={{marginRight:'100px'}}>Welcome, {name}</div>
          {/* <li><a href="#" className='avator'></a></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header2;