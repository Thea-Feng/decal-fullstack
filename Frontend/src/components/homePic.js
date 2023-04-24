import React from 'react';
import './homePic.css';
// import '../public.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Header2 from '../components/header2';
function HomePic(props) {
    const isLogin = props.isLogin
    const navigate = useNavigate();
    const source = "https://d3qvqlc701gzhm.cloudfront.net/thumbs/72faedaefe8cc6a5d08cf0b61e83813441db0f754d1077429eb0b777e53dbba3-750.jpg"
  return (
   <div className='pic-wrap'>
    <div className='left'>
        <div>
            <div className='intro-title'>Matching you with your dream apartment</div>
            <div className='intro-text'>We match you with living spaces tailored to your wants and needs</div>
        </div>
        <div className='intro-button-wrap'>
            <button onClick={()=>{navigate("/tutorial", {state:{isLogin:isLogin}})}} className='black-button'>How to Get Started</button>
            <button onClick={()=>{navigate("/createProfile", {state:{isLogin:isLogin}})}} className='black-button'>Sign Up</button>
        </div>
    </div>
    <div className='right'>
        <div className='main-picture'>
            <img onClick={()=>{navigate("/currentListing", {state:{isLogin:isLogin}})}} className='main-img' alt='' src={source} ></img>
        </div>
    </div>
   </div>
  );
}

export default HomePic;