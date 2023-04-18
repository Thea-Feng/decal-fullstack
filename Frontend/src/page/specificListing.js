import React from 'react';
import Header2 from "../components/header2";
import Footer from "../components/footer";
import Banner from '../components/banner';
import './specificListing.css'
function SpecificListing() {
  return (
    <div>
      <Header2></Header2>
      <nav style={{backgroundColor:'#F2F2F2',paddingRight:'75px'}}>
            <ul>
                <div></div>
            </ul>
            <ul>
                <li><button className='white-button' src=''>All Listings</button></li>
                <li><button className='white-button' src=''>List an Apartment</button></li>
            </ul>
        </nav>
      <Banner></Banner>
      <div className='specificlisting-wrapper'>
        <div className='specificlisting-item'>
            <div className='item-title'>Rooms</div>
            <ul>
                <div>1 bedroom</div>
                <div>1 bedroom</div>
                <div>1 bedroom</div>
                <div>1 bedroom</div>
            </ul>
        </div>

        <div className='specificlisting-item'>
            <div className='item-title'>Amentities</div>  
            <ul>
                <div>1 bedroom</div>
            </ul>
        </div>

        <div className='specificlisting-item'>
            <img src='' alt='here'></img>
        </div>
        <div className='specificlisting-item'>
            <img src='' alt='here'></img>
        </div>



        <div className='specificlisting-item'>
            <div className='item-title'>Contact Information</div>
            <ul>
                <div>Name</div>
                <div>Phone Number</div>
            </ul>
        </div>

        <div className='specificlisting-item'>
            <div className='item-title'>Additional Information</div>
            <ul>
                <div>More Information</div>
            </ul>
        </div>
       

      </div>
      <Footer></Footer>
      
    </div>
      
  );
}

export default SpecificListing;