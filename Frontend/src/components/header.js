import React from 'react';
import './header.css';
import '../public.css';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <ul>
          <li onClick={()=>{navigate("/", {state:{isLogin:false}})}}><a className="big-title">BERKERLEY APARTMENTS</a></li>
        </ul>
        <ul>
          <li onClick={()=>{navigate("/tutorial", {state:{isLogin:false}})}}><a href="#">How it Works</a></li>
          <li onClick={()=>{navigate("/signin", {state:{isLogin:false}})}}><button className='white-button'>Sign in</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;