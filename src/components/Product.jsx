import React from 'react';
import './Products.css'

const Product = ({product}) => {
    return (
        <div className='product'>
            <img src={product.img}  /> <br />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;