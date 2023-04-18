import React from 'react';
import './homeApart.css';
import '../public.css';

function HomeApart() {
  return (
   <div className='wrapper'>
        <div className='apart-title'>
            <div className='title-text'>Featured Apartments</div>
        </div>
        <div className='home-gallery-wrap'>
            <div className='home-gallery-item'>
                <div className='item-pic'>
                    hello
                </div>
                <div className='item-name'>Apartment #1</div>
            </div>
            <div className='home-gallery-item'>
                <div className='item-pic'>
                    hello
                </div>
                <div className='item-name'>Apartment #2</div>
            </div>
            <div className='home-gallery-item'>
                <div className='item-pic'>
                    hello
                </div>
                <div className='item-name'>Apartment #3</div>
            </div>
        </div>
   </div>
  );
}

export default HomeApart;