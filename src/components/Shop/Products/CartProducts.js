import React from 'react';
import './CartProducts.css'
const CartProducts = (props) => {
    const { name, price, img} = props.item;
    return (
        <div className='cart'>
            <img src={img} alt={name} />
            <h5 className='p'>{name}</h5>
            <span>${price}</span>
        </div>
    );
};

export default CartProducts;