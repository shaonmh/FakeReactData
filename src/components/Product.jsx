import React from 'react';
import './Products.css'

const Product = ({product}) => {
    return (
<<<<<<< HEAD
        <div className='product'>
            <img src={product.img}  /> <br />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button className='btn-cart'>Add To Cart</button>
=======
        <div>
            <h2>{product.name}</h2>
            <img src={product.img}  /><br />
            <button>Add To Cart</button>
>>>>>>> 554b98c8ab0cdeef73791e0a34a23644badce6cf
        </div>
    );
};

export default Product;

