import React from 'react';
import image from '../../images/Group 12.jpg';
import './Hero.css'
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-text">
                <p>Sale up to 70% off</p>
                <h2>New Collection For Fall</h2>
                <h6>Discover all the new arrivals of ready-to-wear collection.</h6>
                <button>SHOP NOW</button>
            </div>
            <div className="hero-img">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Hero;