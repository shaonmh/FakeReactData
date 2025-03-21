import React from 'react';

const Product = ({product}) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.img}  />
        </div>
    );
};

export default Product;