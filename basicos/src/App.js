import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  //Get Product List
  const [products, setProducts] = useState([
    { id: 1, name: "Shirt ReactJS", price: 50,},
    { id: 2, name: "NodeJS Pants", price: 40,},
    { id: 3, name: "Jacket JavaScript", price: 120,},
    { id: 4, name: "Shoes VueJS", price: 20,},
  ]);

  //Get the actual year
  const year = new Date().getFullYear();

  return (
    <>
      <Header title="Tienda virtual" />

      <Footer year={year} />
    </>
  );
}

export default App;
