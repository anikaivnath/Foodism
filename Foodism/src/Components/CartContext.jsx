import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (meal, price) => {
    setCart((prevCart) => [...prevCart, { ...meal, price }]);
  };

  // Function to calculate total amount
  const getTotalAmount = () => {
    return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
