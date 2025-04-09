import React from 'react';
import './Products.css'

const Product = ({product, handleCart}) => {
    return (
        <div className='product'>
            <img src={product.img}  /> <br />
            <h3>{product.name.slice(0,20).concat('...')}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={()=>handleCart(product)} className='btn-cart' >Add To Cart</button>

        </div>
    );
};

export default Product;

