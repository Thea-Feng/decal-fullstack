import React from 'react';
import '../public.css';
function Banner() {
  return (
    <div className='banner-wrap'>
      <div className='sqaure-pic'>

      </div>
      <div className='big-intro'>
        <div className='header-line'>
          <div className='date'>1/1/2023 to 12/1/2023</div>
          <div className='rating'>4.74/5</div>
        </div>
        <div>
          <div className='intro-title'>The Laureate</div>
          <div className='intro-subtitle'>Studio Apartment</div>
          <div className='intro-small'>2466 Telegraph</div>
          <div className='intro-small'>$1500 per month</div>
          <div className='intro-small'>1 person</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;