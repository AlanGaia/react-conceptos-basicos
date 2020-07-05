import React from 'react';

const Product = ({product, cart , setCartItems, products}) => {

  // Product destructuring
  const {name, price, id} = product;

  //Add product to cart
  const addProduct = (id) => {
    const product = products.filter(product => product.id === id)[0];
    setCartItems([
      ...cart,
      product
    ])
  }

  //delete product from cart
  const deleteProduct = (id) => {
    //get all products in cart without the deleted one
    const products = cart.filter(product => product.id !== id);

    //add those products to cart
    setCartItems(products)
  }
  
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      { products ?
        (
          <button 
            type='button' 
            onClick={() => addProduct(id) }
            >Agregar al Carrito
          </button>
        )
        :
        (
          <button 
            type='button'
            onClick={() => deleteProduct(id)} 
            >Eliminar
          </button>
        )
      }
      
    </div> 
  );
}
 
export default Product;