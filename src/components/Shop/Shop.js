import React from 'react';
import Cart from './Cart/Cart';
import Products from './Products/Products';
import './Shop.css'
const Shop = () => {
    return (
        <div className='shop'>
                <Products></Products>
                <Cart></Cart>
        </div>
    );
};

export default Shop;