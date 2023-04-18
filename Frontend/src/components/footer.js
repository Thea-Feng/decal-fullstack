import React from 'react';
import './footer.css';
// import '../public.css';
function Footer() {
  return (
    <footer>
      <div className="title">BERKERLEY APARTMENTS</div>
      <div className="vertical-line"></div>
      {/* <div > */}
        <ul className='link-wrap'>
          <li className='link'><a href="#">Getting Started</a></li>
          <li className='link'><a href="#">Contact Us</a></li>
          <li className='link'><a href="#">How it Works</a></li>
          <li className='link'><a href="#">Email</a></li>
        </ul>
      {/* </div> */}
    </footer>
  );
}

export default Footer;