import React from 'react';
import Header2 from "../components/header2";
import Footer from "../components/footer";
import Banner from '../components/banner';
import './specificListing.css'
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import Header from '../components/header';
import { useState } from 'react';
function SpecificListing() {
    const navigate = useNavigate();
    const source2 = "https://images1.apartments.com/i2/3pOtQeG0zDN78hxe_mQSPlCjhmb3rCK2IPZHqGj6OaE/117/the-laureate-berkeley-ca-4br-3ba---plan-f2.jpg?p=1"
    const source3 = "https://images1.apartments.com/i2/bxsU0S8r6V95MHjnnI7635zVky97E_LH-UZoFDSDSrs/117/the-laureate-berkeley-ca-building-photo.jpg?p=1"
    let login = false;
  try {
    let location = useLocation()
    let data = location.state
    console.log(data)
    if(data.isLogin) login = true
  } catch {

  }
  const [isLogin, setIsLogin] = useState(login);
  
    
    return (
    <div>
        {isLogin ? <Header2></Header2> : <Header></Header>}

      <nav style={{backgroundColor:'#F2F2F2',paddingRight:'75px'}}>
            <ul>
                <div></div>
            </ul>
            <ul>
                <li><button  onClick={()=>{navigate("/currentListing", {state:{isLogin:isLogin}})}}className='white-button' src=''>All Listings</button></li>
                <li><button  onClick={()=>{navigate("/newListing", {state:{isLogin:isLogin}})}}className='white-button' src=''>List an Apartment</button></li>
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
                <div>The Laureate Apartments in Berkeley offers a fitness center, rooftop deck, bike storage, and a package receiving service. In each unit, residents can enjoy features such as in-unit laundry, hardwood flooring, stainless steel appliances, and expansive windows with views of the city.</div>
            </ul>
        </div>
        <div className='specificlisting-item'>
            <img className='pureImg' src={source2} alt='here'></img>
        </div>
        <div className='specificlisting-item'>
            <img className='pureImg' src={source3} alt='here'></img>
        </div>



        <div className='specificlisting-item'>
            <div className='item-title'>Contact Information</div>
            <ul>
                <div>Carol Christ</div>
                <div>(222)222-222</div>
            </ul>
        </div>

        <div className='specificlisting-item'>
            <div className='item-title'>Additional Information</div>
            <ul>
                <div>The Laureate Apartments also offer a pet-friendly policy, making it easy for residents to bring their furry companions along. The building is conveniently located near several public transportation options, including BART and bus stops, allowing for easy access to the rest of the city. </div>
            </ul>
        </div>
       

      </div>
      <Footer></Footer>
      
    </div>
      
  );
}

export default SpecificListing;