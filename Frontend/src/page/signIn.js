import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import './signIn.css';
import { useNavigate } from 'react-router';
function SignIn() { 
    const navigate = useNavigate();
    return (
        <div>
            <Header></Header>
            <div class="signin-space">
                <div class="signin-container">
                    <h1>WELCOME BACK</h1>
                    <br></br>
                    <h2>Berkeley Email</h2>
                    <input type="text" id="email" name="email" placeholder="email"></input>
                    <br></br>
                    <h2>Password</h2>
                    <input type="password" id="password" name="password" placeholder="password"></input>
                    <br></br>
                    <button onClick={()=>{navigate("/", {state: {isLogin:true}})}}>Sign in</button>
                    <br></br>
                    <br></br>
                    <p onClick={()=>{navigate("/createProfile", {state: {isLogin:true}})}}>Don't have an account?</p>
                </div> 
            </div>
            <Footer></Footer>
        </div>
    );
}

export default SignIn;