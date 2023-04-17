import React from 'react';
import './homePic.css'
function HomePic() {
  return (
   <div className='pic-wrap'>
    <div className='left'>
        <div>
            <div className='intro-title'>Matching you with your dream apartment</div>
            <div className='intro-text'>We match you with living spaces tailored to your wants and needs</div>
        </div>
        <div className='intro-button-wrap'>
            <button className='black-button'>How to Get Started</button>
            <button className='black-button'>Sign Up</button>
        </div>
    </div>
    <div className='right'>
        <div className='main-picture'></div>
    </div>
   </div>
  );
}

export default HomePic;