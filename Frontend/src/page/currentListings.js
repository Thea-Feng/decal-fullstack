import React from 'react';
import Header2 from "../components/header2";
import Header from '../components/header';
import Footer from "../components/footer";
import './currentListings.css'
import { useNavigate } from 'react-router';
import { Form } from 'react-router-dom';
import { useLocation } from 'react-router';
function CurrentListings(props) {
    const pureArr = 
    [
        {
        "title": "Addison Apartments",
        "source": "https://www.addisonartsapartments.com/wp-content/themes/addisionone/img/addisonnew.jpg"
      },
      {
        "title": "Identity",
        "source": "https://www.identityloganpark.com/images/update-pages-images/hero-identity-dinkytown-3.jpg"
      },
      {
        "title": "Varsity Berkeley",
        "source": "https://medialibrarycf.entrata.com/15647/MLv3/3/21/2022/2/4/9601/60b7ab36cf4632.14762165555.jpg"
      },
       {
        "title": "Manville Apartments",
        "source": "https://housing.berkeley.edu/wp-content/uploads/MV-5-700x500.jpg"
      },
      {
        "title": "Jones Berkeley",
        "source": "https://s7d9.scene7.com/is/image/greystarprod/16614RND1?qlt=72&wid=600"
      },
      {
        "title": "Blake",
        "source": "https://s7d9.scene7.com/is/image/greystarprod/18375RND1?qlt=72&wid=600"
      },
       {
        "title": "University Park Apartments",
        "source": "https://www.universityparkberkeley.com/wp-content/uploads/elementor/thumbs/university-park-berkeley-aerial-3-pnrw9sm8v3ko1zej0xruhmswu3oum3ldecdsmwvdtk.jpg"
      },
       {
        "title": "The Granada",
        "source": "https://www.rentbtberkeley.com/images/site/granada/carousel/01_gr_front.jpg"
      }
    ]

    let login = false;
    try {
      let location = useLocation()
      let data = location.state
      console.log(data)
      if(data.isLogin) login = true
    } catch {
  
    }
    const isLogin = login;
    const navigate = useNavigate()
  return (
    <div>
            {isLogin ? <Header2></Header2> : <Header></Header>}

      <div className='page'>
        <nav style={{backgroundColor:'#F2F2F2',paddingRight:'75px'}}>

            <ul>
                <li><button className='black-button' src=''>Sort</button></li>
            </ul>
            <ul>
                <li onClick={()=>{navigate("/currentListing", {state:{isLogin:isLogin}})}}><button  className='white-button' src=''>All Listings</button></li>
                <li  onClick={()=>{navigate("/newListing", {state:{isLogin:isLogin}})}}><button className='white-button' src=''>List an Apartment</button></li>
            </ul>
        </nav>
        <div className='wrapper'>
            
            <div className='apart-title'>
                <div className='title-text'>Browse Current Listings</div>
            </div>
            <div className='listing-subtitle'>Description</div>
            <div className='home-gallery-wrap'>
                {
                    pureArr.map(item => (
                        <div  onClick={()=>{navigate("/specificListing", {state:{isLogin:isLogin}})}} className='listing-gallery-item'>
                            <div className='item-picture'>
                                <img className='subimg' src={item.source} alt=''></img>
                            </div>
                            <div className='item-description'>
                                <h5>{item.title}</h5>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </div>
      </div>
      
      <Footer></Footer>
      
    </div>
      
  );
}

export default CurrentListings;