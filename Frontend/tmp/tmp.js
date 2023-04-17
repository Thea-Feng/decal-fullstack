import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">Your Company Logo</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import House from './House';
import Filter from './Filter';
import './App.css';

function App() {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    fetch('/api/houses')
      .then(res => res.json())
      .then(data => {
        setHouses(data);
        setFilteredHouses(data);
      })
      .catch(error => console.error(error));
  }, []);

  const filterHouses = (minPrice, maxPrice, minRooms, maxRooms) => {
    const filtered = houses.filter(house => {
      return house.price >= minPrice &&
             house.price <= maxPrice &&
             house.rooms >= minRooms &&
             house.rooms <= maxRooms;
    });
    setFilteredHouses(filtered);
  };

  return (
    <div className="App">
      <Filter filterHouses={filterHouses} />
      <div className="house-container">
        {filteredHouses.map(house => (
          <House key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
}

export default App;
