import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import './howItWorks.css'
import { useState } from 'react';
import { useLocation } from 'react-router';
import Header2 from '../components/header2';
function HowItWorks(props) {
    let login = false;
    try {
      let location = useLocation()
      let data = location.state
      console.log(data)
      if(data.isLogin) login = true
    } catch {
  
    }
    const isLogin = login;
    const source2 = "https://www.transparentpng.com/thumb/apartment/apartment-clipart-hd-14.png"
    const source1 = "https://cdni.iconscout.com/illustration/premium/thumb/create-account-6333606-5230166.png"
    const source3 = "https://selleracademy.digikala.com/wp-content/uploads/2018/10/Support.png"
  return (
    <div>
      {isLogin ? <Header2></Header2> : <Header></Header>}

      <div className='gallery-wrap'>
        <div className='gallery-item'>
            <div className='item-wrap-b'>
                <img className='item-img' src={source1} alt='create an account'></img>
            </div>
            <div className='item-wrap-w'>
                <div className='text-wrap'>
                    <div className='item-title'>Create an Account</div>
                    <div className='item-text'>Create an account and log in with your Berkeley email to find the perfect housing solution for your needs in this vibrant city.
</div>
                    <button className='white-button' alt="">Sign Up</button>
                </div>
                
            </div>
                
        </div>

        <div className='gallery-item'>
            <div className='item-wrap-w'>
                <div className='text-wrap'>
                    <div className='item-title'>List an Apartment</div>
                    <div className='item-text'>To list your apartment on our website, simply create an account and provide the necessary information about your rental property. Our platform allows you to upload photos and details about your apartment to attract potential renters and find the perfect tenant.
</div>
                </div>
            </div>

            <div className='item-wrap-b'>
                <img className='item-img'  src={source2} alt='list an apartment'></img>
            </div>
        </div>
      
        <div className='gallery-item'>
            <div className='item-wrap-b'>
                <img className='item-img' src={source3} alt='create an account'></img>
            </div>
            <div className='item-wrap-w'>
                <div className='text-wrap'>
                    <div className='item-title'>Contact a Seller</div>
                    <div className='item-text'>Once you find an apartment you like, you can easily contact the seller by either clicking on the provided email address or phone number on our website. From there, you can initiate contact and begin the process of setting up a viewing or negotiating the rental terms.</div>
                </div>
                
            </div>
                
        </div>

    </div>
      <Footer></Footer>
      
    </div>
      
  );
}

export default HowItWorks;