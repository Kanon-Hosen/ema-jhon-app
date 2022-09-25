import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, img, ratings,category} = props.product;
    return (
        <div className='product'>
            <div>
                <div className="img">
                <img src={img ? img : 'No Found'} alt={name} />
                </div>
                <div className="text">
                    <span>{category}</span>
                    <h4>{name}</h4>
                    <p>Price: {price}</p>
                    <h6>{ratings} Star</h6>
                </div>
            </div>
        </div>
    );
};

export default Product;