import React, { useState, useEffect } from "react";
import axios from "axios";

const FoodRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken")
      .then(response => setRecipes(response.data.meals))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Food Recipes</h2>
      <ul>
        {recipes?.map(meal => (
          <li key={meal.idMeal}>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="200px" />
            <p>{meal.strInstructions.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodRecipes;
