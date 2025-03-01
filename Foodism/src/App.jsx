import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import NavBar from "./NavBar";
import FoodRecipes from "./FoodRecipes";
import Cart from "./Cart";

const App = () => {
  const [cart, setCart] = useState([]); // State to store cart items

  // Add item to the cart
  const addToCart = (meal, price) => {
    const newCart = [...cart];
    const existingItem = newCart.find(item => item.idMeal === meal.idMeal);

    if (existingItem) {
      existingItem.quantity += 1; // If item exists, increase quantity
    } else {
      newCart.push({ ...meal, price, quantity: 1 }); // Add new item to cart
    }

    setCart(newCart);
  };

  // Calculate total price of the items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Router>
      <NavBar cart={cart} calculateTotal={calculateTotal} />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<FoodRecipes addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} total={calculateTotal()} />} />
      </Routes>
    </Router>
  );
};

export default App;
