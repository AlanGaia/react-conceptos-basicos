import React from 'react';

const Product = ({product, cart , addProductToCart, products}) => {
  // Product destructuring
  const {name, price, id} = product;

  //Add product to cart
  const selectProduct = (id) => {
    const product = products.filter(product => product.id === id)[0];
    addProductToCart([
      ...cart,
      product
    ])
    
  }
  
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button 
        type='button' 
        onClick={() => selectProduct(id) }
        >Agregar al Carrito
      </button>
    </div> 
  );
}
 
export default Product;