import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import HomePic from "../components/homePic";
import HomeApart from "../components/homeApart";

function Home() {
  return (
    <div>
      <Header></Header>
      <HomePic></HomePic>
      <HomeApart></HomeApart> 
      <Footer></Footer>
      
    </div>
      
  );
}

export default Home;