import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiEndpoints = {
  Burger: "https://www.themealdb.com/api/json/v1/1/search.php?s=Burger",
  Pizza: "https://www.themealdb.com/api/json/v1/1/search.php?s=Pizza",
  Pasta: "https://www.themealdb.com/api/json/v1/1/search.php?s=Pasta",
  Rice: "https://www.themealdb.com/api/json/v1/1/search.php?s=Rice",
  Sushi: "https://www.themealdb.com/api/json/v1/1/search.php?s=Sushi",
  Fish: "https://www.themealdb.com/api/json/v1/1/search.php?s=Fish",
  Chicken: "https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken",
  Salad: "https://www.themealdb.com/api/json/v1/1/search.php?s=Salad",
  Soup: "https://www.themealdb.com/api/json/v1/1/search.php?s=Soup",
  Cake: "https://www.themealdb.com/api/json/v1/1/search.php?s=Cake",
};

const FoodRecipes = () => {
  const { foodName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState({});
  const [cart, setCart] = useState([]); // Cart state to hold added items
  const [total, setTotal] = useState(0); // Total amount

  // Fetch meal recipes from API
  useEffect(() => {
    if (!foodName || !apiEndpoints[foodName]) return;

    setLoading(true);
    axios
      .get(apiEndpoints[foodName])
      .then((response) => {
        if (response.data && response.data.meals) {
          setRecipes(response.data.meals);
        } else {
          setRecipes([]);
        }
      })
      .catch((error) => console.error("Error fetching recipes:", error))
      .finally(() => setLoading(false));
  }, [foodName]);

  // Fetch product prices after recipes are fetched
  useEffect(() => {
    if (recipes.length === 0) return;

    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const productPrices = response.data.map((product) => product.price);
        const newPrices = {};
        recipes.forEach((meal, index) => {
          newPrices[meal.idMeal] = productPrices[index % productPrices.length];
        });
        setPrices(newPrices);
      })
      .catch((error) => console.error("Error fetching prices:", error));
  }, [recipes]);

  // Handle adding a meal to the cart
  const handleAddToCart = (meal) => {
    const price = prices[meal.idMeal] || 0;
    const newCart = [...cart, { meal, price }];
    setCart(newCart);
    setTotal((prevTotal) => prevTotal + price);
  };

  // Handle order confirmation
  const handleConfirmOrder = () => {
    alert("Your order has been confirmed!");
    setCart([]); // Clear cart
    setTotal(0); // Reset total
  };

  return (
    <div className="bg-sky-200">
      <div className="text-center m-4 font-custom">
        <h1 className="text-2xl font-bold font-custom">{foodName} List</h1>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : recipes.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-10 shadow-lg">
          {recipes.map((meal) => (
            <div key={meal.idMeal} className="text-center">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-[250px] h-[250px] rounded-xl"
              />
              <h3 className="mt-2 font-custom text-lg">{meal.strMeal}</h3>
              <p className="text-red-800 font-bold">
                Price: ${prices[meal.idMeal] ? prices[meal.idMeal].toFixed(2) : "Loading..."}
              </p>
              <div className="mt-2">
                <button
                  onClick={() => handleAddToCart(meal)}
                  className="bg-green-600 text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-green-700 inline-block"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No recipes found for {foodName}.</p>
      )}

      {/* Cart and Total Section */}
      <div className="mt-4 text-center">
        {cart.length > 0 && (
          <div>
            <h2 className="text-xl font-bold">Your Cart</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.meal.strMeal} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="font-bold mt-2">Total: ${total.toFixed(2)}</p>
            <button
              onClick={handleConfirmOrder}
              className="bg-blue-600 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-700"
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodRecipes;
