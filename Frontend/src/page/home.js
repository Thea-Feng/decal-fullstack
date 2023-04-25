import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import HomePic from "../components/homePic";
import HomeApart from "../components/homeApart";
import {useState} from "react";
import Header2 from '../components/header2';
import { useLocation } from 'react-router-dom';

function Home() {
  let login = false;
  try {
    let location = useLocation()
    let data = location.state
    if(data.isLogin) login = true
  } catch {

  }
  const [isLogin, setIsLogin] = useState(login);
  return (
    <div>
      {isLogin ? <Header2></Header2> : <Header></Header>}
      <HomePic isLogin={isLogin}></HomePic>
      <HomeApart isLogin={isLogin}></HomeApart> 
      <Footer isLogin={isLogin}></Footer>
      
    </div>
      
  );
}

export default Home;