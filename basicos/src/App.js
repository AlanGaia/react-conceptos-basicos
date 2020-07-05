import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

 //obtener el año
 const year = new Date().getFullYear(); 
  return (
    <>
      <Header title='Tienda virtual' />

      <Footer year={year} />
    </>
  );
}

export default App;
