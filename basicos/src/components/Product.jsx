import React from 'react';

const Product = ({product}) => {
  // Product destructuring
  const {name, price, id} = product;
  
  return (
    <div>
      <h2>{name}</h2>
      <h4>${price}</h4>
    </div> 
  );
}
 
export default Product;