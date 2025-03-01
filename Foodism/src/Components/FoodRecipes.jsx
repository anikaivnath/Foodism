import { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";

const FoodRecipes = () => {
  const [meals, setMeals] = useState([]);
  const { cart, addToCart, getTotalAmount } = useContext(CartContext);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => setMeals(data.meals || []))
      .catch((error) => console.error("Error fetching meals:", error));
  }, []);

  // Add meal to cart with a random price between $5-$15
  const handleOrderNow = (meal) => {
    const randomPrice = (Math.random() * 10 + 5).toFixed(2);
    addToCart(meal, parseFloat(randomPrice));
  };

  return (
    <div>
      <h1>Food Recipes</h1>
      <div className="meal-container">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
            <p>Category: {meal.strCategory}</p>
            <p>Area: {meal.strArea}</p>
            <button onClick={() => handleOrderNow(meal)}>Order Now</button>
          </div>
        ))}
      </div>

      {/* Display Cart */}
      <h2>🛒 Your Cart</h2>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.strMeal} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotalAmount()}</h3>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default FoodRecipes;
