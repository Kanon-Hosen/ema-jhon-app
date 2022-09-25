// import React, { useState } from 'react';
import CartProducts from '../Products/CartProducts';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            {
                cart.map(item =><CartProducts key={Math.random()*10} item={item}></CartProducts>)
            }
        </div>
    );
};

export default Cart;