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
      <div className="flex">
        <div className="flex flex-wrap gap-10 justify-center">
          {recipes?.map(meal => (
         
            <div key={meal.idMeal} >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width="200px"
                className="rounded-lg"
              />
              <h3 className="text-center mt-2">{meal.strMeal}</h3>
            </div>
           
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodRecipes;
