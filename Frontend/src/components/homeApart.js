import React from 'react';
import './homeApart.css';
import '../public.css';

function HomeApart() {
    const source1 = "https://jonesberkeley.com/wp-content/uploads/2020/08/Jones-Berkeley-1400x933.jpg"
    const source2 = "https://housing.berkeley.edu/wp-content/uploads/20210506_RSFCampus_bhs_080-750x500-1-700x500.jpg"
    const source3 = "https://images1.apartments.com/i2/aLj53Xf8O_gp4K6LaRxHoVQ8GH9GBJvNUAIP_A6Xd00/111/garden-village-berkeley-ca-primary-photo.jpg"
    return (
   <div className='wrapper'>
        <div className='apart-title'>
            <div className='title-text'>Featured Apartments</div>
        </div>
        <div className='home-gallery-wrap'>
            <div className='home-gallery-item'>
                <div className='item-pic'>
                    <img src={source1} alt='' className='smallimg'>
                    </img>
                </div>
                <div className='item-name'>Apartment #1</div>
            </div>
            <div className='home-gallery-item'>
                <div className='item-pic'>
                <img src={source2} alt='' className='smallimg'>
                    </img>
                </div>
                <div className='item-name'>Apartment #2</div>
            </div>
            <div className='home-gallery-item'>
                <div className='item-pic'>
                <img src={source3} alt='' className='smallimg'>
                    </img>
                </div>
                <div className='item-name'>Apartment #3</div>
            </div>
        </div>
   </div>
  );
}

export default HomeApart;