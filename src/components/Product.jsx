import React from 'react';

const Product = ({product, handleCart}) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.img}  /><br />
            <button onClick={()=>handleCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;

