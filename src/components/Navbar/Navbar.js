import React from 'react';
import Image from '../../images/Logo.svg';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className='nav'>
            <img src={Image} alt="" />
            <div>
                <a href="../Shop/">Shop</a>
                <a href="/about">About</a>
                <a href="/Blog">Blog</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Navbar;