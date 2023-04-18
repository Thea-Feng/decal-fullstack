import React from 'react';
import Header2 from "../components/header2";
import Footer from "../components/footer";
import './currentListings.css'
function CurrentListings() {
  return (
    <div>
      <Header2></Header2>
      <div className='page'>
        <nav>
            <ul>
                <li><button className='black-button' src=''>Sort</button></li>
            </ul>
            <ul>
                <li><button className='white-button' src=''>All Listings</button></li>
                <li><button className='white-button' src=''>List an Apartment</button></li>
            </ul>
        </nav>
        <div className='wrapper'>
            <div className='apart-title'>
                <div className='title-text'>Browse Current Listings</div>
            </div>
            <div className='listing-subtitle'>Description</div>
            <div className='home-gallery-wrap'>
                {/* for card */}
                <div className='listing-gallery-item'>
                <div className='item-pic'>
                    hello
                </div>
                <div className='item-name'>Apartment #1</div>
            </div>
            <div className='listing-gallery-item'>
                <div className='item-pic'>
                    hello
                </div>
                <div className='item-name'>Apartment #2</div>
            </div>
            <div className='listing-gallery-item'>
                <div className='item-pic'>
                    hello
                </div>
                <div className='item-name'>Apartment #2</div>
            </div>
            <div className='listing-gallery-item'>
                <div className='item-pic'>
                    hello
                </div>
                <div className='item-name'>Apartment #3</div>
            </div>
            </div>
        </div>
      </div>
      
      <Footer></Footer>
      
    </div>
      
  );
}

export default CurrentListings;