import React from 'react';
import Header2 from "../components/header2";
import Footer from "../components/footer";
import './studentProfile.css';
import { useNavigate } from 'react-router';

function StudentProfile() { 
    const navigate = useNavigate()
    return (
        <div>
            <Header2></Header2>
            <nav style={{backgroundColor:'#F2F2F2',paddingRight:'75px'}}>
                <ul>
                    <div></div>
                </ul>
                <ul>
                    <li onClick={()=>{navigate("/currentListing", {state:{isLogin:true}})}}><button className='white-button' src=''>All Listings</button></li>
                    <li onClick={()=>{navigate("/newListing", {state:{isLogin:true}})}}><button className='white-button' src=''>List an Apartment</button></li>
                </ul>
            </nav>
            <div class="main-space">
                <div class="profile-container">
                    <div class="profile-pic">
                        <img src="insert-image.png"></img>
                    </div>
                    <div class="profile-info">
                        <h1>Oski Bear</h1>
                        <br></br>
                        <h2>Berkeley Email: </h2> <p>oski.bear@berkeley.edu</p>
                        <h2>Phone Number: </h2> <p>(123) 456-7890</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default StudentProfile;