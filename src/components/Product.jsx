import React from 'react';

const Product = ({product}) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.img}  /><br />
            <button>Add To Cart</button>
        </div>
    );
};

export default Product;

