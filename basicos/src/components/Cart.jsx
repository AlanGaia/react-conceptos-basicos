import React from "react";
import Product from "./Product";
import './cart.css'


const Cart = ({cart, setCartItems}) => (
  <div className="cart">
    <h2>Tu carrito de compras</h2>
		{
			//Cart is empty?
			cart.length === 0 	?

			//if cart is empty
			<p>No hay productos en el carrito</p>
		
			//else
			:cart.map(item => (
				<Product 
					key={item.id}
					product={item}
					cart={cart}
					setCartItems={setCartItems}
				/>
			))
		}
  </div>
);

export default Cart;
