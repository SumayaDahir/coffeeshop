"use client"
import { useState } from "react";
import React from "react";

const CartPage = () => {
    const cartItems = [
        {
          id: 1,
          name: 'Coffee',
          image: '/latte.png',
          price: 2.99,
        },
        {
            id: 2,
            name: 'Donut',
            image: '/donut.png',
            price: 3.99,
          },
        {
          id: 3,
          name: 'Pancakes',
          image: '/pancakes.png',
          price: 7.99,
        },
        {
            id: 4,
            name: 'Chickenbowl',
            image: '/lunchbowl.png',
            price: 13.99,
          },
      
      ];
      // State for holding the current user's shopping cart.
      const [price, setPrice] = useState(0); 
    
      const handleAddToCart = (itemPrice: number, itemName: string) => {
        console.log(`Added ${itemName} to cart with price ${itemPrice}`);
        setPrice((prevPrice) => prevPrice + itemPrice);
      };

      const handleRemove = (itemPrice: number, itemName: string) => {
        console.log(`Removed ${itemName} from cart. The price is now ${itemPrice}`)
               setPrice((prevPrice) => Math.max(0, prevPrice - itemPrice));
      };
      const handleDelete = () => {
        setPrice(0);
      }
    return (
      <div className="container">
        <div className="grid-container">
        {cartItems.map((item) => ( 
              <div key={item.id} className="grid-card">
              <h2 className="grid-title">{item.name}</h2>
              <img
              className="grid-img"
              src={item.image}             
               alt={item.name}
            />
                <h3 className="grid-price">{item.price.toFixed(2)}</h3>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(item.price, item.name)}>
  Add to Cart
</button>
<button className="remove-from-cart" onClick={() => handleRemove(item.price, item.name)} > 
Remove </button>
          </div>
           ))}
        </div>
        
        <div className="total-price">Total Price: ${price.toFixed(2)}</div>
        <button className="clear-cart" onClick={handleDelete}> Clear Cart </button>

      </div>
    );
  };
  
  export default CartPage;
  