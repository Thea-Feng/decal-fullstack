import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import HomePic from "../components/homePic";
import HomeApart from "../components/homeApart";
import {useState} from "react";
import Header2 from '../components/header2';


function Home() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {isLogin ? <Header2></Header2> : <Header></Header>}
      <HomePic></HomePic>
      <HomeApart></HomeApart> 
      <Footer></Footer>
      
    </div>
      
  );
}

export default Home;