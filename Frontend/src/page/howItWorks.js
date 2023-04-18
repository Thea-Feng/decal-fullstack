import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import './howItWorks.css'
function HowItWorks() {
  return (
    <div>
      <Header></Header>
      <div className='gallery-wrap'>
        <div className='gallery-item'>
            <div className='item-wrap-b'>
                <img className='item-img' src='' alt='create an account'></img>
            </div>
            <div className='item-wrap-w'>
                <div className='text-wrap'>
                    <div className='item-title'>Create an Account</div>
                    <div className='item-text'>Description of creating an account, logging in with Berkeley email</div>
                    <button className='white-button' src=''>Sign Up</button>
                </div>
                
            </div>
                
        </div>

        <div className='gallery-item'>
            <div className='item-wrap-w'>
                <div className='text-wrap'>
                    <div className='item-title'>List an Apartment</div>
                    <div className='item-text'>Description on how to list an apartment</div>
                </div>
            </div>

            <div className='item-wrap-b'>
                <img src='' alt='list an apartment'></img>
            </div>
        </div>
      
        <div className='gallery-item'>
            <div className='item-wrap-b'>
                <img className='item-img' src='' alt='create an account'></img>
            </div>
            <div className='item-wrap-w'>
                <div className='text-wrap'>
                    <div className='item-title'>Contact a Seller</div>
                    <div className='item-text'>Description of creating an account, logging in with Berkeley email</div>
                </div>
                
            </div>
                
        </div>

    </div>
      <Footer></Footer>
      
    </div>
      
  );
}

export default HowItWorks;