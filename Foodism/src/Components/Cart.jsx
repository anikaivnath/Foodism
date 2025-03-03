import React from "react";

const Cart = ({ cart, prices }) => {
  // Calculate the total price of the items in the cart
  const totalAmount = cart.reduce((total, meal) => {
    const price = prices[meal.idMeal];
    return total + (price || 0); // Add price if it exists, otherwise 0
  }, 0);

  return (
    <div className="bg-sky-200 min-h-screen">
      <div className="text-center m-4 font-custom">
        <h1 className="text-2xl font-bold">Your Cart</h1>
      </div>
      {cart.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-10 shadow-lg">
          {cart.map((meal, index) => (
            <div key={index} className="text-center">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-[250px] h-[250px] rounded-xl"
              />
              <h3 className="mt-2 font-custom text-lg">{meal.strMeal}</h3>
              <p className="text-red-800 font-bold">
                Price: ${prices[meal.idMeal] ? prices[meal.idMeal].toFixed(2) : "Loading..."}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}

      {/* Total Amount */}
      {cart.length > 0 && (
        <div className="text-center mt-4">
          <p className="text-xl font-bold">
            Total Amount: ${totalAmount.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
