import React from 'react';
import Header2 from "../components/header2";
import Footer from "../components/footer";
import Banner from '../components/banner';
function SpecificListing() {
  return (
    <div>
      <Header2></Header2>
      <div className='button-banner'>
        <div className='blank'></div>
        <div className='button-wrap'>
            <a className='white-button' src=''>All Listings</a>
            <a className='white-button' src=''>List an Apartment</a>
        </div>
      </div>
      <Banner></Banner>
      <div className='listing-wrap'>
        <div className='listing-item'>
            <div className='item-title'>Rooms</div>
            <ul>
                <div>1 bedroom</div>
                <div>1 bedroom</div>
                <div>1 bedroom</div>
                <div>1 bedroom</div>
            </ul>
        </div>

        <div className='listing-item'>
            <div className='item-title'>Amentities</div>  
            <div>1 bedroom</div>
        </div>

        <div className='listing-item'>
            <img src='' alt='here'></img>
        </div>
        <div className='listing-item'>
            <img src='' alt='here'></img>
        </div>



        <div className='listing-item'>
            <div className='item-title'>Contact Information</div>
            <ul>
                <div>Name</div>
                <div>Phone Number</div>
            </ul>
        </div>
        <div classNameu='listing-item'>
            <div className='item-title'>Additional Information</div>  
            <div>More Information</div>
        </div>
      </div>
      <Footer></Footer>
      
    </div>
      
  );
}

export default SpecificListing;