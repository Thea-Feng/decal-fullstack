import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import './createProfile.css';

function CreateProfile() { 
    return (
        <div>
            <Header></Header>
            <div class='profile-space'>
                <div class='newprof-container'> 
                    <h1>CREATE YOUR PROFILE</h1>
                    <br></br>
                    <h2>Name</h2>
                    <input type="text" id="name" name="name" placeholder="first and last name"></input>
                    <br></br>
                    <h2>Berkeley Email</h2>                    
                    <input type="email" id="email" name="email" placeholder="email"></input>
                    <h2>Phone Number</h2>
                    <input type="text" id="phonenum" name="phonenum" placeholder="phone number"></input>
                    <h2>Password</h2>
                    <input type="password" id="password" name="password" placeholder="password"></input>
                    <br></br>
                    <button>Create</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default CreateProfile;