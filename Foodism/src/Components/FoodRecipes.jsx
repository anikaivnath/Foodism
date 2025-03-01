import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiEndpoints = {
  Burger: "https://www.themealdb.com/api/json/v1/1/search.php?s=Burger",
  Pizza: "https://www.themealdb.com/api/json/v1/1/search.php?s=Pizza",
  Pasta: "https://www.themealdb.com/api/json/v1/1/search.php?s=Pasta",
  Rice: "https://www.themealdb.com/api/json/v1/1/search.php?s=Rice",
  Sushi: "https://www.themealdb.com/api/json/v1/1/search.php?s=Sushi",
};

const FoodRecipes = () => {
  const { foodName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]); // Cart state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!foodName || !apiEndpoints[foodName]) return;

    setLoading(true);
    axios
      .get(apiEndpoints[foodName])
      .then((response) => {
        setRecipes(response.data.meals || []);
      })
      .catch((error) => console.error("Error fetching recipes:", error))
      .finally(() => setLoading(false));
  }, [foodName]);

  // Function to add items to cart
  const addToCart = (meal) => {
    const randomPrice = (Math.random() * 10 + 5).toFixed(2); // Random price between $5-$15
    setCart([...cart, { ...meal, price: parseFloat(randomPrice) }]);
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="bg-sky-200 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center">{foodName} List</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {recipes.map((meal) => (
            <div key={meal.idMeal} className="p-4 bg-white rounded-lg shadow-md text-center">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 rounded-lg" />
              <h3 className="mt-2 font-bold">{meal.strMeal}</h3>
              <button
                onClick={() => addToCart(meal)}
                className="bg-green-600 text-white mt-3 px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No recipes found for {foodName}.</p>
      )}

      {/* Cart Section */}
      <div className="mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart</p>
        ) : (
          <ul className="mt-3">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{item.strMeal}</span>
                <span className="text-green-600">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <h3 className="text-lg font-bold mt-4">Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default FoodRecipes;
