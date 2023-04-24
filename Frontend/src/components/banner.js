import React from 'react';
import '../public.css';
import './banner.css'
function Banner() {
  const source1 =  "https://images1.apartments.com/i2/Tix7kFLILWXermQ2X_qspLQBKOITQeWxJvJlI8KYxO4/117/the-laureate-berkeley-ca-building-photo.jpg?p=1"

  return (
    <div className='banner-wrap'>
      <img src={source1} className='pureImg' alt=''></img>
      <div className='big-intro'>
        <div className='header-line'>
          <div className='date'>1/1/2023 to 12/1/2023</div>
          <div className='rating'>4.74/5</div>
        </div>
        <div>
          <div className='intro-title'>The Laureate</div>
          <div className='intro-subtitle'>Studio Apartment</div>
          <div className='intro-small'>2556 Telegraph Ave, Berkeley, CA 94704</div>
          <div className='intro-small'>$1,500 per month for 12 months</div>
          <div className='intro-small'>1 person</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;