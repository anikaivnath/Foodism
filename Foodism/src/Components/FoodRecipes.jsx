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
  const [prices, setPrices] = useState({}); // Store meal prices

  // Fetch meal recipes
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

  // Fetch product prices separately after recipes are loaded
  useEffect(() => {
    if (recipes.length === 0) return;

    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const productPrices = response.data.map((product) => product.price);

        // Assign random prices
        const newPrices = {};
        recipes.forEach((meal, index) => {
          newPrices[meal.idMeal] = productPrices[index % productPrices.length];
        });
        setPrices(newPrices);
      })
      .catch((error) => console.error("Error fetching prices:", error));
  }, [recipes]); // Depend on `recipes` to fetch prices only after they are loaded

  return (
    <div className="bg-sky-200 ">
      <div className="text-center m-4 font-custom ">
        <h1 className="text-2xl font-bold font-custom">{foodName} List</h1>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : recipes.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-10 shadow-3xl">
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
                <a className="bg-green-600 text-white rounded-lg px-4 py-2 cursor-pointer hover:bg-green-700 inline-block">
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No recipes found for {foodName}.</p>
      )}
    </div>
  );
};

export default FoodRecipes;
