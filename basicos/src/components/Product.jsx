import React from 'react';

const Product = ({product}) => {
  // Product destructuring
  const {name, price, id} = product;

  //Add product to cart
  const selectProduct = () => {
    console.log('comprando....');
  }
  
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button 
        type='button' 
        onClick={() => selectProduct() }
        >Agregar al Carrito
      </button>
    </div> 
  );
}
 
export default Product;