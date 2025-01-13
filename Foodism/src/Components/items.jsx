import React, { useState, useEffect } from "react";
import axios from "axios";

const FoodRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then(response => setRecipes(response.data.meals))
 
  }, []);

  return (
    <div>
      <div className="flex">
      <ul className="flex flex-wrap gap-4">
        {recipes?.map(meal => (
          <li key={meal.idMeal}>  
            <img src={meal.strMealThumb} alt={meal.strMeal} width="200px" />
            <h3>{meal.strMeal}</h3>
    
          </li>
        ))}
      </ul>

      </div>
      
    </div>
  );
};

export default FoodRecipes;
