import React from 'react';
import './Products.css';

const Product = (props) => {
    const { name, price, img, ratings,category} = props.product;
    return (
        <div >
            <div className='product'>
                <div className="img">
                <img src={img ? img : 'No Found'} alt={name} />
                </div>
                <div className="text">
                    <span>{category}</span>
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                    <h6>{ratings} Star</h6>
                </div>
                <button onClick={props.cartHandle}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;