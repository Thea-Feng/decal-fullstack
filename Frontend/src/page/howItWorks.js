import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
function HowItWorks() {
  return (
    <div>
      <Header></Header>
      <div className='gallery-wrap'>
        <div className='garllery-item'>
            <div className='item-wrap-b'>
                <img src='' alt='create an account'></img>
            </div>
            <div className='item-wrap-w'>
                <div className='item-title'>Create an Account</div>
                <div className='item-text'>Description of creating an account, logging in with Berkeley email</div>
                <div className='white-button'>Sign Up</div>
            </div>
                
        </div>

        <div className='garllery-item'>
            <div className='item-wrap-w'>
                <div className='item-title'>List an Apartment</div>
                <div className='item-text'>Description on how to list an apartment</div>
            </div>
            <div className='item-wrap-b'>
                <img src='' alt='list an apartment'></img>
            </div>
        </div>
      </div>

      <div className='garllery-item'>
            <div className='item-wrap-b'>
                <img src='' alt='contact a seller'></img>
            </div>
            <div className='item-wrap-w'>
                <div className='item-title'>Contact a Seller</div>
                <div className='item-text'>Description on how to contact a seller once you find an apartment you like</div>
            </div>
                
        </div>


      <Footer></Footer>
      
    </div>
      
  );
}

export default HowItWorks;