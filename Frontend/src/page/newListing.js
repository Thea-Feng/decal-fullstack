import React from 'react';
import Header2 from "../components/header2";
import Footer from "../components/footer";
import './newListing.css';

function NewListing() { 
    return (
        <div> 
            <Header2></Header2>
            <nav style={{backgroundColor:'#F2F2F2',paddingRight:'75px'}}>
            <ul>
                <div></div>
            </ul>
            <ul>
                <li><button className='white-button' src=''>All Listings</button></li>
            </ul>
        </nav>
            <div class="listing-space">
                <div class="listing-container"> 
                    <h1>LIST YOUR APARTMENT</h1>
                    <div class="listing-info">
                        <div class="first-col">
                            <h3>Apartment Name</h3>
                            <input type="text" id="apt-name" placeholder="apartment complex"></input>
                            <h3>Apartment Type</h3> 
                            <select name="apartment-types" id="apartment-types">
                                <option value="empty">---</option>
                                <option value="studio">studio</option>
                                <option value="1bed">1 bedroom</option>
                                <option value="2bed">2 bedroom</option>
                                <option value="3bed">3 bedroom</option>
                                <option value="4bed">4 bedroom</option>
                            </select>
                            <h3>Leasing Start</h3>
                            <input type="date" id="lease-start"></input>
                            <h3>Leasing End</h3>
                            <input type="date" id="lease-end"></input>
                            <h3>Rooms</h3>
                            <textarea name="paragraph" cols="50" rows="10" placeholder="bedrooms, bathrooms, living room, kitchen, etc..."></textarea>
                            {/* <h3>Bedrooms</h3>
                            <select name="num-beds" id="num-beds">
                                <option value="empty">---</option>
                                <option value="1bed">1 bedroom</option>
                                <option value="2bed">2 bedroom</option>
                                <option value="3bed">3 bedroom</option>
                                <option value="4bed">4 bedroom</option>
                            </select>
                            <h3>Bathrooms</h3>
                            <select name="num-baths" id="num-bath">
                                <option value="empty">---</option>
                                <option value="1bath">1 bath</option>
                                <option value="2bath">2 bath</option>
                                <option value="3bath">3 bath</option>
                                <option value="4bath">4 bath</option>
                            </select> */}
                            <h3>Contact Information</h3>
                            <textarea name="paragraph" cols="50" rows="10" placeholder="email, phone number, socials..."></textarea>
                        </div> 
                        <div class="second-col">
                            <h3>Address</h3>
                            <input type="text" id="address" placeholder="address"></input>
                            <h3>Monthly Rent</h3>
                            <input type="text" id="rent" placeholder="$$$"></input>
                            <h3>Lease Length</h3>
                            <select name="lease-len" id="lease-len">
                                <option value="empty">---</option>
                                <option value="6mon">6 months</option>
                                <option value="9mon">9 months</option>
                                <option value="12mon">12 months</option>
                                <option value="15mon">15 months</option>
                            </select>
                            <h3>Rating</h3>
                            <input type="number" id="rating" placeholder="out of 5"></input>
                            <h3>Amenities</h3>
                            <textarea name="paragraph" cols="50" rows="10" placeholder="in-unit laundry, rooftop, gym, etc..."></textarea>
                            <h3>Additional Information</h3>
                            <textarea name="paragraph" cols="50" rows="10"></textarea>
                        </div>
                    </div>
                    <div class="listing-buttons">
                        <button class="upload-photos">Upload photos</button>
                        <br></br>
                        <button class="submit-listing">Submit</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default NewListing;