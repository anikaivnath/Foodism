import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (meal, price) => {
    setCart((prevCart) => [...prevCart, { ...meal, price }]);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
