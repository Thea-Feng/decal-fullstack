import React from 'react';
import Header2 from "../components/header2";
import Footer from "../components/footer";
import './currentListings.css'

function CurrentListings() {
    const pureArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div>
      <Header2></Header2>
      <div className='page'>
        <nav style={{backgroundColor:'#F2F2F2',paddingRight:'75px'}}>

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
                {
                    pureArr.map(item => (
                        <div className='listing-gallery-item'>
                            <div className='item-picture'>
                                hello
                            </div>
                            <div className='item-description'>
                                <h5>Apartment #{item}</h5>
                                {/* <div className='sub-description'>description...................................................</div> */}
                            </div>
                        </div> 
                    ))
                    // pureArr.map(item => (
                    //     <div className='home-gallery-item'>
                    //         <div className='item-pic'>
                    //             hello
                    //         </div>
                    //         <div className='item-name'>
                    //             <h5>Apartment #{item}</h5>
                    //             <div className='sub-description'>description......................................</div>
                    //         </div>
                    //     </div> 
                    // ))
                }



            </div>
        </div>
      </div>
      
      <Footer></Footer>
      
    </div>
      
  );
}

export default CurrentListings;