import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Products from './Products/Products';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const cartHandle = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop'>
            <div className="products">
            {
                products.map(product =><Products key={product.id} product={product} cartHandle={()=>cartHandle(product)}></Products>)
            }
            </div>
            <div className="cartItem">
                <p>Order item: {cart.length}</p>
               <Cart cart={cart}></Cart> 
            </div>
        </div>
    );
};

export default Shop;