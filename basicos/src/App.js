//Imports components
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";

//Main Function
function App() {

  //state for Product List
  const [products, setProducts] = useState([
    { id: 1, name: "Shirt ReactJS", price: 50,},
    { id: 2, name: "NodeJS Pants", price: 40,},
    { id: 3, name: "Jacket JavaScript", price: 120,},
    { id: 4, name: "Shoes VueJS", price: 20,},
  ]);

  //state for shopping cart
  const [cart, setCartItems] = useState([]);


  //Get the actual year
  const year = new Date().getFullYear();

  return (
    <>
      {/* Header component  */}
      <Header title="Tienda virtual" />
      
      {/* Product List */}
      <h2>Lista de productos</h2>
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          products={products}
          cart={cart}
          setCartItems={setCartItems}
        />
      ))}

      {/* Cart Component */}
      <Cart 
        cart={cart}
        setCartItems={setCartItems}
        />

      {/* Footer component */}
      <Footer year={year} />
    </>
  );
}

export default App;
