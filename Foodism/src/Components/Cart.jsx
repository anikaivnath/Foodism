import React from "react";
import { useLocation } from "react-router-dom";

const OrderPage = () => {
  const location = useLocation();
  const { cart, total } = location.state || { cart: [], total: 0 };

  return (
    <div className="bg-sky-200 p-4">
      <h1 className="text-2xl font-bold text-center">Order Details</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mt-4">Items in your cart:</h2>
          <div className="mt-4">
            {cart.map((meal) => (
              <div key={meal.idMeal} className="flex justify-between items-center mb-4 p-2 border-b">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-[50px] h-[50px] rounded-md" />
                <span>{meal.strMeal}</span>
                <span>${meal.price}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mt-4">Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
